'use client'
import { useCartStore } from "@/store"
export default function Cart() {
    const useStore = useCartStore();
    return (
        <div>
            <div onClick={() => useStore.toggleCart()} className="flex items-center cursor-pointer relative">
                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                </svg>
                <span className='bg-white text-gray-600 text-sm rounded-full font-bold h-5 w-5 text-center absolute left-3 bottom-3'>2</span>
            </div>
            {
                useStore.isOpen && (
                    <div onClick={() => useStore.toggleCart()} className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50">
                        <div onClick={(e) => e.stopPropagation()} className="absolute bg-blue-800 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll">
                            <h1>Meu Carrinho</h1>
                            {
                                useStore.cart.map((item) => {
                                    return (
                                        <div key={item.id}>{item.name}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }

        </div>
    )
}