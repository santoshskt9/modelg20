import React from "react";

const Error = () => {
  return (
    <div className="mt-5">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <img
            src={process.env.REACT_APP_MAIN_URL + "images/notfound.jpg"}
            alt=""
            className="height-400 d-block w-100"
          />
          <button
            className="btn btn-primary-outline"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
