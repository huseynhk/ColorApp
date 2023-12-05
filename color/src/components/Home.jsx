import React, { useEffect } from "react";
import { useColorContext } from "../contexts/ColorContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { addedDivs, setAddedDivs } = useColorContext();

  useEffect(() => {
    const storedAddedDivs = JSON.parse(localStorage.getItem("addedDivs")) || [];
    setAddedDivs(storedAddedDivs);
  }, []);

  

  return (
    <>
      <div className="container">
        <Link to={'/create'} className="mb-4" >Create</Link>

        <h1 className="my-4">Home Page</h1>
        <div className="row">
        <div className="col-md-12">
        <div className="mainDiv">
          {addedDivs.map((div, index) => (
            <div
              key={index}
              className=" p-4 text-white colorDiv"
              style={{
                backgroundColor: div.backgroundColor,
              }}
            >
              <h4 className="ms-1">{div.text}</h4>
              <h4 className="ms-1">{div.groupName}</h4>
            </div>
          ))}
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Home;
