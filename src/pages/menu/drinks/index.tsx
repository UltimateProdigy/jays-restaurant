import { drinksMenu } from "../data"
import drinkIcon from "../../../assets/drink.jpg"

interface DrinkItem {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
}

interface GroupedDrinks {
    [key: string]: DrinkItem[];
}

interface CategoryColors {
    [key: string]: string;
}

const Drinks: React.FC = () => {
    const groupedDrinks: GroupedDrinks = drinksMenu.reduce((acc: GroupedDrinks, drink: DrinkItem) => {
        if (!acc[drink.category]) {
            acc[drink.category] = [];
        }
        acc[drink.category].push(drink);
        return acc;
    }, {});

    const categoryColors: CategoryColors = {
        'Cocktails': 'from-pink-500 to-rose-500',
        'Local Drinks': 'from-green-500 to-emerald-500',
        'Traditional': 'from-amber-500 to-orange-500',
        'Beer': 'from-blue-500 to-indigo-500',
        'Fresh Juices': 'from-yellow-500 to-orange-400',
        'Soft Drinks': 'from-purple-500 to-violet-500',
        'Water': 'from-cyan-500 to-blue-400'
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 bg-center bg-no-repeat backdrop-blur-md"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${drinkIcon})`
            }}>
            {/* Header Section */}
            <div className="max-w-6xl mx-auto text-center mb-16">
                <div className="relative">
                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                        Drinks Menu
                    </h1>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce"></div>
                </div>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Quench your thirst with our carefully curated selection of refreshing beverages
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto space-y-16">
                {Object.entries(groupedDrinks).map(([category, drinks]: [string, DrinkItem[]]) => (
                    <div key={category} className="relative">
                        {/* Category Header */}
                        <div className="flex items-center mb-8">
                            <div className={`h-12 w-2 bg-gradient-to-b ${categoryColors[category] || 'from-gray-500 to-gray-600'} rounded-full mr-4`}></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                {category}
                            </h2>
                            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-6"></div>
                        </div>

                        {/* Drinks Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {drinks.map((drink: DrinkItem, index: number) => (
                                <div
                                    key={drink.id}
                                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category] || 'from-gray-500 to-gray-600'} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                                    <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-600'} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                        {drink.price}
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                                            {drink.name}
                                        </h3>

                                        <p className="text-slate-300 text-sm leading-relaxed mb-4 group-hover:text-slate-200 transition-colors duration-300">
                                            {drink.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-1">
                                                {[...Array(3)].map((_, i: number) => (
                                                    <div
                                                        key={i}
                                                        className={`w-2 h-2 bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-600'} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                                                        style={{
                                                            animationDelay: `${i * 200}ms`
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-6xl mx-auto mt-20 text-center">
                <div className="flex justify-center space-x-4 mb-8">
                    {[...Array(7)].map((_, i: number) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 250}ms`
                            }}
                        ></div>
                    ))}
                </div>
                <p className="text-slate-400 text-sm">
                    All prices are in Nigerian Naira (₦) • Dine-in & Takeaway available
                </p>
            </div>
        </div>
    )
}

export default Drinks