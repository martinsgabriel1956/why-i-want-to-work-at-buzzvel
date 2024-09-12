'use client';

import { useState } from "react";
import { HamburgerMenuIcon, } from '@radix-ui/react-icons';
import { NavLink } from "../link";
import { Menu } from "./components/menu";

export function Header() {
  const [open, setOpen] = useState(false);

  function handleOpenNavMenu() {
    setOpen(true);
  }

  function handleCloseNavMenu() {
    setOpen(false);
  }

  return (
    <header className="flex justify-between items-center w-full lg:px-16 lg:py-8">
      <h1 className="max-md:sr-only">Gabriel Martins</h1>

      <nav className="hidden md:flex">
        <ul className="flex gap-4">
          <li>
            <NavLink href="#home">Home</NavLink>
          </li>
          <li>
            <NavLink href="#about-me">About me</NavLink>
          </li>
          <li>
            <NavLink href="#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="#contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {open && <Menu onClose={handleCloseNavMenu} />}

      {!open && (
        <button
          onClick={handleOpenNavMenu}
          className="lg:sr-only absolute top-4 right-4 text-white"
          title="Close menu"
          type="button"
        >
          <HamburgerMenuIcon />
        </button>
      )}


      <button>Resume</button>
    </header>
  )
}