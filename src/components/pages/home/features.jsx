const Features = () => {
    const features = [
      {
        title: "Adjustable Audio",
        description: "Fine-tune audio settings to match your preferences, ensuring crystal-clear sound for every interaction.",
        icon: (
          <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 2.84 2.76 5.06 5.91 5.06s5.42-2.22 5.91-5.06c.09-.6-.39-1.14-1-1.14z"/>
          </svg>
        ),
      },
      {
        title: "Campaign Adaptability",
        description: "Easily adjust voice tone and style to suit specific campaigns, making every interaction more impactful.",
        icon: (
          <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        ),
      },
      {
        title: "Real-Time Calling",
        description: "Experience seamless real-time calling with zero lag, ensuring smooth and natural conversations.",
        icon: (
          <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 14h-4v2h4v2H6v-2h4v-2H6v-2h4v-2H6V8h4V6H6V4h12v12z"/>
          </svg>
        ),
      },
      {
        title: "Multiple Voice Integration",
        description: "Integrate multiple voices into a single interaction, perfect for diverse and engaging conversations.",
        icon: (
          <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        ),
      },
    ];
  
    return (
      <>
        <div className="bg-white text-black min-h-screen font-poppins">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slideUp">
              Features of Our Bots
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp delay-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 border border-purple-300 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:bg-purple-50 transition-all duration-300 text-center"
                >
                  <div className="mb-4 transform hover:rotate-12 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
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
        `}</style>
      </>
    );
  };
  
  export default Features;