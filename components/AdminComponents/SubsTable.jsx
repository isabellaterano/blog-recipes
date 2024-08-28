import { Trash } from "@phosphor-icons/react";
import React from "react";

const SubsTable = ({ email, mongoId, deleteEmail, date }) => {
  const emailDate = new Date(date);
  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "Nenhum e-mail"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td
        onClick={() => deleteEmail(mongoId)}
        className="px-6 py-4 cursor-pointer"
      >
        <Trash size={24} weight="bold" />
      </td>
    </tr>
  );
};

export default SubsTable;
