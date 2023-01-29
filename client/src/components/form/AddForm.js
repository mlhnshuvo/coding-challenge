import React, { useState, useContext } from "react";
import Axios from "../../utils/Axios";
import { Context } from "../../app/Context";
import Select from "./Select";

const Form = () => {
  const context = useContext(Context);
  const [value, setValue] = useState({
    name: "",
    selector: "",
    agree: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    selector: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [btnPress, setBtnPress] = useState(false);
  const sessionID = localStorage.getItem("sessionID");

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

  const checkboxHandler = () => {
    setValue({
      ...value,
      agree: !value.agree,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setBtnPress(true);
    const obj = {
      name: value.name,
      selector: value.selector,
      sessionid: sessionID,
    };
    Axios.post("/mydata/addmydata", obj)
      .then((response) => {
        context.addFormHandler(response.data.response);
        setSuccessMessage(response.data.message);
        setBtnPress(false);
        setValue({
          ...value,
          name: "",
          selector: "",
        });
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        setBtnPress(false);
      });
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <form onSubmit={onSubmitHandler} className="p-2 sm:p-5">
      {successMessage && (
        <p className="text-xl mb-10 text-green-600">{successMessage}</p>
      )}
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
      <div className="mt-5">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 mt-2"
            onChange={checkboxHandler}
            checked={value.agree}
          />
          <p className="mt-2 font-medium">Agree to terms</p>
        </label>
      </div>
      {btnPress ? (
        <input
          type="button"
          value="Save"
          disabled={btnPress}
          className={`appearance-none outline-0 rounded w-full focus:ring p-2 bg-blue-500 text-white mt-10 ${
            btnPress
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
        />
      ) : (
        <input
          type="submit"
          value="Save"
          disabled={!value.agree}
          className={`appearance-none outline-0 rounded w-full focus:ring p-2 bg-blue-500 text-white mt-10 ${
            value.agree
              ? "opacity-100 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
        />
      )}
    </form>
  );
};

export default Form;
