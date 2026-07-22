import type { Preview } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router';
// Estilos globales y base
import '../src/index.css';
import '../src/styles/base/reset.css';
import '../src/styles/primitives/colour.css';
// Utilidades
import '../src/styles/utilities/breakpoint.css';
import '../src/styles/utilities/colour.css';
import '../src/styles/utilities/radius.css';
import '../src/styles/utilities/spacing.css';
import '../src/styles/utilities/stroke.css';
import '../src/styles/utilities/typography.css';
import '../src/styles/utilities/custom/typography.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '320px',
            height: '768px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '1024px',
          },
        },
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;