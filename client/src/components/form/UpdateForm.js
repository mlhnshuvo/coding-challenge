import React, { useState, useContext, useEffect } from "react";
import Axios from "../../utils/Axios";
import { Context } from "../../app/Context";
import Select from "./Select";

const UpdateForm = ({ modal, modalHandler }) => {
  const context = useContext(Context);
  const [value, setValue] = useState({
    name: "",
    selector: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    selector: "",
  });
  const [btnPress, setBtnPress] = useState(false);

  const onChangeHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    setErrorMessage({
      ...errorMessage,
      [e.target.name]: "",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setBtnPress(true);
    const obj = {
      name: value.name,
      selector: value.selector,
    };
    Axios.put("/mydata/updatemydata/" + modal.updateID, obj)
      .then((response) => {
        context.updateDataHandler(response.data.response);
        setBtnPress(false);
        setValue({
          ...value,
          name: "",
          selector: "",
        });
        modalHandler()
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        setBtnPress(false);
      });
  };

  useEffect(() => {
    const findList = context.formList.find((el) => el._id === modal.updateID);
    setValue({
      name: findList.name,
      selector: findList.selector,
    });
  }, [modal.updateID, context.formList]);

  return (
    <form onSubmit={onSubmitHandler} className="p-2 sm:p-5">
      <p className="text-2xl font-semibold mb-5">Update</p>
      <p className="text-xl mb-10">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </p>
      <div className="mt-5">
        <label>
          Name:
          <input
            type="text"
            className={`appearance-none outline-0 rounded w-full focus:ring p-2 bg-gray-100 mt-2 ${
              errorMessage.name && "border border-red-600"
            }`}
            onChange={onChangeHandler}
            name="name"
            value={value.name}
          />
        </label>
        <p
          className={`${
            errorMessage.name ? "text-red-600 opacity-100 mt-1" : "opacity-0"
          }`}
        >
          {errorMessage.name}
        </p>
      </div>
      <Select
        onChangeHandler={onChangeHandler}
        value={value}
        errorMessage={errorMessage}
      />
      <input
        type="submit"
        value="Update"
        disabled={btnPress}
        className={`appearance-none outline-0 rounded w-full focus:ring p-2 bg-blue-500 text-white mt-10 ${
          btnPress
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
      />
    </form>
  );
};

export default UpdateForm;
