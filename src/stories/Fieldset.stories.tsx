import type { Meta, StoryObj } from "@storybook/react-vite";
import Fieldset from "../components/Fieldset";
import Checkbox from "../components/Checkbox";

const meta = {
  title: "Components/Fieldset",
  component: Fieldset,
  args: {
    className: "max-w-72",
    legend: "Label",
    errorMsg: "Error message",
    children: (
      <div className="flex flex-wrap gap-xs">
        <Checkbox label="XS" id="xs" />
        <Checkbox label="S" id="s" />
        <Checkbox label="M" id="m" />
        <Checkbox label="L" id="l" />
        <Checkbox label="XL" id="xl" />
        <Checkbox label="XXL" id="xxl" />
      </div>
    )
  },
  argTypes: {
    className: { control: false }
  }
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
