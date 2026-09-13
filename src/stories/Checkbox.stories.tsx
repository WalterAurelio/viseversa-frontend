import type { Meta, StoryObj } from "@storybook/react-vite";
import { createForm } from "../utils/createForm";
import { testSchema } from "../utils/testSchema";
import FormWrapper from "../components/FormWrapper";

const { Checkbox } = createForm(testSchema);

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    name: "size",
    id: "xl",
    label: "XL"
    // value: "XL"
  },
  decorators: [
    (Story) => (
      <FormWrapper>
        <Story />
      </FormWrapper>
    )
  ]
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
