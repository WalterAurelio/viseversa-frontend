import type { Meta, StoryObj } from "@storybook/react-vite";
import NavBar from "../interfaces/NavBar";
import type { UserAvatarResponse } from "../services/users/users.types";
import type { ApiResponse } from "../types/ApiResponse";
import { http, HttpResponse } from "msw";

const TestData: Pick<ApiResponse<UserAvatarResponse>, "data"> = {
  data: {
    nombreUsuario: "randomuser",
    fotoPerfil: "https://randomuser.me/api/portraits/men/75.jpg"
  }
};

const meta = {
  title: "Interfaces/NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  beforeEach({ msw }) {
    msw.use(
      http.get("http://localhost:3000/api/users", () => {
        return HttpResponse.json(TestData);
      })
    );
  }
};
