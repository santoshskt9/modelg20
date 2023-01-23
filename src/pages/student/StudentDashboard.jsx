import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {
  Call,
  LocationCity,
  LocationOn,
  Mail,
  Person,
} from "@mui/icons-material";
import { apiAuth } from "api";
import { toast } from "react-hot-toast";
import { useGlobalContext } from "global/context";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import CourseCardItem from "pages/course/components/CourseCardItem";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { userData, token, removeToken, removeUser } = useGlobalContext();
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    try {
      const res = await apiAuth.get("/student/detail", {
        headers: { Authorization: token },
      });
      console.log("response", res);
      if (res.status == 200) {
        setDetails(res.data.result[0]);
      }
    } catch (error) {
      if (error) {
        toast.dismiss();
        toast.error(
          error.response.data.message
            ? error.response.data.message
            : "Something went wrong check your network connection"
        );
      }
    }
  };
  useEffect(() => {
    console.log("User Data of Context API: ", userData);
    console.log("Token of Context API: ", token);
    fetchDetails();
  }, []);
  return (
    <div className="container">
      <div className="p-5"></div>
      <DashboardHeader setEdit={true}/>
      <div className="container p-4 ">
        <ul
          class="nav nav-pill-design-2 nav-pills mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active fs-5 border-bottom border-3 rounded-0 text-dark fw-semibold font-monospace"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
            >
              Workspace
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-5 border-bottom border-3 rounded-0 text-dark fw-semibold font-monospace"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
            >
              Course Enrolled
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-5 border-bottom border-3 rounded-0 text-dark fw-semibold font-monospace"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
            >
              Certifications
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <div className="row">
              <div className="col-12 col-lg-4">
                <div>
                  <List
                    className="ps-0 rounded-4 shadow border border-primary"
                    sx={{
                      width: "100%",
                      bgcolor: "white",
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Mail />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Email Address"
                        secondary={details?.email}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Call />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Contact Number"
                        secondary={details?.contact}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <LocationOn />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Address"
                        secondary={
                          details?.address +
                          ", " +
                          details?.state +
                          " pincode-" +
                          details?.pincode
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Person />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Father Name"
                        secondary={details?.father_name}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <LocationCity />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={details?.institution_name}
                        secondary={
                          details?.institution_address +
                          ", " +
                          details?.instituteState +
                          ", Pincode-" +
                          details?.institutePincode
                        }
                      />
                    </ListItem>
                  </List>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="container">
                  <h3 className="text-initial">Tasks</h3>
                  <div className="p-4 shadow bg-light border border-primary rounded-3 mt-3">
                    <h4>Register for the G20 Campus Sherpa Program</h4>
                    <button className="btn btn-primary-outline mt-3">
                      Register Now
                    </button>
                  </div>
                  <div className="p-4 shadow bg-light border border-primary rounded-3 mt-3">
                    <h4>G20 Certification Course</h4>
                    <button className="btn btn-primary-outline mt-3">
                      Certified Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            {/* fallback screen  */}
            <div className="p-relative">
              <div className="p-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <h1
                  className="text-light"
                  style={{ textShadow: "4px 4px grey" }}
                >
                  No Course Enrolled
                </h1>
              </div>

              <img
                src="/images/fallback/nocourse.gif"
                alt=""
                className="w-100"
              />
              <CourseCardItem/>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
