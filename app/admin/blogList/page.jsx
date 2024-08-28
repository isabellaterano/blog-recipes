"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import BlogTable from "../../../components/AdminComponents/BlogTable";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const res = await axios.get("/api/blog");
    setBlogs(res.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    const res = await axios.delete(`/api/blog/`, {
      params: { id: mongoId },
    });
    toast.success(res.data.msg);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>Todos os blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hidden">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 bg-gray-50 text-left uppercase">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Nome do autor:
              </th>
              <th scope="col" className="px-6 py-3">
                Título do blog
              </th>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => {
              return (
                <BlogTable
                  key={index}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  authorImg={item.authorImg}
                  date={item.date}
                  deleteBlog={deleteBlog}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
