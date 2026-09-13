import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetUserProfile } from "../services/users/users.queries";
import { expect, test } from "vitest";
import { Suspense } from "react";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={null}>{children}</Suspense>
  </QueryClientProvider>
);

test("useGetUserProfile returns the expected data", async () => {
  const { result } = renderHook(() => useGetUserProfile(), { wrapper });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toMatchObject({
    name: "Aurelio",
    lastName: "Gareca",
    username: "wolter22",
    profilePicture: "https://randomuser.me/api/portraits/men/75.jpg",
    createdAt: "2023-01-01T00:00:00Z"
  });
});
