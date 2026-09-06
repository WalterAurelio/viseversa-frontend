import type { Meta, StoryObj } from "@storybook/react-vite";
import CheckboxFn from "../components/Checkbox";
import FormWrapper from "../components/FormWrapper";
import type { TestSchema } from "../utils/testSchema";

type Size = { size: TestSchema["size"] };

const Checkbox = CheckboxFn<Size>();

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    name: "size",
    id: "xl",
    label: "XL",
    value: "XL"
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
