import React from "react";
import BlogList from "../../components/BlogList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="mx-2">
        <div className="text-center pt-28">
          <h1 className="text-3xl sm:text-5xl font-medium m-4 p-2">Receitas</h1>
          <p className="max-w-2xl mx-auto my-4">
            Explore uma variedade de receitas irresistíveis, desde pratos
            clássicos até criações sofisticadas. Descubra o prazer de cozinhar e
            saborear comidas que aquecem o coração e encantam o paladar.
          </p>
        </div>
        <BlogList />
      </div>
      <Footer />
    </>
  );
};

export default page;
