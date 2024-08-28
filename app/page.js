"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import BlogHome from "../components/BlogHome";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <Hero />
      <BlogHome />
      <About />
      <Subscribe />
      <Footer />
    </>
  );
}
