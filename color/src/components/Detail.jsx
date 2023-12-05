import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const location = useLocation();
  const { detailItem } = location.state || {};

  const handleCopy = () => {
    const codeToCopy = detailItem.backgroundColor;
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => setCopySuccess(true))
      .catch(() => setCopySuccess(false));
  };

  return (
    <div
      className="detailPage"
      style={{ backgroundColor: detailItem.backgroundColor }}
    >
      {detailItem ? (
        <div>
          <div className="text-white d-flex justify-content-center align-items-center flex-column">
            <h3 className="fs-1">Color Name : {detailItem.text}</h3>
            <h3 className="fs-1">
              Copy Color Code :
              <span onClick={handleCopy}> {detailItem.backgroundColor}</span>
            </h3>
            {copySuccess && (
              <p className="text-white mt-2 fs-1">Copied</p>
            )}
          </div>
        </div>
      ) : (
        <div>No item found</div>
      )}
    </div>
  );
};

export default Detail;
