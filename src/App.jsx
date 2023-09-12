import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Signin from "./pages/Signin";



function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Signin />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </>
  );
}

export default App;
