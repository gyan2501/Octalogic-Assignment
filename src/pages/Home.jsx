import BestStudents from "../components/BestStudents";
import DashboardData from "../components/DashboardData";
import LatestEnrollment from "../components/LatestEnrollment";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex items-start">
      <Sidebar />

      <div className="flex flex-col  h-[1024px] px-[24px] py-[36px] items-start gap-[32px] flex-1 border border-green-500">
        <h2 className="font-nunito-sans text-[28px] font-semibold text-gray-600">
          Overview
        </h2>
        <DashboardData />
        <LatestEnrollment />
        <BestStudents />
      </div>
    </div>
  );
};

export default Home;
