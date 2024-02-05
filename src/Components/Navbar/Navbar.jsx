import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:flex items-center md:justify-around  justify-center gap-5 max-w-7xl mx-auto md:pt-12">
      <div className="flex justify-center mb-4">
        <img
          src="https://i.ibb.co/7G0kvqD/Logo.png"
          alt="Logo of the Donation Campaign"
        />
      </div>
      <div className="flex list-none justify-center gap-5 lg:gap-12 text-black text-xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 underline font-bold text-xl"
                : " "
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 underline font-bold text-xl"
                : " "
            }
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 underline font-bold text-xl"
                : " "
            }
          >
            Statistics
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
