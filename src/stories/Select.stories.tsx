import type { Meta, StoryObj } from "@storybook/react-vite";
import { createForm } from "../utils/createForm";
import { testSchema } from "../utils/testSchema";
import FormWrapper from "../components/FormWrapper";

const { Select, Option } = createForm(testSchema);

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    name: "location",
    id: "location",
    defaultValue: "",
    children: (
      <>
        <Option disabled>Seleccione una ubicación</Option>
        <Option field="location" value="buenos-aires">
          Buenos Aires
        </Option>
        <Option field="location" value="cordoba">
          Córdoba
        </Option>
        <Option field="location" value="santa-fe">
          Santa Fe
        </Option>
      </>
    )
  },
  decorators: [
    (Story) => (
      <FormWrapper>
        <Story />
      </FormWrapper>
    )
  ]
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
