"use client";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const res = await axios.get("/api/blog");
    setBlogs(res.data.blogs);
    console.log(res.data.blog);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Todos
        </button>
        <button
          onClick={() => setMenu(" Café da manhã")}
          className={
            menu === " Café da manhã"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Café da manhã
        </button>
        <button
          onClick={() => setMenu("Jantar")}
          className={
            menu === "Jantar" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Jantar
        </button>
        <button
          onClick={() => setMenu("Sobremesas")}
          className={
            menu === "Sobremesas"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Sobremesas
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
