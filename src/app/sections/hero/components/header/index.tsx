'use client';

import { HamburgerMenuIcon, } from '@radix-ui/react-icons';
import { NavLink } from "./components/link";
import { Menu } from "./components/menu";
import { useHeaderController } from "./controller/useHeaderController";

export function Header() {
  const { handleCloseNavMenu, handleOpenNavMenu, open, aboutMeLink, contactLink, homeLink, projectsLink } = useHeaderController();

  return (
    <header className="flex justify-between items-center w-full lg:px-16 lg:py-8">
      <h1 className="max-md:sr-only">Gabriel Martins</h1>

      <nav className="hidden md:flex">
        <ul className="flex gap-4">
          <li>
            <NavLink ref={homeLink} href="#home">Home</NavLink>
          </li>
          <li>
            <NavLink ref={aboutMeLink} href="#about-me">About me</NavLink>
          </li>
          <li>
            <NavLink ref={projectsLink} href="#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink ref={contactLink} href="#contact">Contact</NavLink>
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