import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { SocialLink } from "./components/social-links";
import { Header } from "./components/header";
import { AvatarCircle } from './components/avatar-circle';
import { HeroText } from './components/hero-text';

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    children: <LinkedInLogoIcon />,
    href: "https://www.linkedin.com/in/gabriel-castro-da-silva-martins-239b67181/",
  },
  {
    name: "Github",
    children: <GitHubLogoIcon />,
    href: "https://github.com/martinsgabriel1956",
  },
  {
    name: "Email",
    children: <EnvelopeClosedIcon />,
    href: "mailto:martinsgabriel1956@gmail.com",
  },
]

export function HeroSection() {
  return (
    <section id="home" className="bg-[#1B2022] w-full h-screen flex flex-col items-center pb-8">
      <Header />
      <div className="flex flex-col lg:flex-row w-full items-center lg:justify-between lg:px-16">
        <div className="flex flex-col items-center lg:flex-row gap-8">
          <AvatarCircle />
          <HeroText />
        </div>
        <div className="flex gap-4 lg:gap-2 lg:flex-col">
          {SOCIAL_LINKS.map(({ children, href, name }) => (
            <SocialLink key={name} href={href}>
              {children}
            </SocialLink>
          ))}
        </div>
      </div>
    </section>
  )
}