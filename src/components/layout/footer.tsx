import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { faGithub, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "wouter";
import imgGtLogoWhite from "/images/gt-logo-white.svg";

export default function Footer() {
  return (
    <footer className="bg-[var(--gt-navy)] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-1">
              <img src={imgGtLogoWhite} alt="Georgia Tech Logo" className="h-15 mt-1" />
              <div className="font-sans font-bold text-xl">CSSE</div>
            </div>
            <p className="text-gray-300 mb-4">
              The Center for Scientific Software Engineering at Georgia Tech, part of the{" "}
              <a
                href="https://www.schmidtsciences.org/viss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white">
                Virtual Institute for Scientific Software (VISS)
              </a>
              , advances research through professional software engineering practices.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com/georgiatech" icon={faXTwitter} />
              <SocialLink
                href="https://linkedin.com/school/georgia-institute-of-technology/"
                icon={faLinkedin}
              />
              <SocialLink href="https://github.com/gt-csse" icon={faGithub} />
              <SocialLink href="https://www.youtube.com/user/GeorgiaTech" icon={faYoutube} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <ExternalFooterLink href={`${import.meta.env.VITE_CSSE_GT_PAGE}/people/`}>
                Team
              </ExternalFooterLink>
              <ExternalFooterLink href={`${import.meta.env.VITE_CSSE_GT_PAGE}/events/`}>
                Events
              </ExternalFooterLink>
              <ExternalFooterLink href={`${import.meta.env.VITE_CSSE_GT_PAGE}/contact/`}>
                Contact
              </ExternalFooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Georgia Tech</h3>
            <ul className="space-y-2">
              <ExternalFooterLink href="https://www.gatech.edu">Main Website</ExternalFooterLink>
              <ExternalFooterLink href="https://www.cc.gatech.edu">
                College of Computing
              </ExternalFooterLink>
              <ExternalFooterLink href="https://www.cos.gatech.edu">
                College of Sciences
              </ExternalFooterLink>
              <ExternalFooterLink href="https://www.coe.gatech.edu">
                College of Engineering
              </ExternalFooterLink>
              <ExternalFooterLink href="https://www.research.gatech.edu">
                Research Portal
              </ExternalFooterLink>
              <ExternalFooterLink href="https://www.library.gatech.edu">Library</ExternalFooterLink>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Center for Scientific Software Engineering, Georgia
            Institute of Technology. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <a
              href="https://www.gatech.edu/privacy"
              className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
              Legal & Privacy Information
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="https://www.gatech.edu/accountability"
              className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
              Accountability
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="https://www.gatech.edu/accessibility"
              className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  rel?: string;
  target?: string;
  children: React.ReactNode;
}

function FooterLink(
  { href, target = "", rel = "", children }: FooterLinkProps,
  isExternal: boolean = false
) {
  return (
    <li>
      {isExternal ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
          {children}
        </a>
      ) : (
        <Link
          href={href}
          target={target}
          rel={rel}
          className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
          {children}
        </Link>
      )}
    </li>
  );
}

function ExternalFooterLink({ href, children }: FooterLinkProps) {
  return FooterLink(
    {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      children: children,
    },
    true
  );
}

interface SocialLinkProps {
  href: string;
  icon: IconDefinition;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
      <FontAwesomeIcon icon={icon} size="xl" />
    </a>
  );
}
