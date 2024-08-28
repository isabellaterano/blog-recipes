"use client";
import React, { useEffect, useState } from "react";
import SubsTable from "../../../components/AdminComponents/SubsTable";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]);
  const fetchEmails = async () => {
    const res = await axios.get("/api/email");
    setEmails(res.data.emails);
  };

  const deleteEmail = async (mongoId) => {
    const res = await axios.delete("/api/email", {
      params: { id: mongoId },
    });
    if (res.data.success) {
      toast.success(res.data.msg);
      fetchEmails();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>Todas as assinaturas</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scroll-hidden">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Assinatura de e-mail
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubsTable
                  key={index}
                  mongoId={item._id}
                  deleteEmail={deleteEmail}
                  email={item.email}
                  date={item.date}
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
