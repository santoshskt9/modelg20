import React, { useEffect, useState } from "react";
import VimeoPlayer from "./viewer/VimeoPlayer";
import CourseDescriptions from "./CourseDescriptions";
import CoursePanel from "./coursepanel/CoursePanel";
import IframePdfViewer from "./viewer/IframePdfViewer";
import Loader from "./components/Loader/Loader";
// import { common_axios } from "../../../../../api/axios";
import { useParams, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import Loading from "./components/Loader/Loading";
import QuizComp from "./quiz/QuizComp";
import { api, apiAuth } from "api";
import { useGlobalContext } from "global/context";
import { toast } from "react-hot-toast";

const CourseViewPage = () => {
  // Declarations
  const { courseId } = useParams();
  const { userData } = useGlobalContext();
  const navigate = useNavigate();
  // const courseData = democourse;
  const [loader, setLoader] = useState(true);
  const [course, setCourse] = useState({});
  const [series, setSeries] = useState([]);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [certificateDownloadable, setCertificateDownloadable] = useState(false);

  //Generating the certificate
  const generateCertificate = async () => {
    try {
      let formdata = {
        courseId,
        studentId: userData.id,
      };
      const res = await apiAuth.post("/course/certificate", formdata);
      if (res.status == 200) {
        toast.success("Certificate Genrerated Successfully");
        navigate(`/dashboard/certificate/${courseId}`);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 409) {
        navigate("/dashboard/certificate/" + courseId);
      }
      toast.error(
        err.response.data.message
          ? err.response.data.message
          : "Something Went Wrong Check Your Internet Connection"
      );
    }
  };

  // Getting the course data
  const getCourse = async (id) => {
    try {
      const res = await apiAuth.post(`course/enrolled/view`, {
        courseId,
        studentId: userData.id,
      });
      if (res.status == 200) {
        setCourse(res.data.course);
        console.log("courseres", res);
        setSeries(res.data.seriesArr);
      }
    } catch (error) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : "Something Went Wrong Check Your Internet Connection"
      );
    }
  };

  // Course View Type Renderer
  const [viewIndex, setViewIndex] = useState(0);
  const view = (data) => {
    switch (data.vd_type) {
      case 1:
        return (
          <VimeoPlayer
            videoId={data.path}
            viewIndex={viewIndex}
            setViewIndex={setViewIndex}
            series={series}
            postProgress={postProgress}
            setCertificateDownloadable={setCertificateDownloadable}
          />
        );
        // return "video";
        break;

      case 2:
        return (
          <IframePdfViewer
            file={data.documentPath}
            viewIndex={viewIndex}
            setViewIndex={setViewIndex}
            series={series}
            postProgress={postProgress}
            setCertificateDownloadable={setCertificateDownloadable}
          />
        );
        // return "pdf";
        break;

      case 3:
        return (
          <QuizComp
            file={data.documentPath}
            viewIndex={viewIndex}
            setViewIndex={setViewIndex}
            series={series}
            postProgress={postProgress}
            setCertificateDownloadable={setCertificateDownloadable}
          />
        );
        break;

      default:
        return (
          <div>
            <Loader />
          </div>
        );
        break;
    }
  };

  const setCurrentCourse = (id) => {
    if (series[viewIndex].id !== id) {
      series?.forEach((ele, i) => {
        if (ele.seriesId == id) setViewIndex(i);
      });
    }
  };
  const [sectionCompleted, setSectionCompleted] = useState(0);
  const [progress, setProgress] = useState([]);

  // Function for get Progress
  async function fetchPrevProgress() {
    try {
      if (course) {
        const res = await apiAuth.post("/course/getprogress", {
          courseId,
          studentId: userData.id,
        });
        if (res.status === 200) {
          setProgress(res.data.sectionProgress);
          setSectionCompleted(res.data.sectionCompleted);
          if (res.data.sectionProgress.length !== 0) {
            let lastIndex = res.data.sectionProgress.length - 1;
            setViewIndex(lastIndex);
          }
        }
      }
    } catch (error) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : "Something Went Wrong Check Your Internet Connection"
      );
    }
  }

  //Function for Post Progress
  async function postProgress(seriesId) {
    try {
      const res = await apiAuth.post("/course/updateprogress", {
        studentId: userData.id,
        courseId,
        seriesId: seriesId,
        totalLength: series?.length,
      });
      if (res.status == 200) {
        toast.success("Section Marked as Completed");
        fetchPrevProgress();
      }
    } catch (error) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : "Something Went Wrong Check Your Internet Connnection"
      );
    }
  }

  useEffect(() => {}, [viewIndex, series?.length]);

  useEffect(() => {
    getCourse();
  }, []);
  useEffect(() => {
    fetchPrevProgress();
  }, []);
  return (
    <>
      {/* <Loading attr={loader} /> */}
      <div className="container-fluid p-relative ">
        <div className="row">
          <div className="col-12 col-lg-9 border-end">
            {/* Course View Area  */}
            <div className="container">
              {/* end Top View  */}
              {/* Show Course Container  */}
              <div
                className="container-fluid p-0 mt-4"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Course Viewer */}
                {series?.length !== 0
                  ? view(series[viewIndex])
                  : "No course Found"}
                {/*End Course Viewer */}
              </div>
              {/*End Show Course Container  */}
            </div>
            {/* Course Details Section  */}
            <CourseDescriptions
              course={course}
              activeCourse={series[viewIndex]}
            />
            {/*End Course Details Section  */}
          </div>
          <button
            className="btn d-lg-none coursePanelToggle border-2 border-warning rounded-2 bg-white py-2 px-1"
            onClick={() => setSidebarActive(!sidebarActive)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5994/5994725.png"
              alt=""
              width={30}
            />
          </button>
          <div
            className={`col-12 col-lg-3 coursepanelColumn ${
              sidebarActive ? "active" : ""
            }`}
          >
            <CoursePanel
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
              generateCertificate={generateCertificate}
              progress={progress}
              sectionCompleted={sectionCompleted}
              modules={course}
              series={series}
              activeCourse={series[viewIndex]}
              setCurrentCourse={setCurrentCourse}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseViewPage;
