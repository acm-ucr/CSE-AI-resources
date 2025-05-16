import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/UCRLogo.svg";
import { LINKS, FOOTER_LINKS } from "@/data/footer";

const Footer = () => (
  <footer className="w-full bg-ucr-blue text-white">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col space-y-6">
        <Image src={logo} alt="UCR Logo" className="w-32" />
        <hr className="border-white/50" />
        <div className="flex flex-col space-y-3">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition-colors duration-200 hover:text-ucr-yellow"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center space-y-4">
        <div className="text-2xl font-semibold uppercase text-ucr-yellow">
          University of California, Riverside
        </div>
        <address className="space-y-1 text-base not-italic leading-relaxed">
          <p>900 University Ave.</p>
          <p>Riverside, CA 92521</p>
          <p>Tel: (951) 827-4800</p>
        </address>
        <div className="mt-4 space-y-1 text-sm leading-snug">
          <p className="font-bold">Website Development Team</p>
          <p>
            <span className="font-semibold">Direction:</span> Yue Dong (CSE
            faculty; questions or updates:{" "}
            <Link
              href="mailto:yue.dong@ucr.edu"
              className="underline transition-colors duration-300 hover:text-ucr-yellow"
            >
              yue.dong@ucr.edu
            </Link>
            )
          </p>
          <p>
            <span className="font-semibold">Development:</span> Jonathan
            Trujillo (ACM@UCR President), Jerry Li (ACM@UCR Vice President)
          </p>
          <p>
            <span className="font-semibold">Advising:</span> Christian Shelton
            (CSE Department Chair)
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-ucr-yellow text-ucr-blue">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-6 py-4 text-sm md:gap-6">
        {FOOTER_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white/70"
          >
            {label}
          </Link>
        ))}
        <span>
          &copy; {new Date().getFullYear()} Regents of the University of
          California
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
