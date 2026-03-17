import type { ProductsProps } from "../../types/index.type";

function productCard({ product }: { product: ProductsProps }) {
  return (
    <div key={product.id} className="rounded-lg max-w-lg space-y-2">
      <h1 className="text-lg">{product.title}</h1>
      <h2 className="text-sm">{product.description}</h2>
    </div>
  );
}

export default productCard;
