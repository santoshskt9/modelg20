import React from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setpasswordSchema } from "schema/register";
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SetPassword = () => {
  let query = useQuery();
  let collegeId = query.get("id");
  let secretKey = query.get("key");
  console.log("params", collegeId, secretKey);

  const handleSubmit = () => {};

  return (
    <>
      <div className="p-5"></div>
      <div className="py-5">
        <div className="container py-5 border rounded-4 p-4 bg-light" style={{ maxWidth: "450px" }}>
          <h4 className="text-center">Set Account Password</h4>
          <Formik
            initialValues={{ email: "", password: "", confirm_password: "" }}
            validationSchema={setpasswordSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="row g-3">
                  <div className="col-12">
                    <span className="form-label text-dark">Email Address</span>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="col-12">
                    <span className="text-dark form-label">Password</span>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="col-12">
                    <span className="text-dark form-label">
                      Confirm Password
                    </span>
                    <Field
                      type="password"
                      name="confirm_password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="confirm_password"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary-outline"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SetPassword;
