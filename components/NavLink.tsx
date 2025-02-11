"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react"

interface NavLinkProps {
    href: string,
    children: React.ReactNode
}

const NavLink:React.FC<NavLinkProps> = ({href, children}) => {
  const path = usePathname();
  return (
    <Link
     href={href}
     className={path === href ? 'border border-red-50' : ''}
     >
       {children} 
    </Link>
  )
}

export default NavLink