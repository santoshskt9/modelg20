import { api } from 'api';
import React, {useEffect, useState} from 'react';
import { toast } from "react-hot-toast";
import CourseCardItem from './components/CourseCardItem';

const AllCourses = () => {
  const [allcourses, setAllcourses] = useState([]);

  const fetchAllCourses = async () => {
    try {
      const res = await api.get(`/course`);
      if (res.status == 200) {
        setAllcourses(res.data.courses);
      }
    } catch (error) {
      if (error) {
        toast.dismiss();
        toast.error(
          error.response.data.message
            ? error.response.data.message
            : "Something went wrong check your network connection"
        );
      }
    }
  }

  useEffect(()=>{
    console.log("All Courses: ",allcourses);
  }, [allcourses]);

  useEffect(()=> {
    fetchAllCourses();
  }, []);


  return (
    <React.Fragment>
      <div className='p-5 bg-primary'>
        <div className="d-flex align-items-center justify-content-center">
          <h3 className='text-white font-ubd text-initial'>Our Courses</h3>
        </div>
      </div>
      <div className="container py-5">
        {
          allcourses?.map((course,i) => {
            return <CourseCardItem courses={course} key={i} enrolled={false}/>;
          })
        }
      </div>
    </React.Fragment>
  )
}
// fikfnikfn
export default AllCourses;