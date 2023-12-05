import React, { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../constant/Router";

const ColorContext = createContext();

const ColorContextProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [text, setText] = useState("");
  const [divs, setDivs] = useState([]);
  const [addedDivs, setAddedDivs] = useState([]);

  const navigate = useNavigate();
  const isSaveDisabled = divs.length < 6;
  const isAddDisabled = divs.length >= 6;

  const saveDivsToLocalStorage = () => {
    const updatedAddedDivs = [...addedDivs,  ...divs ];
    setAddedDivs(updatedAddedDivs);
    localStorage.setItem("addedDivs", JSON.stringify(updatedAddedDivs));
    toast.success("Colors Saved Successfully!", {
      autoClose: 1000,
    });
    setTimeout(() => {
      navigate(ROUTER.Home);
    }, 1100);
    localStorage.removeItem("divs");
  };

  const createNewDiv = () => {
    if (!selectedColor || !text ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter 6 times Color Name and Color Code ",
      });
      return;
    }
    const newDiv = {
      backgroundColor: selectedColor,
      text,
    };
    const updatedDivs = [...divs, newDiv];
    setDivs(updatedDivs);
    localStorage.setItem("divs", JSON.stringify(updatedDivs));
    setText("");
    setSelectedColor(null);
  };



  const deleteDiv = (index) => {
    const updatedDivs = [...divs];
    updatedDivs.splice(index, 1);
    setDivs(updatedDivs);
    localStorage.setItem("divs", JSON.stringify(updatedDivs));
    toast.success("Color Deleted Successfully!", {
      autoClose: 1000,
    });
  };

  const contextValue = {
    selectedColor,
    setSelectedColor,
    text,
    setText,
    divs,
    setDivs,
    isSaveDisabled,
    isAddDisabled,
    createNewDiv,
    deleteDiv,
    saveDivsToLocalStorage,
    addedDivs,
    setAddedDivs,
  };
  const Component = ColorContext.Provider;
  return <Component value={contextValue}>{children}</Component>;
};

const useColorContext = () => useContext(ColorContext);
export { ColorContextProvider, useColorContext };
