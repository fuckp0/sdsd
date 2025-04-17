import React from "react";

const Homepage = ({ scrollToSection }) => {
  // Map of navbar items to section IDs
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "aboutus" },
    { name: "Features", id: "features" },
    { name: "Audios", id: "recordings" },
    { name: "Price", id: "whychooseus" }, // Assuming "Price" maps to WhyChooseUs; adjust if there's a separate Price section
    { name: "Faq", id: "faq" }, // Adjust if FAQ section is added later
  ];

  return (
    <>
      {/* White background theme */}
      <div className="bg-white text-black min-h-screen" id="home">
        {/* Navigation Bar with White Theme and Hover Line Effect */}
        <nav className="flex justify-between items-center p-6 bg-white animate-fadeIn">
          <div className="text-2xl font-bold">WiseTech</div>
          <div className="space-x-6">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-black hover:text-purple-600 transition-colors duration-300 animate-slideIn delay-${
                  index * 100
                } group`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full group-hover:opacity-100 opacity-0"></span>
              </button>
            ))}
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full flex items-center transform hover:scale-105 transition-transform duration-300">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Download
          </button>
        </nav>

        {/* Hero Section with White Theme */}
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-slideUp">
              WiseTech AI Solutions
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-slideUp delay-200">
              Unlock the power of AI with WiseTech's advanced calling bots and
              intelligent features. Automate your business communication, enhance
              customer experiences, and drive efficiency—all with a single click.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transform hover:scale-105 transition-transform duration-300 animate-slideUp delay-400">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-in-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-in-out;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </>
  );
};

export default Homepage;