import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "../components/Checkbox";
import FormWrapper from "../components/FormWrapper";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    name: "checkbox",
    id: "checkbox",
    label: "Label",
    value: "checkbox"
  },
  decorators: [
    (Story) => (
      <FormWrapper name="checkbox">
        <Story />
      </FormWrapper>
    )
  ]
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
