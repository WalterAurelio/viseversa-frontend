import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "../components/Avatar";
import { http, HttpResponse } from "msw";
import type { ApiResponse } from "../types/ApiResponse";
import type { UserAvatarResponse } from "../services/users/users.types";

const TestData: Pick<ApiResponse<UserAvatarResponse>, "data"> = {
  data: {
    nombreUsuario: "randomuser",
    fotoPerfil: "https://randomuser.me/api/portraits/men/75.jpg"
  }
};

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  args: {
    size: "S",
    hasStatus: true,
    hasUsername: true
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["S", "M", "L", "XL"]
    },
    hasStatus: {
      control: { type: "radio" },
      options: [true, false]
    },
    hasUsername: {
      control: { type: "radio" },
      options: [true, false]
    }
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithProfilePicture: Story = {
  beforeEach({ msw }) {
    msw.use(
      http.get("http://localhost:3000/api/users", () => {
        return HttpResponse.json(TestData);
      })
    );
  }
};

export const WithoutProfilePicture: Story = {
  beforeEach({ msw }) {
    msw.use(
      http.get("http://localhost:3000/api/users", () => {
        return HttpResponse.json({
          data: {
            ...TestData.data,
            fotoPerfil: undefined
          }
        });
      })
    );
  }
};
