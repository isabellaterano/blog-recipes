"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleScroll = () => {
    setIsScrolledDown(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-5 px-5 md:px-12 lg:px-28 fixed w-full z-10 transition-colors duration-300 ${
        isScrolledDown ? "bg-white bg-opacity-70" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} width={80} alt="logo" className="sm:w-auto " />

          <span className="tracking-widest text-xl lg:text-3xl">
            Julia Rossi
          </span>
        </Link>
        <nav className="flex gap-4 text-xl">
          <Link href="/receitas" className="hover:text-gray-600">
            Receitas
          </Link>
          <Link href="/sobre" className="hover:text-gray-600">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
