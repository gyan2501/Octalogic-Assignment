import CourseLists from "../components/CourseLists";

import Sidebar from "../components/Sidebar";

const Courses = () => {
  return (
    <div className="flex  items-start">
      <Sidebar />

      <div className="flex flex-col  h-[1024px] px-[36px] py-[24px] items-start gap-[32px] flex-1 border border-green-500">
        <h2 className="font-nunito-sans text-[28px] font-semibold text-gray-600">
          Courses
        </h2>

        <CourseLists />
      </div>
    </div>
  );
};

export default Courses;
