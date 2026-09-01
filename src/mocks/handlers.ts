import { http, HttpResponse } from "msw";
import type { UserProfileResponse } from "../services/users/users.types";
import type { ApiResponse } from "../types/ApiResponse";

export const handlers = [
  http.get("http://localhost:3000/api/users", () => {
    return HttpResponse.json<Partial<ApiResponse<UserProfileResponse>>>({
      data: {
        nombre: "Aurelio",
        apellido: "Gareca",
        nombreUsuario: "wolter22",
        fotoPerfil: "https://randomuser.me/api/portraits/men/75.jpg",
        createdAt: "2023-01-01T00:00:00Z"
      }
    });
  })
];
