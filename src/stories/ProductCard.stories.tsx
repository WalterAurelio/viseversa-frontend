import type { Meta, StoryObj } from "@storybook/react-vite";
import ProductCard, { type TProduct } from "../components/ProductCard.tsx";
import productsJson from "../json/products.json";

const products = productsJson as TProduct[];

const meta = {
  title: "Components/ProductCard",
  component: ProductCard,
  args: {
    product: products[0]
  }
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {};
