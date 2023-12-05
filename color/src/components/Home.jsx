import React, { useEffect } from "react";
import { useColorContext } from "../contexts/ColorContext";
import { FaEye } from "react-icons/fa";
import { ROUTER } from "../constant/Router";
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
        <h1 className="my-4">Home Page</h1>
        <div className="row">
          <div className="col-md-12 ">
            <div className="mainDiv">
              {addedDivs.map((div, index) => (
                <div
                  key={index}
                  className=" p-4 text-white colorDiv"
                  style={{
                    backgroundColor: div.backgroundColor,
                  }}
                >
                  <h3 className="ms-1">{div.text}</h3>
                  <Link to={`${ROUTER.Detail}/${div.id}`} state={{ detailItem: div }}>
                    <FaEye color="white" size={40} />
                  </Link>
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
