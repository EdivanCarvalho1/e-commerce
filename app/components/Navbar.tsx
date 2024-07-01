import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useCartStore } from "@/store";
function NavBar() {
    //const useStore = useCartStore();
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-blue-900 text-white">
            <Link className="font-bold text-2xl h-12 flex items-center" href='/'>
                Hardware Hub
            </Link>
            <div className="flex items-center gap-8">
                <div className="flex items-center cursor-pointer relative">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                    </svg>
                <span className='bg-white text-gray-600 text-sm rounded-full font-bold h-5 w-5 text-center absolute left-3 bottom-3'>2</span>
                </div>
                <div>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode='modal'>
                            <button className="rounded-md border border-white text-white px-3 py-2">Fazer Login</button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;