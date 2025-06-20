import reserveIcon from "../../assets/reserve.jpg"

const Reservation = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-12 px-4bg-cover bg-center bg-no-repeat backdrop-blur-md"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${reserveIcon})`
            }}>
            <div className="max-w-6xl mx-auto text-center mb-16">
                <div className="relative">
                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6">
                        Make a Reservation
                    </h1>
                    <div className="absolute -top-6 -right-6 text-4xl animate-bounce">🍽️</div>
                    <div className="absolute -bottom-4 -left-8 text-3xl animate-pulse">🌟</div>
                </div>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Secure your table for an unforgettable dining experience
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Reservation Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl mr-4">📅</span>
                        Book Your Table
                    </h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="date" className="block text-slate-300 text-sm font-medium mb-2">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="time" className="block text-slate-300 text-sm font-medium mb-2">
                                    Time
                                </label>
                                <select
                                    id="time"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option className="bg-black" value="">Select time</option>
                                    <option className="bg-black" value="11:00">11:00 AM</option>
                                    <option className="bg-black" value="12:00">12:00 PM</option>
                                    <option className="bg-black" value="13:00">1:00 PM</option>
                                    <option className="bg-black" value="14:00">2:00 PM</option>
                                    <option className="bg-black" value="18:00">6:00 PM</option>
                                    <option className="bg-black" value="19:00">7:00 PM</option>
                                    <option className="bg-black" value="20:00">8:00 PM</option>
                                    <option className="bg-black" value="21:00">9:00 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="guests" className="block text-slate-300 text-sm font-medium mb-2">
                                    Guests
                                </label>
                                <select
                                    id="guests"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option className="bg-black" value="">Number of guests</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                        <option className="bg-black" key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                                    ))}
                                    <option className="bg-black" value="9+">9+ people (large group)</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="occasion" className="block text-slate-300 text-sm font-medium mb-2">
                                    Occasion
                                </label>
                                <select
                                    id="occasion"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option className="bg-black" value="">Select occasion</option>
                                    <option className="bg-black" value="anniversary">Anniversary</option>
                                    <option className="bg-black" value="birthday">Birthday</option>
                                    <option className="bg-black" value="business">Business Dinner</option>
                                    <option className="bg-black" value="date">Romantic Date</option>
                                    <option className="bg-black" value="family">Family Gathering</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-slate-300 text-sm font-medium mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                placeholder="+234 812 345 6789"
                            />
                        </div>

                        <div>
                            <label htmlFor="special-requests" className="block text-slate-300 text-sm font-medium mb-2">
                                Special Requests
                            </label>
                            <textarea
                                id="special-requests"
                                rows={3}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                placeholder="Any special requirements or requests..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-500 shadow-lg hover:shadow-indigo-500/30"
                        >
                            Reserve Now
                        </button>
                    </form>
                </div>

                {/* Reservation Info */}
                <div className="space-y-8">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl mr-4">⏰</span>
                            Opening Hours
                        </h2>
                        <div className="space-y-4">
                            {[
                                { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
                                { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
                                { day: 'Sunday', hours: '12:00 PM - 9:00 PM' }
                            ].map((item, index) => (
                                <div key={index} className="flex justify-between items-center py-3 border-b border-white/10">
                                    <span className="text-slate-300">{item.day}</span>
                                    <span className="text-white font-medium">{item.hours}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl mr-4">ℹ️</span>
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
                        <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Help?</h3>
                        <p className="text-slate-300 mb-4">
                            Call us directly for last-minute reservations
                        </p>
                        <a href="tel:+2348123456789" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2 px-6 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                            +234 812 345 6789
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20 text-center">
                <div className="flex justify-center space-x-4 mb-8">
                    {[...Array(7)].map((_, i: number) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 250}ms`
                            }}
                        ></div>
                    ))}
                </div>
                <p className="text-slate-400 text-sm">
                    We recommend booking at least 24 hours in advance for weekend reservations
                </p>
            </div>
        </div>
    )
}

export default Reservation