import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
const CoursePanel = ({
  modules,
  generateCertificate,
  setCurrentCourse,
  activeCourse,
  sectionCompleted,
  progress,
  series,
  sidebarActive,
  setSidebarActive,
}) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (modules?.sectionArr == progress.length) {
      setPercent(100);
    } else {
      if (modules?.sectionArr)
        setPercent((progress.length * 100) / modules?.courseSections);
    }
  }, [sectionCompleted]);
  return (
    <div className="container pt-0 pb-5">
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="DMserif text-secondary fw-bold mt-4">Course Modules</h5>
        <button
          className="btn p-0 border-0 d-lg-none"
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6276/6276642.png"
            alt=""
            width={30}
          />
        </button>
      </div>
      <div className="py-3">
        <div className="d-flex align-items-center justify-content-between ">
          <span className=" fs-5 fw-semibold">
            {progress?.length === series?.length ? (
              <b className="text-success fw-semibold">
                <i className="bi bi-check-circle-fill"></i> Course Completed
              </b>
            ) : (
              "Progress"
            )}
          </span>
          <span className="DMserif">
            {progress?.length ? progress?.length : 0}/{series?.length}
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
                (progress?.length * 100) / series?.length
              }%`,
            }}
          ></div>
        </div>
      </div>
      <div className="coursemodules">
        <div className="accordion accordion-flush" id="courseModuleAccordian">
          {modules?.sectionArr?.map((section, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={
                    index == 0
                      ? "accordion-button collapsed py-4 shadow-sm rounded border bg-white text-dark mt-2"
                      : "accordion-button py-4 shadow-sm rounded border bg-white text-dark mt-2"
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#course-module-" + section.sectionId}
                >
                  {section?.section_title}
                </button>
              </h2>
              <div
                id={"course-module-" + section.sectionId}
                className={
                  index == 0
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse"
                }
                data-bs-parent="#courseModuleAccordian"
              >
                <ul className="module-sublist p-1">
                  {}
                  {section?.video_documents?.map((topic, index) => (
                    <li
                      key={index}
                      className={
                        activeCourse?.seriesId == topic.seriesId
                          ? "rounded mt-1 active"
                          : "rounded mt-1"
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        onClick={() => setCurrentCourse(topic.seriesId)}
                        className="p-3 border rounded-1 p-relative"
                      >
                        {topic?.series_title}{" "}
                        {progress?.includes(topic.seriesId) ? (
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/1634/1634264.png"
                            alt=""
                            style={{
                              height: "25px",
                              position: "absolute",
                              right: "0",
                              top: "0",
                            }}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {progress?.length == series?.length ? (
            <div
              className={"rounded mt-1 bg-success"}
              onClick={() => generateCertificate()}
              style={{ cursor: "pointer" }}
            >
              <div className="p-3 border text-white rounded-1">
                Download Certificate
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr />
      <h5 className="DMserif text-secondary fw-bold">About the Author</h5>
      <div className="d-flex align-items-center">
        <Avatar
          alt={modules?.author}
          src={"./favicon_io/android-chrome-192x192.png"}
          sx={{ width: 66, height: 66 }}
          className="me-4"
        />
        <h5 className=" DMserif">{modules?.author}</h5>
      </div>
    </div>
  );
};

export default CoursePanel;
