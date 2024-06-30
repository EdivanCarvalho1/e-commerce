import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
function NavBar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-blue-900 text-white">
            <Link className="font-bold text-2xl h-12 flex items-center" href='/'>
                Hardware Hub
            </Link>
            <div className="flex items-center gap-8">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode='modal'>
                        <button className="rounded-md border border-white text-white px-3 py-2">Fazer Login</button>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>

    )
}

export default NavBar;