"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { ChefHat, Upload } from "@phosphor-icons/react";

const Page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Jantar",
    author: "Julia Rossi",
    authorImg: "/profile.jpg",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    const res = await axios.post("/api/blog", formData);
    if (res.data.success) {
      toast.success(res.data.msg);
      setImage(false);
      setData({ title: "", description: "", category: "Jantar", author: "" });
    } else {
      a;
      toast.error("Error");
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="py-5 px-5 sm:py-12 sm:pl-16 min-h-dvh"
      >
        <p className="text-xl">Upload imagem</p>
        <label htmlFor="image">
          {!image ? (
            <div className="w-[300px] h-[200px] justify-center items-center flex flex-col cursor-pointer font-bold border-2 border-black mt-4">
              <Upload size={40} />
              <span>Upload imagem</span>
            </div>
          ) : (
            <div>
              <Image
                src={URL.createObjectURL(image)}
                alt="Uploaded thumbnail"
                className="mt-4"
                width={300}
                height={300}
              />
            </div>
          )}
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Título</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Coloque o título do blog"
          required
        />
        <p className="text-xl mt-4">Descrição</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Coloque o descrição do blog"
          rows={6}
          required
        />
        <p className="text-xl mt-4">Categorias</p>
        <select
          className="w-44 mt-4 px-4 py-3 border text-gray-500"
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          required
        >
          <option value="Jantar">Jantar</option>
          <option value=" Café da manhã"> Café da manhã</option>
          <option value="Sobremesas">Sobremesas</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-44 h-12 bg-black text-white items-center flex gap-2 justify-center hover:bg-opacity-80"
        >
          Adicionar receita
          <ChefHat
            size={20}
            color="#2183a5"
            weight="thin"
            className="inline-flex "
          />
        </button>
      </form>
    </>
  );
};

export default Page;
