import type { Meta, StoryObj } from "@storybook/react-vite";
import { createForm } from "../utils/createForm";
import { testSchema } from "../utils/testSchema";
import FormWrapper from "../components/FormWrapper";

const { Select, Option } = createForm(testSchema);

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    name: "province",
    id: "province",
    defaultValue: "",
    children: (
      <>
        <Option disabled>Seleccione una provincia</Option>
        <Option field="province" value="buenos-aires">
          Buenos Aires
        </Option>
        <Option field="province" value="cordoba">
          Córdoba
        </Option>
        <Option field="province" value="santa-fe">
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
