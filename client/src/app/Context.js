import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Axios from "../utils/Axios";

export const Context = createContext();

const Index = ({ children }) => {
  const [formList, setFormList] = useState([]);
  const sessionID = localStorage.getItem("sessionID");

  useEffect(() => {
    if (!sessionID) {
      const createSessionID = uuidv4();
      Axios.post("/user/createsessionid", { sessionID: createSessionID })
        .then((response) => {
          localStorage.setItem("sessionID", response.data.sessionID);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [sessionID]);

  const addFormHandler = (data) => {
    const temp = [...formList];
    temp.push(data);
    setFormList(temp);
  };

  useEffect(() => {
    Axios.get("/mydata/getmydata/" + sessionID)
      .then((response) => {
        setFormList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sessionID]);

  const deleteDataHandler = (id) => {
    const temp = [...formList];
    Axios.delete("/mydata/deletemydata/" + id)
      .then((response) => {
        const newData = temp.filter((el) => el._id !== response.data._id);
        setFormList(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateDataHandler = (data) => {
    const temp = [...formList];
    const findIndex = temp.findIndex((el) => el._id === data._id);
    temp[findIndex] = data;
    setFormList(temp);
  };

  return (
    <Context.Provider
      value={{
        formList: formList,
        addFormHandler: addFormHandler,
        deleteDataHandler: deleteDataHandler,
        updateDataHandler: updateDataHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Index;
