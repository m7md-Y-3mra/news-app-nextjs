import React from "react";
import NavLink from "./NavLink";
import { Boxes, CirclePlus, House, Shield } from "lucide-react";

const links = [
  {
    href: '/',
    label: 'Home',
    icon: <House />
  },
  {
    href: '/add-news',
    label: 'Add News',
    icon: <CirclePlus />
  }, 
  {
    href: '/categories/us/sports',
    label: 'Categories',
    icon: <Boxes />
  },
  {
    href: '/admin',
    label: 'Admin',
    icon: <Shield />
  },
]

const Header = () => {
  return (
    <header className="px-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="uppercase font-extrabold text-xl">News</h1>
        <nav className="flex justify-between">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} icon={link.icon}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
