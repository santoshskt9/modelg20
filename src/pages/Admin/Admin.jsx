import { useGlobalContext } from "global/context";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { apiAuth } from "../../api";
import BreadCrumb from "./components/BreadCrumb";
import InstituteDataTable from "./components/InstituteDataTable";
import StudentDataTable from "./components/StudentDataTable";
// Chutiya
const Admin = () => {
  const [institute, setInstitute] = useState([]);
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();

  const { userData, removeUser, removeToken, logout, isloggedIn } =
    useGlobalContext();
  async function fetchInstitute() {
    const res = await apiAuth.get("admin?data=institutions");
    console.log("%c Institutes", "color:green", res);
    if (res.status == 200) {
      setInstitute(res.data.result);
    } else {
      console.log("Error something went wrong while");
      toast.error("Something wen wrong");
    }
  }
  async function fetchStudents() {
    const res = await apiAuth.get("admin?data=students");
    console.log("%c Students", "color:red", res);
    if (res.status == 200) {
      setStudent(res.data.result);
    } else {
      console.log("Error something went wrong while");
      toast.error("Something wen wrong");
    }
  }
  useEffect(() => {
    fetchInstitute();
    fetchStudents();
  }, []);
  return (
    <>
      <BreadCrumb />
      <div className="container py-5 mt-5">
        <nav className="d-inline-block mx-auto mb-4">
          <div
            className="nav nav-pill-design nav-tabs border rounded-pill"
            id="nav-tab"
            role="tablist"
            style={{ overflow: "hidden" }}
          >
            <button
              className="nav-link active btn-primary-outline  fw-semibold rounded-pill"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
            >
              Institutes
            </button>
            <button
              className="nav-link  fw-semibold btn-primary-outline rounded-pill"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
            >
              Students
            </button>
            <button
              className="nav-link  fw-semibold btn-primary-outline rounded-pill"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
            >
              Certfications
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <InstituteDataTable data={institute} reload={fetchInstitute} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <StudentDataTable data={student} reload={fetchInstitute} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            Certifications Table
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
