import { useNavigate } from "react-router-dom";
import { routes } from "../../../lib/routes";

const menuIcon =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800";
const soupsImage =
  "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400";
const fingersImage =
  "https://images.unsplash.com/photo-1562967914-608f82629710?w=400";
const springRollImage =
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400";

const startersCategories = [
  {
    name: "SOUPS",
    image: soupsImage,
    route: routes.menu.soups,
    icon: "🥣",
    description: "Traditional Nigerian soups",
  },
  {
    name: "FINGERS",
    image: fingersImage,
    route: routes.menu.fingers,
    icon: "🍗",
    description: "Delicious finger foods",
  },
  {
    name: "SPRING ROLLS",
    image: springRollImage,
    route: routes.menu.springRoll,
    icon: "🌯",
    description: "Crispy spring rolls",
  },
];

const StartersSubMenu = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen px-4 py-8 bg-cover bg-center bg-no-repeat backdrop-blur-md"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${menuIcon})`,
      }}
    >
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent mb-4">
          Starters
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl">
          Choose your favorite category
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
        {startersCategories.map((category, index) => (
          <div
            key={index}
            className="group relative p-6 sm:p-8 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer mx-auto w-full max-w-xs sm:max-w-none"
            onClick={() => navigate(category.route)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-4 rounded-full overflow-hidden border-4 border-white/30 group-hover:border-orange-500/50 transition-all duration-300 shadow-xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h2 className="text-white text-xl sm:text-2xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300">
                {category.name}
              </h2>

              <p className="text-slate-400 text-sm sm:text-base group-hover:text-slate-300 transition-colors duration-300">
                {category.description}
              </p>
            </div>

            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/menu")}
        className="mt-12 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-orange-500/50 text-white rounded-full transition-all duration-300 backdrop-blur-md"
      >
        ← Back to Menu
      </button>
    </div>
  );
};

export default StartersSubMenu;
