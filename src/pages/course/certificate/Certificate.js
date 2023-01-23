import { useEffect } from "react";
import { useState } from "react";
// import { common_axios } from "../../../../api/axios";
// import SimpleBreadcrumb from "../components/SimpleBreadcrumb";
import CertImage from "../PrintCertificate/certificate.png";
// import { Link, useHistory } from "react-router-dom";

const CertficateComponent = ({ cert }) => {
//   const history = useHistory();
  return (
    <div className="border">
      <div id="certificate" className="certficate-container">
        <h6 className="certificate-name fs-4 DMserif text-capitalize p-absolute text-center w-100">
          {cert.studentName}
        </h6>
        <div className="certificate-top p-3 p-absolute w-100 d-flex align-items-center justify-content-between">
          <span style={{ fontSize: "9px" }}>
            Certficate No. <br />
            <b className="DMserif  text-dark fw-regular">{cert.CERT_ID}</b>
          </span>
          <span className="DMserif fs-6 text-warning fw-regular">
            {cert.createdAt.slice(0, 10)}
          </span>
        </div>
        <img src={CertImage} alt="" className="w-100" />
      </div>
      <div className="p-3">
        <h5>
          <span className="DMserif fs-6">Course Name</span> <br />
          <span className="mt-1 text-secondary font-monospace">
            Adopt Css
          </span>
        </h5>
        <h6>
          <span className="DMserif fs-6">Endorsed By</span> <br />
          <span className="mt-1 text-secondary font-monospace">
            {cert.endorsedBy}
          </span>
        </h6>
        <h6>
          <span className="DMserif fs-6">Certificate credential</span> <br />
          <span className="mt-1 text-secondary font-monospace">
            {cert.CERT_ID}
          </span>
        </h6>
        {/* <Link
          to={{
            pathname: `/printcertificate/${cert.courseId}`,
          }}
        >
          View
        </Link> */}
      </div>
    </div>
  );
};

const Certificate = () => {
  const [certificates, setcertificates] = useState([]);
//   useEffect(() => {
//     getCertificatesByuserId();
//   }, []);
//   const getCertificatesByuserId = async () => {
//     let formdata = {
//       userId: JSON.parse(localStorage.getItem("userDetails")).id,
//     };
//     const res = await common_axios.post("/certificate/getAll", formdata);
//     if (res?.data?.statusDescription?.statusCode == 200) {
//       console.log(res?.data);
//       setcertificates(res.data.certificates);
//       console.log(certificates);
//     }
//   };
  return (
    <>
      {/* <SimpleBreadcrumb title={"Certificates"} /> */}
      <div className="container p-4 py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {certificates.length == 0 ? (
            <div
              class="row"
              style={{ marginTop: "5rem", marginBottom: "5rem" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1321/1321098.png"
                alt=""
                style={{ height: "200px", objectFit: "contain" }}
              />
              <p class="text-center DMserif fs-2 mt-4">No Certificates Found</p>

              {/* <img src="../.././/." >Not Image Found</img> */}
            </div>
          ) : (
            certificates?.map((data) => {
              return (
                <>
                  <div className="col">
                    <CertficateComponent cert={data} />
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Certificate;