import { useNavigate } from "react-router-dom";
import menuIcon from "../../../assets/nice-food.jpg";
import { routes } from "../../../lib/routes";

const mainDishCategories = [
  {
    name: "STEAKS & PREMIUM CUTS",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
    route: routes.menu.steaks,
    icon: "🥩",
    description: "Premium cuts and grilled perfection",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "PASTA SELECTION",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
    route: routes.menu.pasta,
    icon: "🍝",
    description: "Italian classics with Nigerian flair",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "ASIAN INSPIRATION",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
    route: routes.menu.asian,
    icon: "🍜",
    description: "Flavors from the Far East",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "RICE & SIGNATURE SPECIALTIES",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400",
    route: routes.menu.rice,
    icon: "🍚",
    description: "Nigerian rice dishes and specialties",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "SEAFOOD DELICACIES",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400",
    route: routes.menu.seaFoods,
    icon: "🐟",
    description: "Fresh catch prepared to perfection",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    name: "SALADS",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    route: routes.menu.salads,
    icon: "🥗",
    description: "Fresh and healthy options",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "DESSERT",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400",
    route: routes.menu.desserts,
    icon: "🍰",
    description: "Sweet endings to your meal",
    gradient: "from-purple-500 to-pink-500",
  },
];

const MainDishSubMenu = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen px-4 py-8 bg-cover bg-center bg-no-repeat backdrop-blur-md"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${menuIcon})`,
      }}
    >
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Main Dishes
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl">
          Choose your favorite category
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl">
        {mainDishCategories.map((category, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer"
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

              <h2 className="text-white text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {category.name}
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm group-hover:text-slate-300 transition-colors duration-300 mb-3">
                {category.description}
              </p>

              <div
                className={`w-16 h-1 bg-gradient-to-r ${category.gradient} rounded-full`}
              ></div>
            </div>

            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none`}
            ></div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/menu")}
        className="mt-12 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-500/50 text-white rounded-full transition-all duration-300 backdrop-blur-md font-medium"
      >
        ← Back to Menu
      </button>
    </div>
  );
};

export default MainDishSubMenu;
