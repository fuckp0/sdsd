const WhyChooseUs = () => {
    return (
      <>
        <div className="bg-white text-black min-h-screen font-poppins">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slideUp">
              Why Choose Us
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              {/* Left Side: Other Bots */}
              <div className="md:w-1/2 mb-8 md:mb-0 animate-slideUp delay-200">
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <span className="mr-2">
                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </span>
                  Other Bots
                </h2>
                <ul className="text-gray-600 space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    Poor audio quality with frequent distortions and background noise during calls.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    Limited voice customization, making interactions feel robotic and unnatural.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    Inconsistent performance, often leading to dropped calls or lagging audio.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    Lack of adaptability, unable to adjust tone or style for different use cases.
                  </li>
                </ul>
              </div>
  
              {/* Right Side: Our Bots (WiseTech Bot) */}
              <div className="md:w-1/2 md:pl-8 animate-slideUp delay-400">
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <span className="mr-2">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 12 6.48 12 12s-5.52 10-10 10-10-4.48-10-10S6.48 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  Our Bots (WiseTech Bot)
                </h2>
                <ul className="text-gray-600 space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Best-in-class calling with crystal-clear audio for seamless communication.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Human-like voice interactions that feel natural and engaging.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Dynamic voice adjustments tailored to specific campaigns or contexts.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Versatile usage for game lobbies, group chats, or professional calls.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp {
            animation: slideUp 0.8s ease-in-out;
          }
          .delay-200 { animation-delay: 200ms; }
          .delay-400 { animation-delay: 400ms; }
        `}</style>
      </>
    );
  };
  
  export default WhyChooseUs;