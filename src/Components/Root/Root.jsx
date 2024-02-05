import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="bg-white">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="mt-10 bg-white text-white">dfdf</div>
    </div>
  );
};

export default Root;
