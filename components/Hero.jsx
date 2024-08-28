"use client";
import React from "react";
import hero from "../assets/hero.png";
import Image from "next/image";
import Link from "next/link";
import { ChefHat } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center overflow-hidden">
      <Image
        src={hero}
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority
      />
      <div className="relative text-center p-8 z-10 flex items-center justify-center flex-col mt-20 lg:mt-32">
        <h1 className="text-4xl font-bold mb-4">Delícias da Julia Rossi</h1>
        <p className="text-xl">Receitas irresistíveis para todos os momentos</p>
        <div className="flex justify-center items-center mt-8">
          <Link href="/receitas">
            <button className="flex justify-between items-center max-w-[500px] scale-75 sm:scale-100 mx-auto border border-black shadow-[-7px_7px_0px_#000000] border-l py-4 px-4 sm:px-8 active:bg-grey-600 active:text-white gap-2">
              Ver todas as receitas
              <ChefHat size={28} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
