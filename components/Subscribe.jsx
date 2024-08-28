"use client";
import { ArrowRight } from "@phosphor-icons/react";
import axios from "axios";
import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const res = await axios.post("/api/email", formData);
    if (res.data.success) {
      toast.success(res.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };
  return (
    <section className="text-center my-28">
      <h1 className="text-3xl sm:text-5xl font-medium">Últimos Blogs</h1>
      <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
        Algo doce para sua caixa de entrada! Junte-se a 100 mil outros e assine
        minha lista de e-mail gratuita. Você receberá todas as novas receitas e
        postagens de panificação conforme forem publicadas, além de um e-mail
        com minhas dicas e receitas de panificação mais populares.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        action=""
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
          className="pl-4 outline-none"
        />
        <div className="flex items-center">
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-grey-600 active:text-white inline-flex gap-2 items-center"
          >
            Inscrever-se
            <ArrowRight size={24} />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
