import { useNavigate } from "react-router-dom";
import { routes } from "../../lib/routes";
import bg from "../../assets/bg.jpg";
import jaysLogo from "../../assets/jays.png";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const links = [
  { name: "Menu", route: routes.menu.index },
  { name: "Reservation", route: routes.reservation.index },
  { name: "Contact Us", route: routes.contact.index },
];

const socialLinks = [
  {
    icon: Facebook,
    url: "https://facebook.com/jaysrestaurant",
    label: "Facebook",
  },
  {
    icon: Instagram,
    url: "https://instagram.com/jaysrestaurant",
    label: "Instagram",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/jaysrestaurant",
    label: "Twitter",
  },
  { icon: Mail, url: "mailto:info@jaysrestaurant.com", label: "Email" },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img className="mb-10" width={150} src={jaysLogo} alt="logo" />
      <div className="flex flex-col gap-6 w-full px-8 md:w-[40vw]">
        {links.map((data) => (
          <button
            key={data.name}
            className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300 px-6 py-3 font-semibold uppercase text-black text-xl transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            onClick={() => navigate(data.route)}
          >
            {data.name}
          </button>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="bg-white/10 backdrop-blur-sm rounded-full p-3 border-2 border-gray-300 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg active:scale-95"
          >
            <social.icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
