import { api, apiAuth } from "api";
import { useGlobalContext } from "global/context";
import CollegeBreadCrumb from "pages/Auth/CollegeBreadCrumb";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import StudentsTable from "./StudentsTable";

const DashboardInstitute = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [students, setStudents] = useState([]);
  const { userData, token } = useGlobalContext();
  const [shareableLink, setShareableLink] = useState(
    `http://localhost:3000/college/student/register?collegeId=${userData.id}`
  );
  const fetchDetails = async () => {
    try {
      const res = await apiAuth.post(
        "/institute",
        {
          instituteId: userData.id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("response", res);
      setDetails(res.data.result[0]);
    } catch (error) {
      toast.dismiss();
      toast.error("Oops Something went wrong");
      console.log("error", error);
      // handlelogout();
    }
  };
  const fetchStudents = async () => {
    try {
      const res = await apiAuth.post(
        `/institute/data?type=students`,

        {
          instituteId: userData.id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("res", res);
      if (res.status === 200) {
        setStudents(res.data.result);
      }
    } catch (error) {
      if (error) {
        toast.dismiss();
        toast.error(error.response?.data.message);
      }
    }
  };
  useEffect(() => {
    fetchStudents();
    fetchDetails();
  }, []);
  return (
    <div>
      <div>
        <div className="p-relative">
          <div className="d-flex p-absolute text-white justify-content-center align-items-center w-100 h-100">
            <h1 className="text-initial text-center fs-2 bg-white px-4 py-2 bg-opacity-75">
              Dashboard
            </h1>
          </div>
          <img
            src={
              details?.banner
                ? process.env.REACT_APP_API_BASE_URL + details?.banner
                : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-open-house-invitation-banner-design-template-64bb82e1fda7fcd9e6fec7e1fcb13be9_screen.jpg?ts=1566569378"
            }
            alt=""
            className="w-100 d-block"
            style={{
              height: "230px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="container">
          <div className="d-flex justify-content-start flex-column flex-lg-row">
            <div className=" p-3">
              <img
                src={
                  details?.logo
                    ? process.env.REACT_APP_API_BASE_URL + details.logo
                    : "images/icons/university.png"
                }
                alt=""
                className="p-3 shadow border border-3 rounded-4"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className=" p-3">
              <div>
                <h3>{details?.institution_name}</h3>
                <div>
                  <span className="d-flex align-items-center">
                    <i className="bi bi-person-fill fs-3 me-2"></i>
                    {details?.title}&nbsp;
                    {details?.first_name}&nbsp;
                    {details?.middle_name}&nbsp;
                    {details?.last_name}
                  </span>
                </div>
                <p>{details?.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-4">
        <h6>Shareable link</h6>
        <div className="d-flex align-items-center">
          <span
            className={`bg-success bg-opacity-25 rounded-2 p-3 py-3 me-2 `}
            style={{ minWidth: "250px" }}
          >
            {shareableLink}
          </span>
          <button
            className={`btn btn-primary-outline rounded-3 mx-2 py-2`}
            onClick={() => navigator.clipboard.writeText(shareableLink)}
          >
            copy
          </button>
          <button className="btn btn-primary rounded-3 mx-2 py-2">Share</button>
        </div>
      </div>
      <div className="container p-4">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
            >
              Students
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
            >
              Certifications
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            tabIndex="0"
          >
            <StudentsTable data={students} reload={fetchStudents} />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInstitute;
