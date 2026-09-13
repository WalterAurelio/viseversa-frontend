import type { Meta, StoryObj } from "@storybook/react-vite";
import { createForm } from "../utils/createForm";
import { testSchema } from "../utils/testSchema";
import FormWrapper from "../components/FormWrapper";

const { Fieldset, Checkbox } = createForm(testSchema);

const meta = {
  title: "Components/Fieldset",
  component: Fieldset,
  argTypes: {
    className: { control: false }
  },
  args: {
    className: "max-w-72",
    legend: "Talle:",
    htmlName: "size",
    children: (
      <>
        <Checkbox name="size" id="xs" label="XS" value="XS" />
        <Checkbox name="size" id="s" label="S" value="S" />
        <Checkbox name="size" id="m" label="M" value="M" />
        <Checkbox name="size" id="l" label="L" value="L" />
        <Checkbox name="size" id="xl" label="XL" value="XL" />
        <Checkbox name="size" id="xxl" label="XXL" value="XXL" />
      </>
    )
  },
  decorators: [
    (Story) => (
      <FormWrapper htmlName="size">
        <Story />
      </FormWrapper>
    )
  ]
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
