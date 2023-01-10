import * as yup from "yup";

export const instituteregisterSchema = yup.object().shape({
  title: yup.string().max(10).required("Title is Required"),
  first_name: yup.string().max(100).required("First Name is Required"),
  middle_name: yup.string().min(0).max(100),
  last_name: yup.string().max(100).required("Last Name is Required"),
  institute_name: yup.string().max(200).required("Institute is Required"),
  institute_address: yup
    .string()
    .max(1000)
    .required("Institute Address is Required"),
  state: yup.string().max(100).required("State is Required"),
  pincode: yup
    .string()
    .required("Pin code is Required")
    .matches(/^[0-9]{6}$/, "Invalid Pin code"),
  email: yup.string().email().required("Email is required"),
  confirm_email: yup
    .string()
    .oneOf([yup.ref("email"), null], "Email must match"),
  contact: yup
    .string()
    .required("Phone Number is Required")
    .matches(/^[0-9]{10}$/, "Invalid Mobile Number"),
});
export const campusregisterSchema = yup.object().shape({
  title: yup.string().max(10).required("Title is Required"),
  first_name: yup.string().max(100).required("First Name is Required"),
  middle_name: yup.string().min(0).max(100),
  last_name: yup.string().max(100).required("Last Name is Required"),
  institute_name: yup.string().max(200).required("Institute is Required"),
  institute_address: yup
    .string()
    .max(1000)
    .required("Institute Address is Required"),
  state: yup.string().max(100).required("State is Required"),
  pincode: yup
    .string()
    .required("Pin code is Required")
    .matches(/^[0-9]{6}$/, "Invalid Pin code"),
  email: yup.string().email().required("Email is required"),
  confirm_email: yup
    .string()
    .oneOf([yup.ref("email"), null], "Email must match"),
  contact: yup
    .string()
    .required("Phone Number is Required")
    .matches(/^[0-9]{10}$/, "Invalid Mobile Number"),
  g20_certification_num: yup
    .string()
    .max(200)
    .required("G20 Certification is required to apply for campus Sherpa"),
  reference: yup.string().max(300).required("Reference is Required"),
  social_active: yup.string().max(1000).required("Required"),
  views_on_g20: yup
    .string()
    .min(100, "Minimum 100 Words is required")
    .max(600, "Maximum 600 words are allowed")
    .required("This Field is Required"),
  topics: yup.array().required(),
});
