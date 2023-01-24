import { apiAuth } from "api";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Enroll = () => {
  const navigate = useNavigate();

  const proceedEnroll = async () => {
    let formdata = {
      courseId: 1,
      studentId: 25,
    };

    try {
      const res = await apiAuth.post(`/course/enroll`, formdata);
      if (res.status == 200) {
        toast.dismiss();
        toast.success(`Enrolled Successfully`);
        navigate(`/courses/class/${formdata.courseId}`);
      }
    } catch (error) {
      if (error) {
        console.log("errpr",error)
        toast.dismiss();
        if (error.response.status === 409) {
          toast(
            error.response.data.message
              ? error.response.data.message
              : "Something went wrong check your network connection"
          , {
            icon: '😃',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
          navigate(`/courses/class/${formdata.courseId}`, {
            state: {
              tabId: 'enrolled'
            }
          });
        } else if(error.response.status !== 409) {
          toast.error(
            error.response.data.message
              ? error.response.data.message
              : "Something went wrong check your network connection"
          );
        }
      }
    }
  }

  const enrollHandler = () => {
    console.log("You have confirmed to enroll course");
    proceedEnroll();
  }

  return (
    <div
      class="modal fade"
      id="courseEnroll"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              G20 Certification Course
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Enroll For the G20 Certification Course</div>
          <button type="button" className="btn btn-success" onClick={enrollHandler} data-bs-dismiss="modal">Confirm</button>
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Discard</button>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
