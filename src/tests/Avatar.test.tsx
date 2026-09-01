import { test, expect, vi, describe, afterEach } from "vitest";
import { render /* screen */ } from "@testing-library/react";
import Avatar from "../components/Avatar";
import * as userQueries from "../services/users/users.queries";
import type { UserProfileResponse } from "../services/users/users.types";

vi.mock("../services/users/users.queries.ts");

describe("Avatar component", () => {
  const mockUserProfile = {
    nombre: "Aurelio",
    apellido: "Gareca",
    nombreUsuario: "wolter22",
    fotoPerfil: "https://randomuser.me/api/portraits/men/75.jpg",
    createdAt: "2023-01-01T00:00:00Z"
  } satisfies UserProfileResponse;

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("shows the correct profile picture and username", () => {
    vi.mocked(userQueries.useGetUserProfile, { partial: true }).mockReturnValue({
      data: mockUserProfile
    });

    const { getByTestId } = render(<Avatar />);

    const avatar = getByTestId("avatar-component");

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent("wolter22");
    expect(avatar.querySelector("img")).toHaveAttribute("src", "https://randomuser.me/api/portraits/men/75.jpg");
  });

  test("shows the default icon when no profile picture is available", () => {
    vi.mocked(userQueries.useGetUserProfile, { partial: true }).mockReturnValue({
      data: {
        ...mockUserProfile,
        fotoPerfil: undefined
      }
    });

    const { getByTestId } = render(<Avatar />);

    const avatar = getByTestId("avatar-component");

    expect(avatar).toBeInTheDocument();
    expect(avatar.querySelector("img")).not.toBeInTheDocument();
  });
});
