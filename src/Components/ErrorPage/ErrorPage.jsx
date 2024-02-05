import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="mt-50% text-white">dfdf</div>
      <div className="text-center font-bold mt-[15%] h-[100vh]">
        <h2 className="text-5xl text-red-600">
          Oops!!! There is no content here.{" "}
        </h2>
        <button className="text-white text-2xl  border rounded-lg bg-sky-500 p-6 m-6">
          <Link to="/">Go Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
