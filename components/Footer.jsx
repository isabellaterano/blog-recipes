"use client";

import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 bottom-0 right-0 border-t-black border-2">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-5 sm:px-12 lg:px-28 gap-4 sm:gap-0">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={80} />
        </div>

        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Julia Rossi. Todos os direitos
          reservados.
        </p>

        <div className="flex gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogo size={32} className="hover:text-blue-500" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo size={32} className="hover:text-blue-400" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo size={32} className="hover:text-pink-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
