import * as yup from "yup";
export const instituteregisterSchema = yup.object().shape({
  title: yup.string().max(10).required(),
  first_name: yup.string().max(100).required(),
  middle_name: yup.string().min(0).max(100),
  last_name: yup.string().max(100).required(),
  institute_name: yup.string().max(200).required(),
  institute_address: yup.string().max(1000).required(),
  state: yup.string().max(100).required(),
  pincode: yup.number("", "Email must match").required().positive().integer(),
  // .regex(/^[0-9]{6}$/)
  // .messages({ "string.pattern.base": `Pincode must have 6 digits.` })
  email: yup.string().email().required(),
  confirm_email: yup
    .string()
    .oneOf([yup.ref("email"), null], "Email must match"),
  contact: yup
    .number()
    // .regex(/^[0-9]{10}$/)
    // .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
});
export const campusregisterSchema = yup.object().shape({
  first_name: yup.string().max(100).required(),
  middle_name: yup.string().min(0).max(100),
  last_name: yup.string().max(100).required(),
  institute_name: yup.string().max(200).required(),
  institute_address: yup.string().max(1000).required(),
  state: yup.string().max(100).required(),
  pincode: yup.number("", "Email must match").required().positive().integer(),
  email: yup.string().email().required(),
  confirm_email: yup
    .string()
    .oneOf([yup.ref("email"), null], "Email must match"),
  contact: yup.number().required(),
  g20_certification_num: yup.string().max(1000).required(),
  reference: yup.string().max(1000).required(),
  social_active: yup.string().max(1000).required(),
  views_on_g20: yup.string().max(1000).required(),
  topics: yup.array().nullable(),
});
