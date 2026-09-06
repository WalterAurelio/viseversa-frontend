import type { Preview } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import "../vitest.shims.d.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/index.css";
import { mswLoader } from "msw-storybook-addon/csf3";
import "react-time-ago/locale/es";

// Cliente de TanStack Query para Storybook
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity
    }
  }
});

const preview: Preview = {
  loaders: [mswLoader()],
  tags: ["autodocs"],
  beforeEach: () => {
    queryClient.clear();
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </MemoryRouter>
    )
  ],
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "desktop",
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "320px",
            height: "768px"
          }
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px"
          }
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1280px",
            height: "1024px"
          }
        }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      disableSaveFromUI: true
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  }
};

export default preview;
