import Sidebar from "../components/Sidebar";

const Courses = () => {
  return (
    <div className="flex  items-start">
      <Sidebar />

      <div className="flex flex-col  h-[1024px] px-[24px] py-[36px] items-start gap-[32px] flex-1 border border-green-500">
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
