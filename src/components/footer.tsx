import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/UCRLogo.svg";
import { LINKS, FOOTER_LINKS } from "@/data/footer";

const Footer = () => {
  return (
    <div className="flex min-h-60 w-full flex-col items-center justify-center bg-ucr-blue text-white">
      <div className="flex w-full max-w-3xl flex-col items-start justify-between p-10 md:flex-row md:items-center">
        <div className="mb-6 flex flex-col space-y-4 md:mb-0">
          <Image src={logo} alt="UCR Logo" />
          <div className="my-2 h-px w-8 bg-white" />
          <div className="flex flex-col gap-y-2">
            {LINKS.map(({ href, label }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-ucr-yellow"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="font-medium text-ucr-yellow">
            UNIVERSITY OF CALIFORNIA, RIVERSIDE
          </div>
          <p>900 University Ave.</p>
          <p>Riverside, CA 92521</p>
          <p>Tel: (951) 827-4800</p>
        </div>
      </div>
      <div className="flex min-h-8 w-full flex-col items-center justify-center bg-ucr-yellow py-4 text-ucr-blue">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {FOOTER_LINKS.map(({ href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-ucr-blue/80"
                >
                  {label}
                </Link>
              ))}
              <div>
                &copy; {new Date().getFullYear()} Regents of the University of
                California
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
