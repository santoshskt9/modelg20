import React, { useState } from "react";
import { useFormik } from "formik";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { studentRegisterSchema } from "schema/register";
import { toast } from "react-hot-toast";
import { apiAuth } from "api";
import { Avatar } from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import { useGlobalContext } from "global/context";
import { useNavigate } from "react-router-dom";

const StudentEditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const { userData } = useGlobalContext();
  let collegeId = 5;

  const passwordformik = useFormik({
    initialValues: {
      oldpassword: "",
      password: "",
      confirm_password: "",
    },
    // validationSchema: studentRegisterSchema,
    onSubmit: async (values, { resetForm }) => {
      toast.dismiss();
      toast.loading("Submiting the form");
      console.log("Values: ", values);
      const formData = new FormData();
      console.log('check',userData.id)
      formData.append("password", values.oldpassword);
      formData.append("newpassword", values.password);
      formData.append("type", userData.type);
      formData.append("email", userData.email);
      try {
        const res = await apiAuth.post(`/auth/changepassword?id=${userData?.id}`, formData);
        console.log("res", res);
        if (res.status == 200) {
          toast.dismiss();
          toast.success("Password Changed Successfully");
          resetForm();
          // navigate('/dashboard');
        }
      } catch (error) {
        if (error) {
          toast.dismiss();
          toast.error(
            error.response.data.message
              ? error.response.data.message
              : "Something went wrong check your network Connection"
          );
        }
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      dob: "2001-01-26",
      first_name: "",
      middle_name: "",
      last_name: "",
      contact: "",
      father_name: "",
      gender: "female",
      confirm_password: "",
    },
    validationSchema: studentRegisterSchema,
    onSubmit: async (values, { resetForm }) => {
      toast.dismiss();
      toast.loading("Submiting the form");
      const formData = new FormData();
      formData.append("profile", profile);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("dob", values.dob);
      formData.append("instituteId", collegeId);
      formData.append("first_name", values.first_name);
      formData.append("middle_name", values.middle_name);
      formData.append("last_name", values.last_name);
      formData.append("contact", values.contact);
      formData.append("father_name", values.father_name);
      formData.append("gender", values.gender);
      console.log("formData", formData);
      try {
        const res = await apiAuth.post("/auth/register?type=0", formData);
        console.log("res", res);
        if (res.status == 200) {
          toast.dismiss();
          toast.success("Registered Successfully");
          resetForm();
          setProfile("");
        }
      } catch (error) {
        if (error) {
          toast.dismiss();
          toast.error(error.response.data.message);
        }
      }
    },
  });
  return (
    <div className="container">
      <div className="p-5"></div>
      <DashboardHeader setEdit={false} />
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
            General Profile
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
            Password
          </button>
        </li>
      </ul>
      {/* Tabs contents  */}
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <form onSubmit={formik.handleSubmit}>
            <div className="row gy-4">
              <div className="col-12">
                <div className="d-flex">
                  <Avatar
                    alt=""
                    src={profile && URL.createObjectURL(profile)}
                    sx={{ width: 96, height: 96 }}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    sx={{ width: 76, height: 76 }}
                  >
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      required
                      onChange={(e) => setProfile(e.target.files[0])}
                    />
                    <PhotoCamera />
                  </IconButton>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <TextField
                  fullWidth
                  id="first_name"
                  name="first_name"
                  label="First Name"
                  size="large"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
              </div>
              <div className="col-12 col-lg-4">
                <TextField
                  fullWidth
                  id="middle_name"
                  name="middle_name"
                  label="Middle Name"
                  size="large"
                  value={formik.values.middle_name}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.middle_name &&
                    Boolean(formik.errors.middle_name)
                  }
                  helperText={
                    formik.touched.middle_name && formik.errors.middle_name
                  }
                />
              </div>
              <div className="col-12 col-lg-4">
                <TextField
                  fullWidth
                  id="last_name"
                  name="last_name"
                  label="Last Name"
                  size="large"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.last_name && Boolean(formik.errors.last_name)
                  }
                  helperText={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </div>
              <div className="col-12 col-lg-6">
                <TextField
                  fullWidth
                  id="contact"
                  name="contact"
                  label="Contact"
                  size="large"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contact && Boolean(formik.errors.contact)
                  }
                  helperText={formik.touched.contact && formik.errors.contact}
                />
              </div>
              <div className="col-12 col-lg-6">
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  size="large"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <div className="col-12 col-lg-6">
                <TextField
                  fullWidth
                  id="dob"
                  name="dob"
                  type="date"
                  label="Date of Birth"
                  size="large"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                />
              </div>
              <div className="col-12 col-lg-6">
                <TextField
                  fullWidth
                  id="father_name"
                  name="father_name"
                  label="Father's Name"
                  size="large"
                  value={formik.values.father_name}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.father_name &&
                    Boolean(formik.errors.father_name)
                  }
                  helperText={
                    formik.touched.father_name && formik.errors.father_name
                  }
                />
              </div>
              <div className="col-12">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={formik.values.gender}
                    id="gender"
                    name="gender"
                    onChange={formik.handleChange}
                    row
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="col-12 col-lg-6">
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>
              <div className="col-12 col-lg-6">
                <TextField
                  fullWidth
                  id="confirm_password"
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirm_password &&
                    Boolean(formik.errors.confirm_password)
                  }
                  helperText={
                    formik.touched.confirm_password &&
                    formik.errors.confirm_password
                  }
                />
              </div>
              <div className="col-12">
                <Button
                  color="warning"
                  variant="contained"
                  className="py-3"
                  size="large"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <div className="py-5 container">
            <div className="container" style={{ maxWidth: "450px" }}>
              <h4 className="text-initial mb-4">Change Password</h4>
              <form onSubmit={passwordformik.handleSubmit}>
                <div className="row gy-4">
                  <div className="col-12">
                    <TextField
                      fullWidth
                      id="oldpassword"
                      name="oldpassword"
                      label="Old Password"
                      type="password"
                      value={passwordformik.values.oldpassword}
                      onChange={passwordformik.handleChange}
                      error={
                        passwordformik.touched.oldpassword &&
                        Boolean(passwordformik.errors.oldpassword)
                      }
                      helperText={
                        passwordformik.touched.password && passwordformik.errors.password
                      }
                    />
                  </div>
                  <div className="col-12">
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={passwordformik.values.password}
                      onChange={passwordformik.handleChange}
                      error={
                        passwordformik.touched.password &&
                        Boolean(passwordformik.errors.password)
                      }
                      helperText={
                        passwordformik.touched.password &&
                        passwordformik.errors.password
                      }
                    />
                  </div>
                  <div className="col-12">
                    <TextField
                      fullWidth
                      id="confirm_password"
                      name="confirm_password"
                      label="Confirm Password"
                      type="password"
                      value={passwordformik.values.confirm_password}
                      onChange={passwordformik.handleChange}
                      error={
                        passwordformik.touched.confirm_password &&
                        Boolean(passwordformik.errors.confirm_password)
                      }
                      helperText={
                        passwordformik.touched.confirm_password &&
                        passwordformik.errors.confirm_password
                      }
                    />
                  </div>
                  <div className="col-12">
                    <Button
                      color="warning"
                      variant="contained"
                      className="py-3"
                      size="large"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
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
  );
};

export default StudentEditProfile;
