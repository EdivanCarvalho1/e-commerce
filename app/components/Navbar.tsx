import Link from "next/link";
import React from "react";

function NavBar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-blue-900 text-yellow-400">
            <Link className="font-bold text-2xl h-12 flex items-center" href='/'>
                Hardware Hub
            </Link>
        </nav>
    )
}

export default NavBar;