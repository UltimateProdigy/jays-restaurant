import { foodMenu } from "../data";
import foodIcon from "../../../assets/nice-food.jpg";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

interface GroupedFood {
  [key: string]: FoodItem[];
}

interface CategoryColors {
  [key: string]: string;
}

const Food: React.FC = () => {
  const groupedFood: GroupedFood = foodMenu.reduce(
    (acc: GroupedFood, food: FoodItem) => {
      if (!acc[food.category]) {
        acc[food.category] = [];
      }
      acc[food.category].push(food);
      return acc;
    },
    {}
  );

  const categoryColors: CategoryColors = {
    Soups: "from-orange-500 to-red-500",
    Fingers: "from-green-500 to-teal-500",
    "Spring Roll": "from-yellow-500 to-orange-500",
  };

  const categoryIcons: { [key: string]: string } = {
    Soups: "🥣",
    Fingers: "🍗",
    "Spring Roll": "🌯",
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${foodIcon})`,
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 py-12 px-4 bg-center bg-no-repeat backdrop-blur-md bg-fixed md:bg-local"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="relative">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent mb-6">
            Starters Menu
          </h1>
          <div className="absolute -top-6 -right-6 text-4xl animate-bounce">
            🍽️
          </div>
          <div className="absolute -bottom-4 -left-8 text-3xl animate-pulse">
            🌶️
          </div>
        </div>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Savor the authentic taste of Nigeria with our carefully crafted
          traditional dishes
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        {Object.entries(groupedFood).map(
          ([category, foods]: [string, FoodItem[]]) => (
            <div key={category} className="relative">
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
                  <span className="text-3xl mr-4">
                    {categoryIcons[category] || "🍴"}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {category}
                  </h2>
                  <div
                    className={`ml-6 w-3 h-3 bg-gradient-to-r ${
                      categoryColors[category] || "from-gray-500 to-gray-600"
                    } rounded-full animate-pulse`}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {foods.map((food: FoodItem, index: number) => (
                  <div
                    key={food.id}
                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <div
                      className={`absolute -top-4 -right-4 bg-gradient-to-r ${
                        categoryColors[category] || "from-gray-500 to-gray-600"
                      } text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      {food.price}
                    </div>

                    <div className="absolute top-4 left-4 flex space-x-1">
                      {[...Array(3)].map((_, i: number) => (
                        <span
                          key={i}
                          className="text-red-500 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          🌶️
                        </span>
                      ))}
                    </div>

                    <div className="relative z-10 pt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300 leading-tight">
                        {food.name}
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300 min-h-[3rem]">
                        {food.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${
                            categoryColors[category] ||
                            "from-gray-500 to-gray-600"
                          } text-white text-xs font-semibold rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                        >
                          {category}
                        </span>
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white to-transparent rounded-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white to-transparent rounded-3xl"></div>
                    </div>
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${
                        categoryColors[category] || "from-gray-500 to-gray-600"
                      } opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-16">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i: number) => (
                    <div
                      key={i}
                      className={`w-2 h-2 bg-gradient-to-r ${
                        categoryColors[category] || "from-gray-500 to-gray-600"
                      } rounded-full animate-pulse`}
                      style={{
                        animationDelay: `${i * 300}ms`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="max-w-4xl mx-auto mt-24 text-center">
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8">
          <div className="text-4xl mb-4">👨‍🍳</div>
          <h3 className="text-2xl font-bold text-white mb-4">Chef's Special</h3>
          <p className="text-slate-300 mb-6">
            All our dishes are prepared with fresh, locally sourced ingredients
            and traditional Nigerian spices for an authentic taste experience.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-slate-400">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Fresh Ingredients
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Traditional Recipes
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Made to Order
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 text-center">
        <div className="flex justify-center space-x-4 mb-8">
          {[...Array(7)].map((_, i: number) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 250}ms`,
              }}
            ></div>
          ))}
        </div>
        <p className="text-slate-400 text-sm">
          All prices are in Nigerian Naira (₦) • Dine-in & Takeaway available
        </p>
      </div>
    </div>
  );
};

export default Food;
