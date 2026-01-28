import { useNavigate, useParams } from "react-router-dom";
import { loungeDrinksMenu } from "../../data";
import foodIcon from "../../../../assets/nice-food.jpg";

interface LoungeItem {
  id: number;
  name: string;
  price: string;
  category: string;
}

const LoungeDrinksPage: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();

  const normalizedCategory = category?.toLowerCase() || "";

  const filteredDrinks = loungeDrinksMenu.filter((item: LoungeItem) => {
    const itemCategory = item.category.toLowerCase();

    if (normalizedCategory === "beer") {
      return (
        itemCategory === "beer" ||
        itemCategory === "beer" ||
        itemCategory === "stout"
      );
    }
    if (normalizedCategory === "brandy") {
      return itemCategory === "brandy";
    }
    if (normalizedCategory === "whisky" || normalizedCategory === "whiskey") {
      return itemCategory === "whiskey" || itemCategory === "whisky";
    }
    if (normalizedCategory === "tequila") {
      return itemCategory === "tequila";
    }
    if (normalizedCategory === "vodka") {
      return itemCategory === "vodka";
    }
    if (normalizedCategory === "gin") {
      return itemCategory === "gin";
    }
    if (normalizedCategory === "rum") {
      return itemCategory === "rum";
    }
    if (normalizedCategory === "liquer" || normalizedCategory === "liqueur") {
      return (
        itemCategory === "irish cream" ||
        itemCategory === "coffee-flavored cafe liqueur" ||
        itemCategory.includes("liqueur")
      );
    }
    if (
      normalizedCategory === "apretives" ||
      normalizedCategory === "aperitives"
    ) {
      return (
        itemCategory === "wine" ||
        itemCategory === "champagne" ||
        itemCategory === "rose" ||
        itemCategory === "rose/champagne" ||
        itemCategory === "brut/champagne"
      );
    }
    if (normalizedCategory === "energy-drinks") {
      return itemCategory === "energy drink";
    }

    return itemCategory === normalizedCategory;
  });

  const getCategoryInfo = () => {
    const cat = category?.toUpperCase() || "DRINKS";
    let color = "from-yellow-500 to-orange-500";
    let icon = "🍹";

    switch (normalizedCategory) {
      case "beer":
        color = "from-amber-500 to-yellow-600";
        icon = "🍺";
        break;
      case "brandy":
        color = "from-orange-600 to-red-600";
        icon = "🥃";
        break;
      case "whisky":
      case "whiskey":
        color = "from-amber-700 to-orange-800";
        icon = "🥃";
        break;
      case "tequila":
        color = "from-lime-500 to-green-600";
        icon = "🍸";
        break;
      case "vodka":
        color = "from-blue-400 to-cyan-500";
        icon = "🍸";
        break;
      case "gin":
        color = "from-teal-400 to-blue-500";
        icon = "🍸";
        break;
      case "rum":
        color = "from-amber-600 to-brown-700";
        icon = "🥃";
        break;
      case "liquer":
      case "liqueur":
        color = "from-purple-500 to-pink-600";
        icon = "🍷";
        break;
      case "apretives":
      case "aperitives":
        color = "from-rose-400 to-pink-500";
        icon = "🥂";
        break;
      case "energy drinks":
        color = "from-green-500 to-lime-600";
        icon = "⚡";
        break;
    }

    return { name: cat, color, icon };
  };

  const categoryInfo = getCategoryInfo();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.7)), url(${foodIcon})`,
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 py-12 px-4 bg-center bg-no-repeat backdrop-blur-md bg-fixed md:bg-local"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="relative">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent mb-6">
            {categoryInfo.name}
          </h1>
          <div className="absolute -top-6 -right-6 text-4xl animate-bounce">
            {categoryInfo.icon}
          </div>
        </div>
        <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
          Explore our premium selection of {categoryInfo.name.toLowerCase()}
        </p>
        <div
          className={`w-32 h-1 bg-gradient-to-r ${categoryInfo.color} mx-auto mt-6 rounded-full`}
        ></div>
      </div>

      {filteredDrinks.length === 0 ? (
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="text-6xl mb-6">😔</div>
          <h3 className="text-3xl font-bold text-white mb-4">
            No drinks found in this category
          </h3>
          <p className="text-amber-100 mb-8">
            Try exploring other categories from our drinks menu
          </p>
          <button
            onClick={() => navigate("/lounge/drinks")}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-500/50 text-white rounded-full transition-all duration-300 backdrop-blur-md font-medium"
          >
            ← Back to Drinks Menu
          </button>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredDrinks.map((item: LoungeItem, index: number) => (
              <div
                key={item.id}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className={`absolute -top-4 -right-4 bg-gradient-to-r ${categoryInfo.color} text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {item.price}
                </div>

                <div className="absolute top-4 left-4 flex space-x-1">
                  {[...Array(3)].map((_, i: number) => (
                    <span
                      key={i}
                      className="text-yellow-500 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      ⭐
                    </span>
                  ))}
                </div>

                <div className="relative z-10 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${categoryInfo.color} text-white text-xs font-semibold rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white to-transparent rounded-3xl"></div>
                </div>
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${categoryInfo.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto mt-24 text-center">
        <div
          className={`bg-gradient-to-r ${categoryInfo.color}/20 backdrop-blur-xl border ${categoryInfo.color}/30 rounded-3xl p-8`}
        >
          <div className="text-4xl mb-4">{categoryInfo.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Premium Quality
          </h3>
          <p className="text-amber-100 mb-6">
            All our drinks are carefully selected to ensure the highest quality
            and authentic taste experience.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-amber-300">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">✓</span>
              Authentic Brands
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">✓</span>
              Perfect Serve
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">✓</span>
              Expert Selection
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 text-center space-x-4">
        <button
          onClick={() => navigate("/lounge/drinks")}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-500/50 text-white rounded-full transition-all duration-300 backdrop-blur-md font-medium"
        >
          ← Back to Drinks Menu
        </button>
        <button
          onClick={() => navigate("/lounge")}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-500/50 text-white rounded-full transition-all duration-300 backdrop-blur-md font-medium"
        >
          ← Back to Lounge
        </button>
      </div>
    </div>
  );
};

export default LoungeDrinksPage;
