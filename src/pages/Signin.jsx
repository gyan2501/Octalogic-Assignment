import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { loginAction } from "../redux/Auth/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const distpatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    let userData = { email, password };
    distpatch(loginAction(userData));
    setEmail("");
    setPassword("");
    navigate("/home")
    console.log(userData)
  };

  return (
    <div className="flex  items-start">
      <Sidebar />

      <div className="flex flex-col h-[100vh]  w-full px-[24px] py-[36px] items-center justify-center  gap-[32px] flex-1 ">
        <div className="bg-white shadow-md rounded px-8 py-8 min-h-[50vh] w-[30%]">
          <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow   rounded w-full py-2 px-3 text-gray-700 mb-3 "
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
