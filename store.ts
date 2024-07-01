import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductType } from './types/ProductType'

type CartState = {
    products: ProductType[],
    //addToCart: (product: ProductType) => void;
    //removeFromCart: (productId: ProductType) => void;
    isOpen: boolean,
    toggleCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist((set) => ({
        products: [],
        isOpen: false,
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }), { name: 'cart-storage' })
);
