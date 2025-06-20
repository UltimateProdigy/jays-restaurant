import { Facebook, Instagram, Twitter } from "lucide-react"
import contactImg from "../../assets/contact.jpg"

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 py-12 px-4 bg-cover bg-center bg-no-repeat backdrop-blur-md"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${contactImg})`
            }}
        >
            <div className="max-w-6xl mx-auto text-center mb-16">
                <div className="relative">
                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent mb-6">
                        Contact Us
                    </h1>
                    <div className="absolute -top-6 -right-6 text-4xl animate-bounce">📱</div>
                    <div className="absolute -bottom-4 -left-8 text-3xl animate-pulse">💬</div>
                </div>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    We'd love to hear from you! Reach out through any of these channels
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-gray-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                        <span className="bg-gradient-to-r from-gray-500 to-yellow-500 text-white p-3 rounded-xl mr-4">📧</span>
                        Send us a message
                    </h2>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">
                                Subject
                            </label>
                            <select
                                id="subject"
                                className="w-full bg-black/5 border border-white/10 rounded-xl py-3 px-4 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            >
                                <option value="">Select a subject</option>
                                <option value="reservation">Reservation Inquiry</option>
                                <option value="feedback">Feedback</option>
                                <option value="complaint">Complaint</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-gray-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-xl hover:from-yellow-700 hover:to-yellow-700 transition-all duration-500 shadow-lg hover:shadow-gray-500/30 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <span className="bg-gradient-to-r from-gray-500 to-yellow-500 text-white p-3 rounded-xl mr-4">📍</span>
                            Visit Us
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p className="flex items-center">
                                <span className="text-yellow-400 mr-3">🏢</span>
                                123 Restaurant Street, Lagos Island, Lagos
                            </p>
                            <p className="flex items-center">
                                <span className="text-yellow-400 mr-3">⏰</span>
                                Monday - Sunday: 8:00 AM - 10:00 PM
                            </p>
                        </div>

                        <div className="mt-8 aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border border-white/10">
                            {/* Replace with your actual map embed */}
                            <div className="w-full h-64 bg-gradient-to-br from-gray-500 to-yellow-500 flex items-center justify-center">
                                <span className="text-white text-lg">Map would appear here</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <span className="bg-gradient-to-r from-gray-500 to-yellow-500 text-white p-3 rounded-xl mr-4">📞</span>
                            Contact Info
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="bg-gradient-to-r from-gray-500 to-yellow-500 p-3 rounded-xl mr-4">
                                    📱
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Phone Number</p>
                                    <p className="text-white text-lg">+234 812 345 6789</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-gradient-to-r from-gray-500 to-yellow-500 p-3 rounded-xl mr-4">
                                    ✉️
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Email Address</p>
                                    <p className="text-white text-lg">contact@jaysplace.com.ng</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-gradient-to-r from-gray-500 to-yellow-500 p-3 rounded-xl mr-4">
                                    🌐
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Social Media</p>
                                    <div className="flex space-x-4 mt-2">
                                        <a href="#" className="text-yellow-400 hover:text-pink-400 transition-colors duration-300 text-2xl">
                                            <span className="sr-only">Facebook</span><Facebook />
                                        </a>
                                        <a href="#" className="text-yellow-400 hover:text-pink-400 transition-colors duration-300 text-2xl">
                                            <span className="sr-only">Instagram</span><Instagram />
                                        </a>
                                        <a href="#" className="text-yellow-400 hover:text-pink-400 transition-colors duration-300 text-2xl">
                                            <span className="sr-only">Twitter</span><Twitter />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20 text-center">
                <div className="flex justify-center space-x-4 mb-8">
                    {[...Array(7)].map((_, i: number) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-gradient-to-r from-gray-500 to-yellow-500 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 250}ms`
                            }}
                        ></div>
                    ))}
                </div>
                <p className="text-slate-400 text-sm">
                    We typically respond within 24 hours • Open 7 days a week
                </p>
            </div>
        </div>
    )
}

export default ContactUs