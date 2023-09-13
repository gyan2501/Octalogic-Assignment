import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatestEnroll } from "../redux/course/action";

const LatestEnrollment = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseReducer);

  const AllEnrolls = courses.latestEnrollment;
  const loading = courses.isLoading;
  // console.log("All Enroll", AllEnrolls);

  useEffect(() => {
    getLatestEnroll(dispatch);
  }, []);

  return (
    <div className="flex flex-col items-start gap-[16px] w-full">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-gray-500 font-nunito-sans text-[16px] font-bold tracking-wide uppercase">
          Latest Enrolments
        </p>
        <p className="text-Viewtext font-nunito-sans text-[14px] font-normal">
          View All Courses
        </p>
      </div>
      <div className="flex flex-col p-[24px] items-start gap-[16px] self-stretch rounded-[6px] bg-white justify-between">
        {loading ? (
          <div className="m-auto">
            <img
              src="https://i.gifer.com/ZKZg.gif"
              alt="loding indicator"
              className="max-h-[100px]"
            />
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 bg-white ">
            <thead className="font-bold text-head text-[14px]  ">
              <tr>
                <th className="py-[8px]">Enr. No</th>
                <th className=" py-[8px]">S. Name</th>
                <th className=" py-[8px] ">C. Name</th>
                <th className=" py-[8px]  ">Fees</th>
                <th className=" py-[8px] ">Enr. Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y text-center divide-gray-200 text-tableRow text-ceter">
              {/* Table rows go here */}

              {AllEnrolls?.map((el, i) => (
                <tr key={i}>
                  <td className=" py-[8px] ">{el.enrollment_no}</td>
                  <td className=" py-[8px] ">{el.student_name}</td>
                  <td className=" py-[8px] ">{el.course_name}</td>
                  <td className=" py-[8px] ">{el.fees}</td>
                  <td className=" py-[8px] ">{el.enrollment_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LatestEnrollment;
