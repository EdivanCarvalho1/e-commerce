import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/utils";
import AddCart from './AddCart'
type ProductProps = {
    product: ProductType
}
export default function Product({ product }: ProductProps) {
    return (
        <div className="flex flex-col shadow-lg h-96 bg-slate-200 hover:scale-110 transition-all p-5">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill />
            </div>
            <div className="flex justify-between font-bold my-3">
                {product.name}
                <div>
                    {formatPrice(product.price)}
                </div>
            </div>
            <AddCart product={product} />
        </div>
    )
}