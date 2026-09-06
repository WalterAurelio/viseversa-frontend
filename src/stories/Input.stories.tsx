import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "../components/Input";
import FormWrapper from "../components/FormWrapper";
import type { TestSchema } from "../utils/testSchema";

const meta = {
  title: "Components/Input",
  component: Input<TestSchema>,
  args: {
    name: "name",
    id: "name",
    placeholder: "Ingresa tu nombre",
    type: "text"
  },
  argTypes: {
    placeholder: {
      control: { type: "text" }
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "search"]
    }
  },
  decorators: [
    (Story) => (
      <FormWrapper>
        <Story />
      </FormWrapper>
    )
  ]
} satisfies Meta<typeof Input<TestSchema>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
