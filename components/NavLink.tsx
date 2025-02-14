"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon: React.JSX.Element
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, icon }) => {
  const path = usePathname();
  return (
    <div >
      <Link href={href} className={`flex items-center gap-2 p-4 text-gray-700 border border-transparent ${path === href ? `border-b-primary` : ''} `}>
        {React.cloneElement(icon, {className: "w-5 h-5"})}
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
