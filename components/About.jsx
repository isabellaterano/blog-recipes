"use client";
import React from "react";
import aboutImage from "../assets/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const About = () => {
  return (
    <section className="bg-zinc-100 about-section py-16 px-4 flex flex-col items-center">
      <div className="about-content max-w-4xl text-center">
        <Image
          src={aboutImage}
          alt="Sobre mim"
          className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
        <p className="text-lg mb-6">
          Olá! Sou Julia Rossi, apaixonada por culinária e exploradora de
          sabores. Meu blog é um reflexo do meu amor pela cozinha e das minhas
          aventuras culinárias. Aqui você encontrará receitas deliciosas, dicas
          práticas e muito mais para tornar sua experiência na cozinha ainda
          mais agradável. Espero que você aproveite cada receita e se sinta
          inspirado a criar pratos incríveis!
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/sobre"
            className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] border-l py-4 px-4 sm:px-8 active:bg-grey-600 active:text-white gap-2"
          >
            Saiba mais
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
