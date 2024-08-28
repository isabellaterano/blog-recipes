import Image from "next/image";
import React from "react";
import aboutImg from "../../assets/about.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <section className="py-8 px-5 md:px-12 lg:px-28 min-h-dvh pt-28">
        <h2 className="text-3xl lg:text-5xl font-medium m-4 p-2 text-center">
          Sobre Mim
        </h2>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center p-4 gap-8">
            <div className="flex-shrink-0">
              <Image
                src={aboutImg}
                alt="Julia Rossi"
                className="rounded-full mx-auto lg:w-96"
              />
            </div>
            <div className="max-w-3xl mx-auto lg:ml-8">
              <p className="text-gray-600 mb-4">
                Olá! Eu sou Julia Rossi, uma apaixonada por culinária e
                entusiasta da arte de cozinhar. Desde pequena, sempre estive na
                cozinha, aprendendo receitas e técnicas com minha avó. Este blog
                é um espaço onde compartilho minhas receitas favoritas, dicas de
                cozinha e muito mais!
              </p>
              <p className="text-gray-600 mb-4">
                Minha jornada na cozinha começou observando minha avó preparar
                pratos tradicionais, cheios de sabores e histórias. A partir
                daí, meu amor pela culinária cresceu e decidi explorar novas
                receitas, ingredientes e técnicas. Para mim, cozinhar é uma
                forma de expressão, uma maneira de compartilhar amor e cultura
                com todos.
              </p>
              <p className="text-gray-600 mb-4">
                Através deste blog, espero inspirar outros a descobrir a alegria
                de cozinhar em casa, experimentar novas receitas e criar suas
                próprias memórias na cozinha. Adoro explorar a gastronomia de
                diferentes culturas e adaptar receitas para torná-las acessíveis
                a todos. Aqui, você encontrará desde pratos tradicionais até
                criações inovadoras que refletem minha paixão por sabores
                diversos.
              </p>
              <p className="text-gray-600">
                Espero que você encontre inspiração aqui e se junte a mim nesta
                jornada culinária. Bon appétit!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
