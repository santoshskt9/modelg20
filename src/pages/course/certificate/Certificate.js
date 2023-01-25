import { apiAuth } from "api";
import { useGlobalContext } from "global/context";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import CertImage from "../PrintCertificate/certificate.png";

const CertficateComponent = ({ cert }) => {
  return (
    <div className="border">
      <div id="certificate" className="certficate-container">
        <h6 className="certificate-name fs-4 DMserif text-capitalize p-absolute text-center w-100">
          {cert?.first_name} {cert?.middle_name} {cert?.last_name}
        </h6>
        <div className="certificate-top p-3 p-absolute w-100 d-flex align-items-center justify-content-between">
          <span style={{ fontSize: "9px" }}>
            Certficate No. <br />
            <b className="DMserif  text-dark fw-regular">
              {cert?.certificate_key}
            </b>
          </span>
          <span className="DMserif fs-6 text-warning fw-regular">
            {cert.created_at}
          </span>
        </div>
        <img src={CertImage} alt="" className="w-100" />
      </div>
      <div className="p-3">
        <h5>
          <span className="DMserif fs-6">Course Name</span> <br />
          <span className="mt-1 text-secondary font-monospace">
            {cert?.course_name}
          </span>
        </h5>
        <h6>
          <span className="DMserif fs-6">Accredited By</span> <br />
          <span className="mt-1 text-secondary font-monospace">
            {cert?.accredited_by}
          </span>
        </h6>
        <h6>
          <span className="DMserif fs-6">Endorsed By</span> <br />
          <span className="mt-1 text-secondary font-monospace">
            {cert?.endorsed_by}
          </span>
        </h6>
        <h6>
          <span className="DMserif fs-6">Certificate credential</span> <br />
          <span className="mt-1 text-secondary font-monospace">
            {cert?.certificate_key}
          </span>
        </h6>
        <Link to={`/dashboard/certificate/${cert.courseId}`}>View</Link>
      </div>
    </div>
  );
};

const Certificate = () => {
  const [certificates, setcertificates] = useState([]);
  const { userData } = useGlobalContext();
  const getCertificatesByuserId = async () => {
    if (userData.id) {
      try {
        const res = await apiAuth.get(
          `/course/allcertificates?studentId=${userData.id}`
        );
        if (res?.status === 200) {
          setcertificates(res?.data?.result);
        }
      } catch (err) {
        toast.dismiss();
        toast.error(
          err?.response?.data?.message
            ? err?.response?.data?.message
            : "Something Went wrong check your internet connection"
        );
      }
    }
  };
  useEffect(() => {
    getCertificatesByuserId();
  }, []);
  return (
    <>
      {/* <SimpleBreadcrumb title={"Certificates"} /> */}
      <div className="container p-4 py-5">
        {certificates.length === 0 ? (
          <div
            class="col-12 text-center"
            style={{ marginTop: "5rem", marginBottom: "5rem" }}
          >
            <div className="d-flex justify-content-center">
              <div className="col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1321/1321098.png"
                  alt=""
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <p class="text-center DMserif fs-2 mt-4">
                  No Certificates Found
                </p>
              </div>
            </div>
          </div>
        ) : (
          certificates?.map((data) => {
            return (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                  <CertficateComponent cert={data} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default Certificate;
