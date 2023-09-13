import { useEffect } from "react";
import { getBestStudents } from "../redux/course/action";
import { useDispatch, useSelector } from "react-redux";

const BestStudents = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseReducer);

  const BestStudents = courses.bestStudents;
  const loading = courses.isLoading;

  // console.log("All Enroll", BestStudents);

  useEffect(() => {
    getBestStudents(dispatch);
  }, []);
  return (
    <div className="flex flex-col items-start gap-[16px] w-full">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-gray-500 font-nunito-sans text-[16px] font-bold tracking-wide uppercase">
          Best Students
        </p>
        <p className="text-Viewtext font-nunito-sans text-[14px] font-normal">
          View All Students
        </p>
      </div>
      <div className="flex flex-col p-[24px] items-start gap-[16px] self-stretch rounded-[6px] bg-white justify-between">
        {
          // Render Loding Indicator while loading
          loading ? (
            <div className="m-auto">
              <img
                src="https://i.gifer.com/ZKZg.gif"
                alt="loding indicator"
                className="max-h-[100px]"
              />
            </div>
          ) : (
            // Render the table with data when loading is false
            <table className="min-w-full divide-y divide-gray-200 bg-white ">
              <thead className="font-bold text-head text-[14px]  ">
                <tr>
                  <th className="py-[8px]">Reg. No</th>
                  <th className="py-[8px]">F. Name</th>
                  <th className="py-[8px]">L. Name</th>
                  <th className="py-[8px]">Course #</th>
                  <th className="py-[8px]">Total Fess</th>
                  <th className="py-[8px]">Reg. Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y text-center divide-gray-200 text-tableRow text-ceter">
                {/* Table rows go here */}

                {BestStudents?.map((el, i) => (
                  <tr key={i}>
                    <td className="py-[8px]">{el.registration_no}</td>
                    <td className="py-[8px]">{el.first_name}</td>
                    <td className="py-[8px]">{el.last_name}</td>
                    <td className="py-[8px]">{el.no_of_courses}</td>
                    <td className="py-[8px]">{el.total_fees}</td>
                    <td className="py-[8px]">{el.registration_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        }
      </div>
    </div>
  );
};

export default BestStudents;
