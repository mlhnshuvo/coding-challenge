import React, { useContext } from "react";
import { Context } from "../../app/Context";

const Data = ({ modalHandler }) => {
  const context = useContext(Context);

  return (
    <div className="overflow-x-scroll sm:overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr className="text-left">
            <th className="border py-1 px-5">Name</th>
            <th className="border py-1 px-5">Sectors</th>
            <th className="border py-1 px-5">Action</th>
          </tr>
        </thead>
        <tbody>
          {context.formList.map((el) => (
            <tr key={el._id}>
              <td className="border py-1 px-5">{el.name}</td>
              <td className="border py-1 px-5">{el.selector}</td>
              <td className="border py-2 gap-3 px-5 flex flex-wrap sm:justify-between justify-center">
                <i
                  className="fa-solid fa-pen-to-square cursor-pointer"
                  onClick={() => modalHandler(el._id)}
                ></i>
                <i
                  className="fa-solid fa-trash cursor-pointer"
                  onClick={() => context.deleteDataHandler(el._id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
