import { api, apiAuth } from "api";
import { useGlobalContext } from "global/context";
import CollegeBreadCrumb from "pages/Auth/CollegeBreadCrumb";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CertificationTable from "./CertificationTable";
import StudentsTable from "./StudentsTable";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { Tooltip } from "@mui/material";

const DashboardInstitute = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [students, setStudents] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const { userData, token } = useGlobalContext();
  const [shareableLink, setShareableLink] = useState(
    `https://www.yuvamanthan.org/college/student/register?collegeId=${userData.id}`
  );
  const fetchDetails = async () => {
    try {
      const res = await apiAuth.post(
        "/institute",
        {
          instituteId: userData.id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("response", res);
      setDetails(res.data.result[0]);
    } catch (error) {
      toast.dismiss();
      toast.error("Oops Something went wrong");
      console.log("error", error);
      // handlelogout();
    }
  };
  const fetchStudents = async () => {
    try {
      const res = await apiAuth.post(
        `/institute/data?type=students`,

        {
          instituteId: userData.id,
        }
      );
      console.log("res", res);
      if (res.status === 200) {
        setStudents(res.data.result);
      }
    } catch (error) {
      if (error) {
        toast.dismiss();
        toast.error(error.response?.data.message);
      }
    }
  };
  const fetchCertificates = async () => {
    try {
      const res = await apiAuth.get(`/institute/certificates`, {
        instituteId: userData.id,
      });
      console.log("Certificates", res);
      if (res.status === 200) {
        setCertificates(res.data.result);
      }
    } catch (error) {
      if (error) {
        toast.dismiss();
        toast.error(
          error.response?.data.message
            ? error.response?.data.message
            : "Something Went Wrong Check your Internet Connection"
        );
      }
    }
  };
  useEffect(() => {
    fetchStudents();
    fetchDetails();
    fetchCertificates();
  }, []);
  const DownloadQR = () => {
    //TODO: WIll be implemented soon
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "registerqrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div>
      <div>
        <div className="p-relative">
          <div className="d-flex p-absolute text-white justify-content-center align-items-center w-100 h-100">
            <h1 className="text-initial text-center fs-2 bg-white px-4 py-2 bg-opacity-75">
              Dashboard
            </h1>
          </div>
          <img
            src={
              details?.banner
                ? process.env.REACT_APP_API_BASE_URL + details?.banner
                : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-open-house-invitation-banner-design-template-64bb82e1fda7fcd9e6fec7e1fcb13be9_screen.jpg?ts=1566569378"
            }
            alt=""
            className="w-100 d-block"
            style={{
              height: "230px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="container">
          <div className="row justify-content-start flex-column flex-lg-row">
            <div className="col-12 col-md-4 col-lg-4 p-3 text-center">
              <img
                src={
                  details?.logo
                    ? process.env.REACT_APP_API_BASE_URL + details.logo
                    : "images/icons/university.png"
                }
                alt=""
                className="p-3 shadow border border-3 rounded-4"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
              <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                <h6>Shareable link</h6>
                <div
                  className="border rounded-4 bg-grad"
                  style={{ height: 200, width: 200, padding: "13px" }}
                >
                  <QRCode
                    id="qrcode"
                    value={shareableLink}
                    size={174}
                    includeMargin={true}
                    level={"H"}
                    bgColor={"#ffffff"}
                  />
                  ,
                </div>
                <div className="d-flex align-items-center py-4">
                  <Tooltip
                    title="Copy Link to Share Anywhere"
                    placement="top-start"
                  >
                    <button
                      className={`btn btn-primary-outline rounded-3 mx-2 py-0`}
                      onClick={() =>
                        navigator.clipboard.writeText(shareableLink)
                      }
                    >
                      <i className="bi bi-link fs-3"></i>
                    </button>
                  </Tooltip>
                  <Tooltip
                    title="Download QR code"
                    placement="top-start"
                  >
                    <button
                      className="btn btn-success rounded-3 mx-2 py-0"
                      onClick={DownloadQR}
                    >
                      <i className="bi bi-cloud-download fs-3"></i>
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <EmailShareButton
                    url={shareableLink}
                    quote={"Model g20 India"}
                    className="m-1"
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                  <FacebookShareButton
                    url={shareableLink}
                    quote={"Model g20 India"}
                    className="m-1"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={shareableLink}
                    quote={"Model g20 India"}
                    className="m-1"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    url={shareableLink}
                    quote={"Model g20 India"}
                    className="m-1"
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  <WhatsappShareButton
                    url={shareableLink}
                    quote={"Model g20 India"}
                    className="mx-1"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <TelegramShareButton
                    url={shareableLink}
                    quote={"Model g20 India"}
                    className="m-1"
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>
                  <PinterestShareButton
                    url={shareableLink}
                    quote={"Model g20 India"}
                    className="m-1"
                  >
                    <PinterestIcon size={32} round />
                  </PinterestShareButton>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8 p-3">
              <div>
                <h3>{details?.institution_name}</h3>
                <div>
                  <span className="d-flex align-items-center">
                    <i className="bi bi-person-fill fs-3 me-2"></i>
                    {details?.title}&nbsp;
                    {details?.first_name}&nbsp;
                    {details?.middle_name}&nbsp;
                    {details?.last_name}
                  </span>
                </div>
                <p className="fs-6 fst-italic">{details?.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-4"></div>
      <div className="container p-4">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
            >
              Students
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
            >
              Certifications
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            tabIndex="0"
          >
            <StudentsTable data={students} reload={fetchStudents} />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
          >
            <CertificationTable certificates={certificates} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInstitute;
