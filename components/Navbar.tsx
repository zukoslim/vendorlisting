"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
  const active_route = "text-2xl hover:text-2xl transition-all duration-300 ease-in-out text-blue-500"
const inactive_route = "text-xl hover:text-4xl transition-all duration-300 ease-in-out"

function AuthButoon () {
    const { data: session } = useSession()
  
    if (session) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-sm">Welcome, {session.user?.name}</span>
                <button onClick={() => signOut()} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Sign Out
                </button>
            </div>
        )
    }
    return (
        <div className="flex items-center gap-4">
            <span className="text-sm">You are not signed in</span>
            <button onClick={() => signIn("github")} className="bg-blue-500 text-white px-4 py-2 rounded">
                Sign In with GitHub
            </button>
        </div>
    )


}

export default function Navbar() {
    const pathname = usePathname()
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-lg font-bold">Vendor Listing</Link>
                <AuthButoon />
                <ul>
                    <Link href="/" className={pathname === "/" ? active_route : inactive_route}>Home</Link>
                    <Link href="/dashboard" className={pathname === "/dashboard" ? active_route : inactive_route}>dashboard</Link>
                    <Link href="/serveraction" className={pathname === "/serveraction" ? active_route : inactive_route}>ServerAction</Link>
                    <Link href="/apifetchclient" className={pathname === "/apifetchclient" ? active_route : inactive_route}>Api Client</Link>
                </ul>
            </div>
        </nav>
    )
}