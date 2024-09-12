import { useRef, useState } from "react";

export function useHeaderController() {
  const [open, setOpen] = useState(false);
  const homeLink = useRef<HTMLAnchorElement>(null);
  const aboutMeLink = useRef<HTMLAnchorElement>(null);
  const projectsLink = useRef<HTMLAnchorElement>(null);
  const contactLink = useRef<HTMLAnchorElement>(null);

  function handleOpenNavMenu() {
    setOpen(true);
  }

  function handleCloseNavMenu() {
    setOpen(false);
  }

  return {
    open,
    handleOpenNavMenu,
    handleCloseNavMenu,
    homeLink,
    aboutMeLink,
    projectsLink,
    contactLink
  }
}