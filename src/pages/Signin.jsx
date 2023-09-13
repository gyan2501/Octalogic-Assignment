import Sidebar from "../components/Sidebar";

const Signin = () => {
  return (
    <div className="flex  items-start">
      <Sidebar />

      <div className="flex flex-col h-[100vh]  w-full px-[24px] py-[36px] items-center justify-center  gap-[32px] flex-1 "> 
       
    
        <div className="bg-white shadow-md rounded px-8 py-8 min-h-[50vh] w-[30%]">
          <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
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
