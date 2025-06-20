import menuIcon from "../../assets/food.jpg"
import drinkImage from "../../assets/drink.jpg"
import foodImage from "../../assets/chow.jpg"
import desertImage from "../../assets/desert.jpg"
import { routes } from "../../lib/routes"
import { useNavigate } from "react-router-dom"

const menu = [
    { name: "Drinks", image: drinkImage, route: routes.menu.drinks },
    { name: "Food & Delicacies", image: foodImage, route: routes.menu.food },
    { name: "Desert", image: desertImage, route: routes.menu.desert },
]

const Menu = () => {
    const navigate = useNavigate()
    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen px-4 py-8 bg-cover bg-center bg-no-repeat backdrop-blur-md"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${menuIcon})`
            }}
        >
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6 lg:mb-8">Our Menu</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
                {
                    menu.map((data, index) => (
                        <div
                            key={index}
                            className="group relative p-4 sm:p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer mx-auto w-full max-w-xs sm:max-w-none"
                            onClick={() => navigate(data.route)}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-white/50 transition-colors duration-300">
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <p className="text-white text-lg sm:text-xl font-medium group-hover:text-white/90 transition-colors duration-300">
                                    {data.name}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu