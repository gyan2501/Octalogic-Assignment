import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../redux/course/action";
import { useEffect } from "react";

const CourseLists = () => {

  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseReducer);

  const AllCourse = courses.courses;
  // console.log("All Courses", AllCourse);

  useEffect(() => {
    getCourses(dispatch);
  }, []);


  return (
    <div className="flex flex-col items-start gap-[16px] w-full">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-gray-500 font-nunito-sans text-[16px] font-bold tracking-wide uppercase">
          Course List
        </p>
        <div className="flex  p-[8px] items-center gap-[8px] rounded-[4px] border border-gray-200 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.33333 2C7.4826 2 8.58481 2.45655 9.39746 3.2692C10.2101 4.08186 10.6667 5.18406 10.6667 6.33333C10.6667 7.40667 10.2733 8.39333 9.62667 9.15333L9.80667 9.33333H10.3333L13.6667 12.6667L12.6667 13.6667L9.33333 10.3333V9.80667L9.15333 9.62667C8.36703 10.2978 7.36714 10.6666 6.33333 10.6667C5.18406 10.6667 4.08186 10.2101 3.2692 9.39746C2.45655 8.58481 2 7.4826 2 6.33333C2 5.18406 2.45655 4.08186 3.2692 3.2692C4.08186 2.45655 5.18406 2 6.33333 2ZM6.33333 3.33333C4.66667 3.33333 3.33333 4.66667 3.33333 6.33333C3.33333 8 4.66667 9.33333 6.33333 9.33333C8 9.33333 9.33333 8 9.33333 6.33333C9.33333 4.66667 8 3.33333 6.33333 3.33333Z"
              fill="#83858B"
            />
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="flex flex-col p-[24px] items-start gap-[16px] self-stretch rounded-[6px] bg-white justify-between">
        <table className="min-w-full divide-y divide-gray-200 bg-white ">
          <thead className="font-bold text-head text-[14px] text-left  ">
            <tr>
              <th className="py-[8px]">Name</th>
              <th className="py-[8px]">Description</th>
              <th className="py-[8px]">Instructor</th>
              <th className="py-[8px]">Instrument</th>
              <th className="py-[8px]">Day of Week</th>
              <th className="py-[8px]"># of Students</th>
              <th className="py-[8px]">Price</th>
              <th className="py-[8px]">Status</th>
              <th className="py-[8px]">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y  divide-gray-200 text-tableRow text-left">
            {/* Table rows go here and map All courses */}
            {AllCourse.map((el, i) => (
              <tr key={i}>
                <td className="py-[8px] ">{el.Name}</td>
                <td className="py-[8px]">{el.Description}</td>
                <td className="py-[8px]">{el.Instructor}</td>
                <td className="py-[8px]">{el.Instrument}</td>
                <td className="py-[8px]">{el.DayofWeek}</td>
                <td className="py-[8px]">{el.No_ofStudents}</td>
                <td className="py-[8px]">{el.Price}</td>
                <td className="py-[8px]">{el.Status}</td>
                <td className="py-[8px]">
                  <div className="flex w-[49px]  h-[24px] m-auto justify-center items-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5"
                      height="16"
                      viewBox="0 0 5 16"
                      fill="none"
                    >
                      <path
                        d="M2.5 12C3.03043 12 3.53914 12.2107 3.91421 12.5858C4.28929 12.9609 4.5 13.4696 4.5 14C4.5 14.5304 4.28929 15.0391 3.91421 15.4142C3.53914 15.7893 3.03043 16 2.5 16C1.96957 16 1.46086 15.7893 1.08579 15.4142C0.710714 15.0391 0.5 14.5304 0.5 14C0.5 13.4696 0.710714 12.9609 1.08579 12.5858C1.46086 12.2107 1.96957 12 2.5 12ZM2.5 6C3.03043 6 3.53914 6.21071 3.91421 6.58579C4.28929 6.96086 4.5 7.46957 4.5 8C4.5 8.53043 4.28929 9.03914 3.91421 9.41421C3.53914 9.78929 3.03043 10 2.5 10C1.96957 10 1.46086 9.78929 1.08579 9.41421C0.710714 9.03914 0.5 8.53043 0.5 8C0.5 7.46957 0.710714 6.96086 1.08579 6.58579C1.46086 6.21071 1.96957 6 2.5 6ZM2.5 0C3.03043 0 3.53914 0.210714 3.91421 0.585786C4.28929 0.960859 4.5 1.46957 4.5 2C4.5 2.53043 4.28929 3.03914 3.91421 3.41421C3.53914 3.78929 3.03043 4 2.5 4C1.96957 4 1.46086 3.78929 1.08579 3.41421C0.710714 3.03914 0.5 2.53043 0.5 2C0.5 1.46957 0.710714 0.960859 1.08579 0.585786C1.46086 0.210714 1.96957 0 2.5 0Z"
                        fill="#83858B"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseLists;
