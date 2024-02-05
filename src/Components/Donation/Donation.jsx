import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utilities/localstorage";

const Donation = () => {
  const cards = useLoaderData();
  const [appliedDonations, setAppliedDonations] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    const storedCardIds = getStoredDonation();
    if (cards.length > 0) {
      const donationApplied = [];
      for (const id of storedCardIds) {
        const card = cards.find((card) => card.id === id);
        if (card) {
          donationApplied.push(card);
        }
      }
      setAppliedDonations(donationApplied);
    }
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {appliedDonations.slice(0, dataLength).map((card) => (
          <div key={card.id}>
            <div
              style={{ backgroundColor: card.card_bg }}
              className="card card-side shadow-xl"
            >
              <figure>
                <img src={card.picture} />
              </figure>
              <div className="card-body p-2 mx-2 lg:h-[200px] ">
                <h4
                  className="w-20 text-center px2 rounded"
                  style={{ backgroundColor: card.category_bg }}
                >
                  <span style={{ color: card.text_bg }}> {card.category}</span>
                </h4>
                <h2 className="card-title text-black">{card.title}</h2>
                <p style={{ color: card.text_bg }}>{card.price}</p>
                <div className="card-actions lg:mb-6 mt-4 ">
                  <button
                    style={{ backgroundColor: card.text_bg }}
                    className="btn btn-primary border-none"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={dataLength === appliedDonations.length && "hidden"}>
        <div className="w-[160px] mx-auto mt-10 mb-[130px]">
          <button
            onClick={() => setDataLength(appliedDonations.length)}
            className="text-center bg-green-600 text-white px-4 py-2    rounded"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
