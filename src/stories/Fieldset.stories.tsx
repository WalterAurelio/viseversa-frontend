import type { Meta, StoryObj } from "@storybook/react-vite";
import Fieldset from "../components/Fieldset";
import CheckboxFn from "../components/Checkbox";
import FormWrapper from "../components/FormWrapper";
import type { TestSchema } from "../utils/testSchema";

const Checkbox = CheckboxFn<TestSchema>();

const meta = {
  title: "Components/Fieldset",
  component: Fieldset<TestSchema>,
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
      <FormWrapper<TestSchema> htmlName="size">
        <Story />
      </FormWrapper>
    )
  ]
} satisfies Meta<typeof Fieldset<TestSchema>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
