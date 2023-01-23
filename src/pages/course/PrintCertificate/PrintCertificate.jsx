import React from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CertificateTemplate from "./certificate.png";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
// import { common_axios } from "../../../../../../api/axios";
// import Swal from "sweetalert2";

const PrintCertificate = () => {
  const params = useParams();
  const location = useLocation();
  // const history = useHistory();
  console.log("param", params.courseid);
  const [certData, setCertData] = useState({});

  // const getCertificate = async () => {
  //   try {
  //     const res = await common_axios.post("/certificate", {
  //       courseId: params.courseid,
  //       userId: JSON.parse(localStorage.getItem("userDetails")).id,
  //     });
  //     if (res?.data?.statusDescription?.statusCode == 200) {
  //       console.log(res?.data);
  //       setCertData(res?.data);
  //       setName(res.data.certificate[0].studentName);
  //     } else {
  //       await Swal.fire({
  //         title: "No Certificate Found !!",
  //         text: "....",
  //         icon: "warning",
  //         timer: 4000,
  //         timerProgressBar: true,
  //       });
  //       // history.push("/certificates");
  //       console.log(res?.data?.statusDescription?.statusMessage);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     await Swal.fire({
  //       title: "Something Went Wrong !!",
  //       text: "Please try re visiting again",
  //       icon: "warning",
  //       timer: 4000,
  //       timerProgressBar: true,
  //     });
  //     // history.push("/certificate");
  //   }
  // };

  const printCert = () => {
    console.log("print");
    const input = document.getElementById("certificate");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [12.58, 8.85],
      });
      pdf.addImage(imgData, "pdf", 0, 0);
      pdf.save("certificate.pdf");
    });
  };
  const [today, setToday] = useState("");
  const [name, setName] = useState("");
  function getDateToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    setToday(today);
  }
  useEffect(() => {
    getDateToday();
    // getCertificate();
  }, []);

  return (
    <div className="container py-5">
      <div className="row gy-5 justify-content-center">
        <div className="col-12 col-lg-9">
          <div id="certificate" className="certficate-container">
            <h2 className="certificate-name DMserif text-capitalize p-absolute text-center w-100">
              {name}
            </h2>
            <div className="certificate-top p-3 p-absolute w-100 d-flex align-items-center justify-content-between">
              <span>
                Certficate No. <br />
                <b className="DMserif fs-4 text-dark fw-regular">
                  {certData?.certificate
                    ? certData?.certificate[0]?.CERT_ID
                    : ""}
                </b>
              </span>
              <span className="DMserif fs-4 text-warning fw-regular">
                {today}
              </span>
            </div>
            <img src={CertificateTemplate} alt="" className="w-100" />
          </div>
          {/* Download Button  */}
          <div className=" text-center mt-3">
            <button
              onClick={printCert}
              className="mb-5 btn btn-danger rounded-pill px-4 fs-5"
            >
              <i className="bi bi-file-earmark-pdf"></i> Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintCertificate;
