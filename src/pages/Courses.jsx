import Sidebar from "../components/Sidebar";

const Courses = () => {
  return (
    <div className="flex w-[1380px] items-start">
      <Sidebar />

      <div className="flex w-[1284px] p-[24px] pt-[36px] flex-col items-start gap-[32px] flex-shrink-0 border border-blue-500">
        <div>
          <h3>Courses</h3>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Courses;
