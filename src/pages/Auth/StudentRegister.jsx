import { api } from "api";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import CollegeBreadCrumb from "./CollegeBreadCrumb";
import bgImg from "./flag-bg.jpg";
import StudentRegisterForm from "./StudentRegisterForm";
const styles = {
  title: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const StudentRegister = () => {
  let query = useQuery();
  const navigate = useNavigate();
  let collegeId = query.get("collegeId");
  const [details, setDetails] = useState({});
  const fetchCollegeDetails = async () => {
    try {
      const res = await api.get(`/public/institute?collegeId=${collegeId}`);
      if (res.status == 200) {
        setDetails(res.data.result[0]);
      } else if (res.status == 404) {
        toast.error("Invalid Url College not Found");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("OOps something went wrong");
      navigate("/404");
    }
  };
  useEffect(() => {
    if (!collegeId) {
      toast.dismiss();
      toast.error("Invalid link");
    } else {
      fetchCollegeDetails();
    }
  }, []);

  return (
    <div>
      {" "}
      <div>
        <img
          src={
            details?.banner
              ? process.env.REACT_APP_API_BASE_URL + details.banner
              : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-open-house-invitation-banner-design-template-64bb82e1fda7fcd9e6fec7e1fcb13be9_screen.jpg?ts=1566569378"
          }
          alt=""
          className="w-100 d-block"
          style={{
            maxHeight: "60vh",
            objectFit: "contain",
            objectPosition: "center",
            objectPosition: "center",
          }}
        />
        <div className="container">
          <div className="d-flex justify-content-start flex-column flex-lg-row">
            <div className=" p-3">
              <img
                src={
                  details?.logo && details?.logo !== ""
                    ? process.env.REACT_APP_API_BASE_URL + details.logo
                    : "/images/icons/university.png"
                }
                alt="Logo"
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
                <p>{details?.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 mt-lg-5 h-100">
        {/* <!-- ========== Start Login ========== --> */}
        <div className="row row-cols-1 row-cols-lg-2 align-items-start">
          <div className="col" style={styles.title}>
            <h1 className="text-center text-black">
              Welcome <br /> to <br /> Yuvamanthan
            </h1>
          </div>
          <div className="col">
            <StudentRegisterForm collegeId={collegeId} />
          </div>
        </div>

        {/* <!-- ========== End Login ========== --> */}
      </div>
    </div>
  );
};

export default StudentRegister;
