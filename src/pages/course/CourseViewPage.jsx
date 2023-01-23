import React, { useEffect, useState } from "react";
import VimeoPlayer from "./viewer/VimeoPlayer";
import CourseDescriptions from "./CourseDescriptions";
import CoursePanel from "./coursepanel/CoursePanel";
import IframePdfViewer from "./viewer/IframePdfViewer";
import Loader from "./components/Loader/Loader";
// import { common_axios } from "../../../../../api/axios";
// import { useParams, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import Swal from "sweetalert2";
import Loading from "./components/Loader/Loading";
import QuizComp from "./quiz/QuizComp";

const CourseViewPage = () => {
  // Declarations
  // const param = useParams();
  // const history = useHistory();
  // const courseData = democourse;
  const [loader, setLoader] = useState(true);
  const [course, setCourse] = useState({});
  const [series, setSeries] = useState([]);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [certificateDownloadable, setCertificateDownloadable] = useState(false);

  //Generating the certificate
  // const generateCertificate = async () => {
  //   try {
  //     let formdata = {
  //       courseId: course?.course?.id,
  //       studentName: JSON.parse(localStorage.getItem("userDetails")).firstName,
  //       hours: course?.course?.duration || 1,
  //       CrDescription: "COurse Description",
  //       principal: "Safeinschool",
  //       accreditedBy: "SafeInSchool",
  //       endorsedBy: "National Commission for Child Protection",
  //       userId: JSON.parse(localStorage.getItem("userDetails")).id,
  //     };
  //     console.log("Certificate Form: ", formdata);
  //     const res = await common_axios.post("/certificate/generate", formdata);
  //     console.log(res);
  //     if (res.data.statusDescription.statusCode == 200) {
  //       console.log("Certificate Generated: ", res.data);
  //       history.push(`/printcertificate/${course?.course?.id}`);
  //     } else if (res.data.statusDescription.statusCode == 303) {
  //       console.log("");
  //       await Swal.fire({
  //         title: "Certificate already generated !!",
  //         text: "Visit Your Certificates Tab in My Profile to See Your Certificate",
  //         icon: "warning",
  //         timer: 4000,
  //         timerProgressBar: true,
  //       });
  //     } else {
  //       console.log("Contact admin", res);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //Getting the course data
  // const getCourse = async (id) => {
  //   try {
  //     // const res = await common_axios(`/course/v2/${id}`);
  //     if (res.data.statusDescription.statusCode == 200) {
  //       setCourse(res.data.coursedetail);
  //       setSeries(res.data.coursedetail.series);
  //       setLoader(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Course View Type Renderer
  const [viewIndex, setViewIndex] = useState(0);

  const view = (data) => {
    switch (data.documentType) {
      case 1:
        console.log("Video");
        return (
          <VimeoPlayer
            videoId={data.documentPath}
            viewIndex={viewIndex}
            setViewIndex={setViewIndex}
            series={series}
            // postProgress={postProgress}
            setCertificateDownloadable={setCertificateDownloadable}
          />
        );
        // return "video";
        break;

      case 2:
        console.log("Pdf");
        return (
          <IframePdfViewer
            file={data.documentPath}
            viewIndex={viewIndex}
            setViewIndex={setViewIndex}
            series={series}
            // postProgress={postProgress}
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
            // postProgress={postProgress}
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

  // const setCurrentCourse = (id) => {
  //   if (series[viewIndex].id !== id) {
  //     series.forEach((ele, i) => {
  //       if (ele.id == id) setViewIndex(i);
  //     });
  //   }
  // };

  // const [sectionCompleted, setSectionCompleted] = useState(0);
  // const [progress, setProgress] = useState([]);

  //Function for get Progress
  // async function fetchPrevProgress() {
  //   try {
  //     if (course?.course) {
  //       const res = await common_axios.post("/courseenrolled/getprogress", {
  //         userId: JSON.parse(localStorage.getItem("userDetails")).id,
  //         courseId: course.course.id,
  //       });
  //       console.log("Response", res);
  //       if (res.data) {
  //         setProgress(res.data.sectionProgress);
  //         setSectionCompleted(res.data.sectionCompleted);
  //         let lastIndex = res.data.sectionProgress.length - 1;
  //         setViewIndex(lastIndex);
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // }


  //Function for Post Progress
  // async function postProgress(Id) {
  //   try {
  //     const res = await common_axios.post("/courseenrolled/updateprogress", {
  //       userId: JSON.parse(localStorage.getItem("userDetails")).id,
  //       courseId: course?.course?.id,
  //       seriesId: Id,
  //       totalLength: course.courseSections,
  //     });
  //     if (res.data) {
  //       setProgress(res.data.sectionProgress);
  //       setSectionCompleted(res.data.sectionCompleted);
  //     }
  //   } catch (error) {
  //     console.log("Error Progress", error);
  //   }
  // }

  // postProgress(36);
  // useEffect(() => {
  //   console.log("ACTIVE", series[viewIndex]);
  // }, [viewIndex, series.length]);

  // useEffect(() => {
  //   getCourse(param.id);
  // }, []);
  // useEffect(() => {
  //   fetchPrevProgress();
  // }, [course]);
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
                {series.length !== 0
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
              // generateCertificate={generateCertificate}
              // progress={progress}
              certificateDownloadable
              // sectionCompleted={sectionCompleted}
              modules={course}
              activeCourse={series[viewIndex]}
              // setCurrentCourse={setCurrentCourse}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseViewPage;
