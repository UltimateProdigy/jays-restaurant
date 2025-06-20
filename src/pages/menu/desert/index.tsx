import { desertMenu } from "../data"
import desertIcon from "../../../assets/desert.jpg"

interface DesertItem {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
}

interface GroupedDeserts {
    [key: string]: DesertItem[];
}

interface CategoryColors {
    [key: string]: string;
}

const Desert: React.FC = () => {
    const groupedDeserts: GroupedDeserts = desertMenu.reduce((acc: GroupedDeserts, desert: DesertItem) => {
        if (!acc[desert.category]) {
            acc[desert.category] = [];
        }
        acc[desert.category].push(desert);
        return acc;
    }, {});

    const categoryColors: CategoryColors = {
        'Traditional': 'from-amber-400 to-orange-500',
        'Cakes': 'from-purple-500 to-pink-500',
        'Pastries': 'from-cyan-400 to-blue-500',
        'Healthy': 'from-emerald-400 to-teal-500',
        'Frozen': 'from-blue-400 to-indigo-500',
        'Snacks': 'from-violet-500 to-purple-600'
    };

    const categoryIcons: { [key: string]: string } = {
        'Traditional': '🍡',
        'Cakes': '🎂',
        'Pastries': '🥐',
        'Healthy': '🍓',
        'Frozen': '🍨',
        'Snacks': '🥨'
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4 bg-cover bg-center bg-no-repeat backdrop-blur-md"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${desertIcon})`
            }}>
            <div className="max-w-6xl mx-auto text-center mb-16">
                <div className="relative">
                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
                        Dessert Menu
                    </h1>
                    <div className="absolute -top-6 -right-6 text-4xl animate-bounce">🍧</div>
                    <div className="absolute -bottom-4 -left-8 text-3xl animate-pulse">🍒</div>
                </div>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Indulge in our sweet and savory treats that showcase Nigerian flavors
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto space-y-20">
                {Object.entries(groupedDeserts).map(([category, deserts]: [string, DesertItem[]]) => (
                    <div key={category} className="relative">
                        <div className="flex items-center justify-center mb-12">
                            <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
                                <span className="text-3xl mr-4">{categoryIcons[category] || '🍰'}</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    {category}
                                </h2>
                                <div className={`ml-6 w-3 h-3 bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-600'} rounded-full animate-pulse`}></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {deserts.map((desert: DesertItem, index: number) => (
                                <div
                                    key={desert.id}
                                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                                    style={{
                                        animationDelay: `${index * 150}ms`
                                    }}
                                >
                                    <div className={`absolute -top-4 -right-4 bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-600'} text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        {desert.price}
                                    </div>

                                    <div className="absolute top-4 left-4 flex space-x-1">
                                        {[...Array(3)].map((_, i: number) => (
                                            <span key={i} className="text-yellow-300 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                                ✨
                                            </span>
                                        ))}
                                    </div>

                                    <div className="relative z-10 pt-8">
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                                            {desert.name}
                                        </h3>
                                        <p className="text-slate-300 text-base leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300 min-h-[3rem]">
                                            {desert.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <span className={`px-3 py-1 bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-600'} text-white text-xs font-semibold rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}>
                                                {category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white to-transparent rounded-3xl"></div>
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white to-transparent rounded-3xl"></div>
                                    </div>
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-600'} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}></div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-16">
                            <div className="flex space-x-2">
                                {[...Array(5)].map((_, i: number) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-600'} rounded-full animate-pulse`}
                                        style={{
                                            animationDelay: `${i * 300}ms`
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto mt-24 text-center">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8">
                    <div className="text-4xl mb-4">👩‍🍳</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Chef's Special Treats</h3>
                    <p className="text-slate-300 mb-6">
                        Our desserts and snacks are made with authentic Nigerian recipes, using locally sourced ingredients for that special homemade taste.
                    </p>
                    <div className="flex justify-center space-x-8 text-sm text-slate-400">
                        <div className="flex items-center">
                            <span className="text-blue-300 mr-2">✓</span>
                            Authentic Recipes
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-300 mr-2">✓</span>
                            Fresh Ingredients
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-300 mr-2">✓</span>
                            Perfectly Balanced
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20 text-center">
                <div className="flex justify-center space-x-4 mb-8">
                    {[...Array(7)].map((_, i: number) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 250}ms`
                            }}
                        ></div>
                    ))}
                </div>
                <p className="text-slate-400 text-sm">
                    All prices are in Nigerian Naira (₦) • Perfect for any occasion
                </p>
            </div>
        </div>
    )
}

export default Desert