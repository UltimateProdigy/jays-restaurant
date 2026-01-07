import { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.date ||
      !formData.time ||
      !formData.guests ||
      !formData.name ||
      !formData.phone
    ) {
      alert(
        "Please fill in all required fields (Date, Time, Guests, Name, Phone)"
      );
      return;
    }

    const message = `
🍽️ *NEW RESERVATION REQUEST*

📅 *Date:* ${formData.date}
⏰ *Time:* ${formData.time}
👥 *Guests:* ${formData.guests}
🎉 *Occasion:* ${formData.occasion || "Not specified"}

👤 *Customer Details:*
Name: ${formData.name}
Email: ${formData.email || "Not provided"}
Phone: ${formData.phone}

📝 *Special Requests:*
${formData.specialRequests || "None"}

Thank you for choosing our restaurant! 🌟
    `.trim();

    const whatsappNumber = "2347037807541";
    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    setFormData({
      date: "",
      time: "",
      guests: "",
      occasion: "",
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="relative">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6">
            Make a Reservation
          </h1>
          <div className="absolute -top-6 -right-6 text-4xl">🍽️</div>
          <div className="absolute -bottom-4 -left-8 text-3xl">🌟</div>
        </div>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Secure your table for an unforgettable dining experience
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl mr-4">
              📅
            </span>
            Book Your Table
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Time *
                </label>
                <select
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                >
                  <option className="bg-black" value="">
                    Select time
                  </option>
                  <option className="bg-black" value="11:00 AM">
                    11:00 AM
                  </option>
                  <option className="bg-black" value="12:00 PM">
                    12:00 PM
                  </option>
                  <option className="bg-black" value="1:00 PM">
                    1:00 PM
                  </option>
                  <option className="bg-black" value="2:00 PM">
                    2:00 PM
                  </option>
                  <option className="bg-black" value="6:00 PM">
                    6:00 PM
                  </option>
                  <option className="bg-black" value="7:00 PM">
                    7:00 PM
                  </option>
                  <option className="bg-black" value="8:00 PM">
                    8:00 PM
                  </option>
                  <option className="bg-black" value="9:00 PM">
                    9:00 PM
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Guests *
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                >
                  <option className="bg-black" value="">
                    Number of guests
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option
                      className="bg-black"
                      key={num}
                      value={`${num} ${num === 1 ? "person" : "people"}`}
                    >
                      {num} {num === 1 ? "person" : "people"}
                    </option>
                  ))}
                  <option className="bg-black" value="9+ people (large group)">
                    9+ people (large group)
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Occasion
                </label>
                <select
                  id="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                >
                  <option className="bg-black" value="">
                    Select occasion
                  </option>
                  <option className="bg-black" value="Anniversary">
                    Anniversary
                  </option>
                  <option className="bg-black" value="Birthday">
                    Birthday
                  </option>
                  <option className="bg-black" value="Business Dinner">
                    Business Dinner
                  </option>
                  <option className="bg-black" value="Romantic Date">
                    Romantic Date
                  </option>
                  <option className="bg-black" value="Family Gathering">
                    Family Gathering
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="+234 812 345 6789"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                rows={3}
                value={formData.specialRequests}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="Any special requirements or requests..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold py-3 px-6 rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-500 shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Reserve via WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl mr-4">
                ⏰
              </span>
              Opening Hours
            </h2>
            <div className="space-y-4">
              {[
                { day: "Monday - Thursday", hours: "11:00 AM - 10:00 PM" },
                { day: "Friday - Saturday", hours: "11:00 AM - 11:00 PM" },
                { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-white/10"
                >
                  <span className="text-slate-300">{item.day}</span>
                  <span className="text-white font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl mr-4">
                ℹ️
              </span>
              Reservation Policy
            </h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                Reservations are held for 15 minutes past the booked time
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                Large groups (8+ people) require 24-hour notice
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                Special requests are subject to availability
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                Cancellations within 2 hours may incur a fee
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-8 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Need Immediate Help?
            </h3>
            <p className="text-slate-300 mb-4">
              Call us directly for last-minute reservations
            </p>
            <a
              href="tel:+2347037807541"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2 px-6 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            >
              +234 703 780 7541
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 text-center">
        <p className="text-slate-400 text-sm">
          We recommend booking at least 24 hours in advance for weekend
          reservations
        </p>
      </div>
    </div>
  );
};

export default Reservation;
