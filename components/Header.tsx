import React from "react";
import logo from "@/public/logo.png";
import NavLink from "./NavLink";

const links = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/add-news',
    label: 'Add News',
  }, 
  {
    href: '/categories',
    label: 'Categories'
  },
  {
    href: '/admin',
    label: 'Admin'
  },
]

const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
        <h1>Quick News</h1>
      </div>
      <nav>
        {
          links.map((link) => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)
        }
      </nav>
    </div>
  );
};

export default Header;
