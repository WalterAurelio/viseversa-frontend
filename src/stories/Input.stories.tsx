import type { Meta, StoryObj } from "@storybook/react-vite";
import { createForm } from "../utils/createForm";
import { testSchema } from "../utils/testSchema";
import FormWrapper from "../components/FormWrapper";

const { Input } = createForm(testSchema);

const meta = {
  title: "Components/Input",
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
