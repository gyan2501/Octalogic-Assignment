import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center w-[96px] h-[1024px] p-[10px] pt-[12px] gap-[48px] border-r border-gray-300 bg-background-panel bg-white">
      <div className=" items-center">
        <Link to={"/"}>
          {" "}
          <img src="./Logo.png" alt="" />{" "}
        </Link>
      </div>

      <div className="flex flex-col items-center gap-[16px] self-stretch">
        <div className="flex flex-col items-center self-stretch p-[5px] py-[4px] rounded-[6px] bg-custom">
          <Link to={"/home"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z"
                fill="#901E75"
              />
            </svg>
            <p className="text-[12px]"> Home</p>
          </Link>
        </div>
        <div className="flex flex-col items-center self-stretch p-[5px] pt-[4px] rounded-[6px] bg-gray-200">
          <Link to={"/courses"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 6H17V14.18C16.69 14.07 16.35 14 16 14C14.34 14 13 15.34 13 17C13 18.66 14.34 20 16 20C17.66 20 19 18.66 19 17V8H22V6ZM15 6H3V8H15V6ZM15 10H3V12H15V10ZM11 14H3V16H11V14Z"
                fill="#83858B"
              />
            </svg>
            <p className="text-[12px]">Courses</p>
          </Link>
        </div>
      </div>

      <div className="h-[744px]  justify-end  gap-[16px]flex-1   flex flex-col text-[12px] items-center py-5 px-0 self-stretch rounded-[6px] text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 8L15.6 9.4L17.2 11H9V13H17.2L15.6 14.6L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
            fill="#83858B"
          />
        </svg>

        <p onClick={handleLogout}> Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
