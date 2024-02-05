import { Link } from "react-router-dom";

const CategoryCard = ({ categoryCard }) => {
  const { id, picture, category, title, category_bg, card_bg, text_bg } =
    categoryCard;

  const categoryStyle = {
    backgroundColor: category_bg,
    color: category_bg,
  };
  const cardBg = {
    backgroundColor: card_bg,
  };
  const textColor = {
    color: text_bg,
  };

  return (
    <div>
      <Link to={`/category/${id}`}>
        <div className="card lg:w-[312px] shadow-xl" style={cardBg}>
          <figure>
            <img className="w-full" src={picture} alt="" />
          </figure>
          <h4
            className="mt-4 p-1 text-center mb-2 font-bold ml-6 rounded w-[120px]"
            style={categoryStyle}
          >
            <span className="lg:px-2" style={textColor}>
              {category}
            </span>
          </h4>

          <h2 className="card-title p-4 font-bold" style={textColor}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
