import Image from "next/image";
import { ProductType } from "@/types/ProductType";
import Product from "./components/Product";

export default async function Home() {
  async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) {
      throw new Error("Falha ao consumir API");
    }
    return res.json();
  }
  const products = await getProducts();
  return (
    <div className="max-w-7xl mx-auto border pt-8 px-8 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6 text-black">
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
