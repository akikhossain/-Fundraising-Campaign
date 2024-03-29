import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Categories categories={categories}></Categories>
      </div>
    </div>
  );
};

export default Home;
