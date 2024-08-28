"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Header from "../../../components/Header";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogData = async () => {
    try {
      const res = await axios.get("/api/blog/", {
        params: { id: params.id },
      });
      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  if (loading) {
    return <p className=" text-center text-2xl ">Loading...</p>;
  }

  if (error) {
    return <p>Error loading data.</p>;
  }

  return data ? (
    <>
      <Header />
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            alt="Author image"
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          alt="Blog image"
          width={1280}
          height={720}
        />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <InstagramLogo size={40} />
            <FacebookLogo size={40} />
            <TwitterLogo size={40} />
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Page;
