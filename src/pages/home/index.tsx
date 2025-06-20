import { useNavigate } from "react-router-dom"
import { routes } from "../../lib/routes"
import bg from "../../assets/bg.jpg"
import jaysLogo from "../../assets/jays.png"

const links = [
    { name: "Menu", route: routes.menu.index },
    { name: "Reservation", route: routes.reservation.index },
    { name: "Contact Us", route: routes.contact.index },
]

const Home = () => {
    const navigate = useNavigate()
    return (
        <div
            className="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bg})`}}
        >
            <img className="mb-10" width={150} src={jaysLogo} alt="logo" />
            <div className="flex flex-col gap-6 w-full px-8 md:w-[40vw]">
                {
                    links.map((data) => (
                        <button className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300 px-6 py-3 font-semibold uppercase text-black text-xl transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none" onClick={() => navigate(data.route)}>
                            {data.name}
                        </button>
                    ))
                }
            </div>
        </div>

    )
}

export default Home