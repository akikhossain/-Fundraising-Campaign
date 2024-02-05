import { useEffect, useState } from "react";
import CategoryCard from "../Category/CategoryCard";

const Categories = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 mt-24 mb-[120px]">
        {cards.map((categoryCard) => (
          <CategoryCard
            key={categoryCard.id}
            categoryCard={categoryCard}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
