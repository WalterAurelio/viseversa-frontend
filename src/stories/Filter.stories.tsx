import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, HttpResponse } from "msw";
import { Navigate, Route, Routes } from "react-router";
import Filter from "../components/Filter";

const meta = {
  title: "Components/Filter",
  component: Filter
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <Routes>
        <Route path="/" element={<Navigate to="/mujer" replace />} />
        <Route path="/:category" element={<Story />} />
      </Routes>
    )
  ],
  beforeEach({ msw }) {
    msw.use(
      http.get("http://localhost:3000/api/sizes/:category", () => {
        return HttpResponse.json({ data: ["S", "M", "L"] });
      }),
      http.get("http://localhost:3000/api/locations", () => {
        return HttpResponse.json({ data: ["Buenos Aires", "Cordoba"] });
      })
    );
  }
};
