import React, { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import MyData from "../components/userData/MyData";
import UpdateForm from "../components/form/UpdateForm";

const MyDatePage = () => {
  const [modal, setModal] = useState({
    modalToggle: false,
    updateID: "",
  });

  const modalHandler = (id) => {
    setModal({
      modalToggle: !modal.modalToggle,
      updateID: id,
    });
  };

  return (
    <div>
      <Header />
      <div className="w-11/12 sm:w-6/12 m-auto border border-gray-200 shadow rounded my-5">
        <MyData modalHandler={modalHandler} />
        {modal.modalToggle && (
          <Modal modalHandler={modalHandler}>
            <UpdateForm modal={modal} modalHandler={modalHandler} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default MyDatePage;
