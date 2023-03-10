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
import { Avatar, InputLabel, MenuItem, Select } from "@mui/material";
import { useGlobalContext } from "global/context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const InstituteEditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [banner, setBanner] = useState("");
  const { userData } = useGlobalContext();
  const [details, setDetails] = useState({});
  let collegeId = 5;
  // fetchDetails
  const fetchDetails = async () => {
    try {
      const res = await apiAuth.post("/institute", {
        instituteId: userData.id,
      });
      setDetails(res.data.result[0]);
    } catch (error) {
      toast.dismiss();
      toast.error("Oops Something went wrong");
      // handlelogout();
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  //Reset Password
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
      const formData = new FormData();
      formData.append("password", values.oldpassword);
      formData.append("newpassword", values.password);
      formData.append("type", userData.type);
      formData.append("email", userData.email);
      try {
        const res = await apiAuth.post(
          `/auth/changepassword?id=${userData.id}`,
          formData
        );
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
  // Profile Photo upload
  async function uploadPhoto(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", profile);
    try {
      const res = await apiAuth.put(
        `/institute/profile?update_type=logo`,
        formData
      );
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      if (error) {
        toast.error(
          error.response.data.message
            ? error.response.data.message
            : "Something Went Wrong Check  your Network Connection"
        );
      }
    }
  }
  // Banner Photo upload
  async function uploadBanner(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", banner);
    try {
      const res = await apiAuth.put(
        `/institute/profile?update_type=banner`,
        formData
      );
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      if (error) {
        toast.error(
          error.response.data.message
            ? error.response.data.message
            : "Something Went Wrong Check  your Network Connection"
        );
      }
    }
  }
  const basicFormik = useFormik({
    initialValues: {
      title: details.title,
      first_name: details.first_name,
      middle_name: details.middle_name,
      last_name: details.last_name,
      contact: details.contact,
      email: details.email,
    },
    onSubmit: async (values, { resetForm }) => {
      toast.dismiss();
      toast.loading("Submiting the form");
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("first_name", values.first_name);
      formData.append("middle_name", values.middle_name);
      formData.append("last_name", values.last_name);
      formData.append("contact", values.contact);
      try {
        const res = await apiAuth.put(
          `/institute/profile?update_type=basic`,
          formData
        );
        if (res.status === 200) {
          toast.dismiss();
          toast.success(res.data.message);
          resetForm();
        }
      } catch (error) {
        if (error) {
          toast.dismiss();
          toast.error(
            error.response.data.message
              ? error.response.data.message
              : "Something Went Wrong Check  your Network Connection"
          );
        }
      }
    },
  });
  const additionalFormik = useFormik({
    initialValues: {
      fb: "",
      twitter: "",
      insta: "",
      institution_name: "",
      bio: "",
      institution_address: "",
      state: "",
      pincode: "",
    },
    onSubmit: async (values, { resetForm }) => {
      toast.dismiss();
      toast.loading("Submiting the form");
      const formData = new FormData();
      formData.append("fb", values.fb);
      formData.append("twitter", values.twitter);
      formData.append("insta", values.insta);
      formData.append("institution_name", values.institution_name);
      formData.append("bio", values.bio);
      formData.append("institution_address", values.institution_address);
      formData.append("state", values.state);
      formData.append("pincode", values.pincode);
      try {
        const res = await apiAuth.put(
          `/institute/profile?update_type=additional`,
          formData
        );
        if (res.status === 200) {
          toast.dismiss();
          toast.success(res.data.message);
        }
      } catch (error) {
        if (error) {
          toast.dismiss();
          toast.error(
            error.response.data.message
              ? error.response.data.message
              : "Something Went Wrong Check  your Network Connection"
          );
        }
      }
    },
  });
  return (
    <>
      <div className="p-relative">
        <img
          src={
            details?.banner
              ? process.env.REACT_APP_API_BASE_URL + details?.banner
              : "https://img.freepik.com/free-vector/abstract-shape-with-halftone-background_1409-1277.jpg?t=st=1674384483~exp=1674385083~hmac=c15416d4a9483d729a0d4b544a11cd5eb151ac8ae4ba8757adcf420aaa7565bb"
          }
          alt=""
          className="w-100"
          style={{ maxHeight: "60vh", objectFit: "contain" }}
        />
      </div>
      <div className="container py-5">
        <ul
          class="nav nav-pill-design-2 justify-content-center nav-pills mb-3"
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
        <div class="tab-content py-5" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            {/* <EditProfile /> */}
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 gy-5">
                {/* -------------------
                Profile Picture
               -------------------*/}
                <div className="col">
                  <h3 className="text-initial fs-2 ps-4 border-start border-3 border-warning">
                    Profile Picture
                  </h3>
                </div>
                <div className="col">
                  <form
                    onSubmit={uploadPhoto}
                    className="d-flex align-items-center"
                  >
                    <Avatar
                      alt=""
                      name="profilepic"
                      src={
                        profile
                          ? URL.createObjectURL(profile)
                          : process.env.REACT_APP_API_BASE_URL + details?.logo
                      }
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
                        name="profile"
                        accept="image/*"
                        type="file"
                        onChange={(e) => setProfile(e.target.files[0])}
                      />
                      <PhotoCamera />
                    </IconButton>
                    <Button
                      color="warning"
                      variant="contained"
                      className="py-3 rounded-pill"
                      size="large"
                      type="submit"
                    >
                      Upload
                    </Button>
                  </form>
                </div>
                {/* -------------------
                  Banner
               -------------------*/}
                <div className="col">
                  <h3 className="text-initial fs-2 ps-4 border-start border-3 border-warning">
                    Banner Photo
                  </h3>
                </div>
                <div className="col">
                  <form onSubmit={uploadBanner}>
                    <img
                      src={
                        banner
                          ? URL.createObjectURL(banner)
                          : process.env.REACT_APP_API_BASE_URL + details?.banner
                      }
                      alt=""
                      className="w-100 border rounded-3"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="d-flex align-items-center">
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
                          onChange={(e) => setBanner(e.target.files[0])}
                        />
                        <PhotoCamera />
                      </IconButton>
                      <Button
                        color="warning"
                        variant="contained"
                        className="py-3 rounded-pill"
                        size="large"
                        type="submit"
                      >
                        Upload
                      </Button>
                    </div>
                  </form>
                </div>
                {/* -------------------
                  Basic Form
               -------------------*/}
                <div className="col">
                  <h4 className="text-initial fs-2 ps-4 border-start border-3 border-warning">
                    Basic Details
                  </h4>
                </div>
                <div className="col">
                  <form onSubmit={basicFormik.handleSubmit}>
                    <div className="row gy-4">
                      <div className="col-12 col-lg-3">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Title
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="title"
                            name="title"
                            label="Title"
                            value={basicFormik.values.title}
                            onChange={basicFormik.handleChange}
                            error={
                              basicFormik.touched.title &&
                              Boolean(basicFormik.errors.title)
                            }
                            required
                            helperText={
                              basicFormik.touched.title &&
                              basicFormik.errors.title
                            }
                          >
                            <MenuItem value={"Mr."}>Mr.</MenuItem>
                            <MenuItem value={"Ms."}>Ms.</MenuItem>
                            <MenuItem value={"Miss"}>Miss</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-12 col-lg-9">
                        <TextField
                          fullWidth
                          id="first_name"
                          name="first_name"
                          label="First Name"
                          size="large"
                          value={basicFormik.values.first_name}
                          onChange={basicFormik.handleChange}
                          error={
                            basicFormik.touched.first_name &&
                            Boolean(basicFormik.errors.first_name)
                          }
                          helperText={
                            basicFormik.touched.first_name &&
                            basicFormik.errors.first_name
                          }
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <TextField
                          fullWidth
                          id="middle_name"
                          name="middle_name"
                          label="Middle Name"
                          size="large"
                          value={basicFormik.values.middle_name}
                          onChange={basicFormik.handleChange}
                          error={
                            basicFormik.touched.middle_name &&
                            Boolean(basicFormik.errors.middle_name)
                          }
                          helperText={
                            basicFormik.touched.middle_name &&
                            basicFormik.errors.middle_name
                          }
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <TextField
                          fullWidth
                          id="last_name"
                          name="last_name"
                          label="Last Name"
                          size="large"
                          value={basicFormik.values.last_name}
                          onChange={basicFormik.handleChange}
                          error={
                            basicFormik.touched.last_name &&
                            Boolean(basicFormik.errors.last_name)
                          }
                          helperText={
                            basicFormik.touched.last_name &&
                            basicFormik.errors.last_name
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
                          value={basicFormik.values.contact}
                          onChange={basicFormik.handleChange}
                          error={
                            basicFormik.touched.contact &&
                            Boolean(basicFormik.errors.contact)
                          }
                          helperText={
                            basicFormik.touched.contact &&
                            basicFormik.errors.contact
                          }
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <TextField
                          fullWidth
                          id="email"
                          name="email"
                          label="Email Address"
                          size="large"
                          value={basicFormik.values.email}
                          onChange={basicFormik.handleChange}
                          error={
                            basicFormik.touched.email &&
                            Boolean(basicFormik.errors.email)
                          }
                          disabled={true}
                          helperText={
                            basicFormik.touched.email &&
                            basicFormik.errors.email
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
                {/* -------------------
                  Additional Form
               -------------------*/}
                <div className="col">
                  <h4 className="text-initial fs-2 ps-4 border-start border-3 border-warning">
                    Additional Details
                  </h4>
                </div>
                <div className="col">
                  <form onSubmit={additionalFormik.handleSubmit}>
                    <div className="row gy-4">
                      <div className="col-12">
                        <TextField
                          fullWidth
                          id="bio"
                          name="bio"
                          label="Bio"
                          multiline
                          rows={4}
                          size="large"
                          value={additionalFormik.values.bio}
                          onChange={additionalFormik.handleChange}
                          error={
                            additionalFormik.touched.bio &&
                            Boolean(additionalFormik.errors.bio)
                          }
                          helperText={
                            additionalFormik.touched.bio &&
                            additionalFormik.errors.bio
                          }
                        />
                      </div>
                      <div className="col-12">
                        <TextField
                          fullWidth
                          id="institution_name"
                          name="institution_name"
                          label="Institute Name"
                          multiline
                          rows={3}
                          size="large"
                          value={additionalFormik.values.institution_name}
                          onChange={additionalFormik.handleChange}
                          error={
                            additionalFormik.touched.institution_name &&
                            Boolean(additionalFormik.errors.institution_name)
                          }
                          helperText={
                            additionalFormik.touched.institution_name &&
                            additionalFormik.errors.institution_name
                          }
                        />
                      </div>
                      <div className="col-12">
                        <TextField
                          fullWidth
                          id="institution_address"
                          name="institution_address"
                          label="Institute Address"
                          multiline
                          rows={3}
                          size="large"
                          value={additionalFormik.values.institution_address}
                          onChange={additionalFormik.handleChange}
                          error={
                            additionalFormik.touched.institution_address &&
                            Boolean(additionalFormik.errors.institution_address)
                          }
                          helperText={
                            additionalFormik.touched.institution_address &&
                            additionalFormik.errors.institution_address
                          }
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <TextField
                          fullWidth
                          id="state"
                          name="state"
                          label="State"
                          size="large"
                          value={additionalFormik.values.state}
                          onChange={additionalFormik.handleChange}
                          error={
                            additionalFormik.touched.state &&
                            Boolean(additionalFormik.errors.state)
                          }
                          helperText={
                            additionalFormik.touched.state &&
                            additionalFormik.errors.state
                          }
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <TextField
                          fullWidth
                          id="pincode"
                          name="pincode"
                          label="Pin Code"
                          size="large"
                          value={additionalFormik.values.pincode}
                          onChange={additionalFormik.handleChange}
                          error={
                            additionalFormik.touched.pincode &&
                            Boolean(additionalFormik.errors.pincode)
                          }
                          helperText={
                            additionalFormik.touched.pincode &&
                            additionalFormik.errors.pincode
                          }
                        />
                      </div>
                      <div className="col-12">
                        <TextField
                          fullWidth
                          id="fb"
                          name="fb"
                          label="Facebook"
                          size="large"
                          type={"url"}
                          value={additionalFormik.values.fb}
                          onChange={additionalFormik.handleChange}
                          error={
                            additionalFormik.touched.fb &&
                            Boolean(additionalFormik.errors.fb)
                          }
                          helperText={
                            additionalFormik.touched.fb &&
                            additionalFormik.errors.fb
                          }
                        />
                      </div>
                      <div className="col-12">
                        <TextField
                          fullWidth
                          id="twitter"
                          name="twitter"
                          label="Twitter"
                          type={"url"}
                          size="large"
                          value={additionalFormik.values.twitter}
                          onChange={additionalFormik.handleChange}
                          error={
                            additionalFormik.touched.twitter &&
                            Boolean(additionalFormik.errors.twitter)
                          }
                          helperText={
                            additionalFormik.touched.twitter &&
                            additionalFormik.errors.twitter
                          }
                        />
                      </div>
                      <div className="col-12">
                        <TextField
                          fullWidth
                          id="insta"
                          name="insta"
                          label="Instagram"
                          type={"url"}
                          size="large"
                          value={additionalFormik.values.insta}
                          onChange={additionalFormik.handleChange}
                          error={
                            additionalFormik.touched.insta &&
                            Boolean(additionalFormik.errors.insta)
                          }
                          helperText={
                            additionalFormik.touched.insta &&
                            additionalFormik.errors.insta
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
                          passwordformik.touched.password &&
                          passwordformik.errors.password
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
        </div>
      </div>
    </>
  );
};

export default InstituteEditProfile;
