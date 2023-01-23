import React from "react";
import { Link } from "react-router-dom";
import { Backdrop, Rating } from "@mui/material";

import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const CourseCardItem = ({ courses, addTOWishlist, enrolled }) => {
  return (
    <div>
      <div
        className="col-12 col-md-6 col-lg-4"
        style={{ overFlow: " hidden !important" }}
      >
        <div
          className="course-container course-card h-100 rounded-4 shadow p-4"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* <Link to={`/coursedetail/${courses.id}`}>
            <img
              src={courses.thumbnailImage}
              className="rounded"
              alt=""
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />
          </Link> */}
          <div className="course-details mt-4 font-third">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-start align-items-center">
                <Rating
                  name="text-feedback"
                  value={3}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <span className="ms-3 font-third text-secondary fs-6">
                  ( 16 reviews )
                </span>
              </div>
              {addTOWishlist ? (
                <button
                  onClick={() => {
                    console.log("course", courses);
                    addTOWishlist({
                      courseName: courses.courseName,
                      authorName: courses.authorName,
                      description: courses.Desc,
                      courseId: courses.id,
                      thumbnailImage: courses.thumbnailImage,
                    });
                  }}
                  className="btn border-0"
                >
                  <i className="bi bi-bookmark text-secondary"></i>
                </button>
              ) : (
                ""
              )}
            </div>

            <div className="d-flex justify-content-between align-items-start">
              {/* <Link to={`/coursedetail/${courses.id}`}>
                <h3 className="DMserif fw-bold text-dark">
                  {courses.courseTitle}
                </h3>
              </Link> */}
            </div>
            <div>
              <span className="font-third font-sm text-secondary">
                <i className="bi bi-journal-bookmark-fill"></i>{" "}
                {courses?.Sections?.length} lessons
              </span>
              <span className="font-third font-sm text-secondary ms-2">
                <i className="bi bi-stopwatch"></i>{" "}
                {courses?.Sections?.reduce((total, reduce) => {
                  return (total =
                    ((reduce.VideoDocuments.length + 1) * 30) / 60);
                }, 0)}{" "}
              </span>
              <span className="font-third font-sm text-secondary ms-2">
                <i className="bi bi-person"></i> {courses?.authorName}
              </span>
            </div>
            <p className=" fw-regular text-justify">{courses?.Desc}</p>
            {enrolled && (
              <>
                <div className="d-flex align-items-center justify-content-between ">
                  <span className="fs-6 font-third text-secondary">
                    {(courses?.sectionCompleted * 100) /
                      courses?.courseSections ===
                    100 ? (
                      <b className="text-success fw-semibold">
                        <i className="bi bi-check-circle-fill"></i>
                        Course Completed
                      </b>
                    ) : (
                      "Progress"
                    )}
                  </span>
                  <span className="DMserif">
                    {courses?.sectionCompleted ? courses?.sectionCompleted : 0}/
                    {courses?.totalSections}
                  </span>
                </div>
                <div
                  className="progress mt-2"
                  role="progressbar"
                  aria-label="Example with label"
                  style={{ height: "7px" }}
                >
                  <div
                    className="progress-bar p-0"
                    style={{
                      width: `${
                        (courses?.sectionCompleted * 100) /
                        courses?.totalSections
                      }%`,
                    }}
                  ></div>
                </div>
              </>
            )}
            <div className="d-flex align-items-center justify-content-between mt-3">
              <h5 className="text-uppercase fw-bold text-success">Free</h5>
              {enrolled ? (
                <Link
                  className="font-third text-danger"
                  to={`/coursedetail/${courses.id}`}
                >
                  View Course <i className="bi bi-arrow-right"></i>
                </Link>
              ) : (
                // <Link
                //   className="font-third text-warning"
                //   to={`/coursedetail/${courses.id}`}
                // >
                //   View Details <i className="bi bi-arrow-right"></i>
                // </Link>
                <a>Details</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardItem;
