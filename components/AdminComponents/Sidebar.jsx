"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { PlusSquare, Envelope, NotePencil } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 border border-black">
      <div className="px-2 sm:pl-14 py-3 border-b border-black flex items-center gap-2">
        <Image src={logo} alt="logo" width={60} />
        Julia Rossi
      </div>
      <div className="w-28 sm:w-80 min-h-dvh relative py-12 ">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href={"/admin/addProduct"}
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <PlusSquare size={28} />
            <p>Adicionar receitas</p>
          </Link>
          <Link
            href={"/admin/blogList"}
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <NotePencil size={28} />
            <p>Lista de receita</p>
          </Link>
          <Link
            href={"/admin/subscriptions"}
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Envelope NotePencil size={28} />
            <p>Assinaturas</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
