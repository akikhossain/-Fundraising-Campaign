import { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [searchTerms, setSearchTerms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerms);
  };
  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setSearchTerms(data));
  }, []);
  return (
    <div>
      <div className="bg-image">
        <div className="overlay flex flex-col justify-center items-center">
          <h1 className="text-5xl text-center mt-28 text-black">
            I Grow By Helping People In Need.
          </h1>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              className="bg-white border p-4 rounded w-[360px]"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Search here..."
            />
            <input
              className="bg-red-500 mt-10 mb-[210px] px-7 py-4 rounded font-semibold text-sm text-white"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
