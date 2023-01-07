import React, { useState } from "react";
import { useFormik } from "formik";
import { instituteregisterSchema } from "../../schema/register";
import { postInstituteRegister } from "../../api";
import { toast } from "react-hot-toast";
const InstituteRegComp = () => {
  const [tnc, setTnc] = useState(false);
  const onSubmit = async (values, action) => {
    toast.loading("Loading...");
    try {
      const registerto = await postInstituteRegister(values);
      console.log("result", registerto);
      if (registerto.data.status === "ERROR") {
        toast.dismiss();
        return toast.error(registerto.data.message);
      } else {
        toast.dismiss();
        return toast.success(registerto.data.message);
      }
    } catch (error) {
      console.log("error", error);
      toast.dismiss();
      return toast.error("Something went wrong check your connection");
    }
  };
  const { values, errors, touched, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        title: "Mr.",
        first_name: "",
        middle_name: "",
        last_name: "",
        institute_name: "",
        institute_address: "",
        state: "",
        pincode: "",
        email: "",
        confirm_email: "",
        contact: "",
      },
      validationSchema: instituteregisterSchema,
      onSubmit,
    });
  return (
    <>
      {/* Registration Form */}
      <form
        action=""
        onSubmit={handleSubmit}
        className="container "
        style={{ maxWidth: "1100px" }}
      >
        <div className="row g-3 gy-2 text-dark fw-semibold">
          <div className="col-3 col-md-2 col-lg-1">
            <span className="form-label">Title </span>
            <select
              id="title"
              value={values.title}
              onChange={handleChange}
              className={
                errors.title && touched.title
                  ? "form-select py-3 ps-3 pe-3 border-danger"
                  : "form-select py-3 ps-3 pe-3"
              }
            >
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>
          </div>
          <div className="col-9 col-md-10 col-lg-4">
            <span className="form-label">
              First Name <b className="text-danger">*</b>
            </span>
            <input
              type="text"
              id="first_name"
              value={values.first_name}
              onChange={handleChange}
              className={
                errors.first_name && touched.first_name
                  ? "form-control border-danger"
                  : "form-control"
              }
            />
            {errors.first_name && touched.first_name && (
              <span className="text-danger fnt-small">{errors.first_name}</span>
            )}
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <span className="form-label">Middle Name </span>
            <input
              type="text"
              id="middle_name"
              value={values.middle_name}
              onChange={handleChange}
              className={
                errors.middle_name && touched.middle_name
                  ? "form-control border-danger"
                  : "form-control"
              }
            />
            {errors.middle_name && touched.middle_name && (
              <span className="text-danger fnt-small">
                {errors.middle_name}
              </span>
            )}
          </div>
          <div className="col-6 col-md-6 col-lg-4">
            <span className="form-label">
              Last Name <b className="text-danger">*</b>
            </span>
            <input
              type="text"
              id="last_name"
              value={values.last_name}
              onChange={handleChange}
              className={
                errors.last_name && touched.last_name
                  ? "form-control border-danger"
                  : "form-control"
              }
            />
            {errors.last_name && touched.last_name && (
              <span className="text-danger fnt-small">{errors.last_name}</span>
            )}
          </div>

          <div className="col-12 col-lg-6">
            <span className="form-label">
              Institution/College Name where the event will be organised{" "}
              <b className="text-danger">*</b>
            </span>
            <input
              type="text"
              id="institute_name"
              value={values.institute_name}
              onChange={handleChange}
              className={
                errors.institute_name && touched.institute_name
                  ? "form-control border-danger"
                  : "form-control"
              }
            />
            {errors.institute_name && touched.institute_name && (
              <span className="text-danger fnt-small">
                {errors.institute_name}
              </span>
            )}
          </div>
          <div className="col-12 col-lg-6">
            <span className="form-label">
              Institution/College Address <b className="text-danger">*</b>
            </span>
            <input
              type="text"
              id="institute_address"
              value={values.institute_address}
              onChange={handleChange}
              className={
                errors.institute_address && touched.institute_address
                  ? "form-control border-danger"
                  : "form-control"
              }
            />
            {errors.institute_address && touched.institute_address && (
              <span className="text-danger fnt-small">
                {errors.institute_address}
              </span>
            )}
          </div>
          <div className="col-12 col-lg-3">
            <span className="form-label">
              State <b className="text-danger">*</b>
            </span>
            <input
              id="state"
              value={values.state}
              onChange={handleChange}
              className={
                errors.state && touched.state
                  ? "form-control border-danger"
                  : "form-control"
              }
              type="text"
            />
            {errors.state && touched.state && (
              <span className="text-danger fnt-small">{errors.state}</span>
            )}
          </div>
          <div className="col-12 col-lg-3">
            <span className="form-label">
              Pincode <b className="text-danger">*</b>
            </span>
            <input
              id="pincode"
              value={values.pincode}
              onChange={handleChange}
              className={
                errors.pincode && touched.pincode
                  ? "form-control border-danger"
                  : "form-control"
              }
              type="text"
            />
            {errors.pincode && touched.pincode && (
              <span className="text-danger fnt-small">{errors.pincode}</span>
            )}
          </div>
          {/* contact Information  */}
          <div className="col-12">
            <hr className="my-4" />
            <h5>Contact Information</h5>
          </div>
          <div className="col-12 col-lg-6">
            <span className="form-label">
              Email <b className="text-danger">*</b>
            </span>
            <input
              id="email"
              value={values.email}
              onChange={handleChange}
              className={
                errors.email && touched.email
                  ? "form-control border-danger"
                  : "form-control"
              }
              type="email"
            />
            {errors.email && touched.email && (
              <span className="text-danger fnt-small">{errors.email}</span>
            )}
          </div>
          <div className="col-12 col-lg-6">
            <span className="form-label">
              Confirm Email <b className="text-danger">*</b>
            </span>
            <input
              id="confirm_email"
              value={values.confirm_email}
              onChange={handleChange}
              className={
                errors.confirm_email && touched.confirm_email
                  ? "form-control border-danger"
                  : "form-control"
              }
              type="email"
            />
            {errors.confirm_email && touched.confirm_email && (
              <span className="text-danger fnt-small">
                {errors.confirm_email}
              </span>
            )}
          </div>
          <div className="col-12 col-lg-6">
            <span className="form-label">
              Contact Number <b className="text-danger">*</b>
            </span>
            <input
              id="contact"
              value={values.contact}
              onChange={handleChange}
              className={
                errors.contact && touched.contact
                  ? "form-control border-danger"
                  : "form-control"
              }
              type="number"
            />
            {errors.contact && touched.contact && (
              <span className="text-danger fnt-small">{errors.contact}</span>
            )}
          </div>
          {/* Model G20 Terms and Conditions * */}
          <div className="col-12">
            <h5>
              Model G20 Terms and Conditions <b className="text-danger">*</b>
            </h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="accept"
                checked={tnc}
                onChange={(e) => setTnc(e.target.checked)}
              />
              <span className="form-check-label">
                I agree all the information provided by me is true and i agree
                to the{" "}
                <span
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#g20instituteModal"
                >
                  terms of conditions.
                </span>
              </span>
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary-outline hover-ripple"
              disabled={isSubmitting || !tnc}
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InstituteRegComp;
