import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/UCRLogo.svg";
import { LINKS, FOOTER_LINKS } from "@/data/footer";

const Footer = () => (
  <div className="w-full bg-ucr-blue text-white">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2">
      <div className="flex flex-col space-y-6">
        <div className="w-32">
          <Image src={logo} alt="UCR Logo" />
        </div>
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
      <div className="flex flex-col justify-center">
        <div className="mb-4 text-2xl font-semibold uppercase text-ucr-yellow">
          University of California, Riverside
        </div>
        <div className="space-y-1 text-base not-italic leading-relaxed">
          <p>900 University Ave.</p>
          <p>Riverside, CA 92521</p>
          <p>Tel: (951) 827-4800</p>
        </div>
        <div className="mt-6 space-y-2 text-sm leading-snug">
          <p>
            <strong>Maintained by:</strong> Professor Yue Dong
          </p>
          <p>
            <strong>Developed by:</strong> ACM@UCR - Jonathan Trujillo
            (President) & Jerry Li (Vice President)
          </p>
          <p>
            <strong>Guidance from:</strong> Professor Christian Shelton (CSE
            Dept. Chair)
          </p>
          <p>
            <strong>Questions?:</strong>{" "}
            <Link
              href="mailto:yue.dong@ucr.edu"
              className="underline duration-300 hover:text-ucr-yellow"
            >
              yue.dong@ucr.edu
            </Link>
          </p>
        </div>
      </div>
    </div>

    <div className="bg-ucr-yellow text-ucr-blue">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 py-4 text-sm">
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
  </div>
);

export default Footer;
