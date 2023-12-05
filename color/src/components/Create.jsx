import React, { useRef, useEffect } from "react";
import { useColorContext } from "../contexts/ColorContext";
import { colors } from "../helpers/Colors";



const Create = () => {
  const {
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
  } = useColorContext();

  const inputRef = useRef(null);

  useEffect(() => {
   const data = JSON.parse(localStorage.getItem("divs")) || [];
   setDivs(data)

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);



  return (
    <>
      <div className="colorDivs mt-4">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {colors.map((color) => (
            <button
              key={color.name}
              className="mx-1 px-4 py-3 text-white rounded"
              style={{
                backgroundColor: color.color,
              }}
              onClick={() => setSelectedColor(color.color)}
            >
              <span>{color.name}</span>
             
            </button>
          ))}
        </div>

        <div className="d-flex  align-items-center w-100 mt-5 ">
          <div className="d-flex  align-items-center flex-column col-md-4">
            <h1 className="my-4">Setting Page</h1>

            <input
              type="text"
              value={text}
              ref={inputRef}
              className="rounded w-50"
              placeholder="Color Name"
              onChange={(e) => setText(e.target.value)}
            />

            <input
              type="text"
              className="rounded my-4 w-50"
              placeholder="Color Code"
              onChange={(e) => setSelectedColor(e.target.value)}
              style={{
                backgroundColor: selectedColor,
              }}
            />

            <input
              type="color"
              className="w-50"
              onChange={(e) => setSelectedColor(e.target.value)}
              style={{
                backgroundColor: selectedColor,
              }}
            ></input>
            <button
              className="rounded btn btn-danger mt-2 px-5 py-2"
              onClick={createNewDiv}
              disabled={isAddDisabled}
            >
              Add Color
            </button>
          </div>

          <div className="col-md-7 ">
            <div className="tableColor">
              {divs.map((div, index) => (
                <div
                  key={index}
                  className=" p-3 text-white tableColorDiv"
                  style={{
                    backgroundColor: div.backgroundColor,
                  }}
                >
                  <h4 className="ms-1">{div.text}</h4>

                  <p className="mt-3">
             
                    <button
                      className="rounded btn btn-dark mt-3"
                      onClick={() => deleteDiv(index)}
                    >
                      Remove
                    </button>
                  </p>
                </div>
              ))}
            </div>

            <div>

              <button
                className="rounded btn btn-success px-4 py-2 w-100 mt-3"
                onClick={saveDivsToLocalStorage}
                disabled={isSaveDisabled}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
