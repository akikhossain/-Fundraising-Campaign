import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SaveDonation } from "../Utilities/localstorage";

const CategoryDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find((card) => card.id === id);
  const handleDonate = () => {
    SaveDonation(id);
    toast.success("You have donated Successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="mt-20">
          <img className="w-full mb-14" src={card.picture} alt="" />
        </div>
        <button
          onClick={handleDonate}
          className=" py-9 pl-9 pr-[1050px] absolute left-[16.5%] top-[98%] backdrop-brightness-50 bg-black-50"
        >
          <span
            className="text-white font-semibold px-6 py-4 text-xl"
            style={{ backgroundColor: card.text_bg }}
          >
            Donate {card.price}
          </span>
        </button>
        <h1 className="text-4xl font-bold text-black mb-6">{card.title}</h1>
        <p className="text-black">{card.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CategoryDetails;
