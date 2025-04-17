import aboutImage from '../../../assets/robot.jpg';

const AboutUs = () => {
  return (
    <>
      {/* White background theme */}
      <div className="bg-white text-black min-h-screen flex items-center justify-center py-16">
        <div className="max-w-6xl w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: About Us and Company Details */}
          <div className="md:w-1/2 mb-8 md:mb-0 animate-slideUp">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <div>
              <p className="text-gray-600 text-lg mb-6">
                WiseTech leads the AI industry with powerful calling bots and automation tools that transform how businesses connect. We use cutting-edge tech like NLP and machine learning to simplify customer support and sales outreach, helping companies of all sizes succeed with ease.
              </p>
            </div>
          </div>

          {/* Right Side: Rounded Image */}
          <div className="md:w-1/2 flex justify-center animate-slideUp delay-200">
            <div
              className="w-full max-w-md h-96 bg-cover bg-center rounded-2xl shadow-lg"
              style={{
                backgroundImage: `url(${aboutImage})`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-in-out;
        }
        .delay-200 {
          animation-delay: 200ms;
        }

        /* Ensure the image container is responsive */
        @media (max-width: 768px) {
          .max-w-md {
            max-width: 100%; /* Make the image full width on smaller screens */
          }
          .h-96 {
            height: auto; /* Allow the image to adjust height dynamically */
          }
        }
      `}</style>
    </>
  );
};

export default AboutUs;