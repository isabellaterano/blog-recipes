"use client";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";
import Link from "next/link";
import { ChefHat } from "@phosphor-icons/react";

const BlogHome = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blog");
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error("Erro ao buscar blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="min-h-screen p-6 my-12">
      <div className="text-center mb-12">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
          Últimas receitas
        </h1>
        <p className="text-lg text-gray-600 max-w-5xl mx-auto">
          Descubra as últimas receitas deliciosas e as mais populares no nosso
          blog. Explore, experimente e inspire-se para suas próximas aventuras
          culinárias!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:mx-24 justify-items-center">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .slice(0, 6)
          .map((item, index) => (
            <BlogItem
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              key={index}
            />
          ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/receitas">
          <button className="flex justify-between items-center gap-2 max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] border-l py-4 px-4 sm:px-8 active:bg-grey-600 active:text-white">
            Ver todas as receitas
            <ChefHat size={28} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BlogHome;
