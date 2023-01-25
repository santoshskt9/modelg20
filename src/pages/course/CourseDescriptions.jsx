import React from "react";
import { Helmet } from "react-helmet";

const CourseDescriptions = ({ course, activeCourse }) => {
  return (
    <div className="container">
      {/* top view  */}
      <div className="row pt-4 align-items-center">
        <div className="col-11">
          <h1 className="DMserif fs-1">{course?.course_name}</h1>
        </div>
      </div>
      <div className="border-top py-5">
        <ul
          className="nav nav-tabs profile-tabs justify-content-start border-0"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active p-3 fw-semibold border ms-3"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
            >
              Description
            </button>
          </li>
          {/* <li className="nav-item" role="presentation">
          <button
            className="nav-link p-3"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
          >
            Reviews
          </button>
        </li> */}
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <div className="container p-4">
              <p>{course?.desc}</p>
            </div>
          </div>
        </div>
        <div
          className="tab-pane"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <div className="container p-4">
            {/* <h5 className="fw-semibold">Reviews</h5> */}
            {/* <p>{reviews}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescriptions;
