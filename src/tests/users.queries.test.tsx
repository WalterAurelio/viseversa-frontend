import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetUserProfile } from "../services/users/users.queries";
import { expect, test } from "vitest";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

test("useGetUserProfile returns the expected data", async () => {
  const { result } = renderHook(() => useGetUserProfile(), { wrapper });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toMatchObject({
    nombre: "Aurelio",
    apellido: "Gareca",
    nombreUsuario: "wolter22",
    fotoPerfil: "https://randomuser.me/api/portraits/men/75.jpg",
    createdAt: "2023-01-01T00:00:00Z"
  });
});
