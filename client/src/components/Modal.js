import React from "react";

const Modal = ({ children, modalHandler }) => {
  return (
    <div>
      <div className="fixed inset-0 flex justify-center z-10 items-center">
        <div className="rounded-md bg-white">
          <i
            className="fa-solid fa-xmark cursor-pointer p-2 sm:p-5 text-xl float-right"
            onClick={modalHandler}
          ></i>
          <div>{children}</div>
        </div>
        <p
          className="absolute inset-0 bg-black -z-10 opacity-50"
          onClick={modalHandler}
        ></p>
      </div>
    </div>
  );
};

export default Modal;
