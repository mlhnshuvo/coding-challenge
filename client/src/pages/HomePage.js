import React from "react";
import Header from "../components/Header";
import AddForm from "../components/form/AddForm";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="w-11/12 sm:w-6/12 m-auto border border-gray-200 shadow-md rounded my-5">
        <AddForm />
      </div>
    </div>
  );
};

export default HomePage;
