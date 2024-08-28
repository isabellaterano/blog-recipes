import Image from "next/image";
import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

const BlogItem = ({ title, description, image, category, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] mx-auto">
      <Link href={`/blog/${id}`}>
        <div className="relative w-full h-[200px]">
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            className="border-b border-black"
          />
        </div>
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p
          className="mb-3 text-sm tracking-tight text-gray-700"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
        ></p>
        <div className="flex items-center ">
          <Link
            href={`/blog/${id}`}
            className="inline-flex items-center gap-2 py-2 font-semibold text-center"
          >
            Leia mais <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
