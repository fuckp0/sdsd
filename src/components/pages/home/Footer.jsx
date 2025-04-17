import { useState } from 'react';

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  const [useBots, setUseBots] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setShowForm(false); // Reset form visibility after submission
    setUseBots(false); // Reset bot usage selection
  };

  return (
    <>
      <footer className="bg-white text-black font-poppins border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Social Icons Section */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 2.84 2.76 5.06 5.91 5.06s5.42-2.22 5.91-5.06c.09-.6-.39-1.14-1-1.14z"/>
                </svg>
                <h2 className="text-2xl font-bold">Wise Tech</h2>
              </div>
              <div className="flex space-x-4 mb-4">
               
               
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-lg shadow-md hover:bg-teal-500 hover:shadow-lg transition-all duration-300"
              >
                Get Started for FREE
              </button>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-purple-600">Career</a></li>
                <li><a href="#" className="hover:text-purple-600">Who We Are</a></li>
                <li><a href="#" className="hover:text-purple-600">Voice Cloning</a></li>
                <li><a href="#" className="hover:text-purple-600">Voice Universe</a></li>
                <li><a href="#" className="hover:text-purple-600">Ethics</a></li>
                <li><a href="#" className="hover:text-purple-600">Branding Guidelines</a></li>
              </ul>
            </div>

            {/* Info Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Info</h3>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-purple-600">Affiliate Partner</a></li>
                <li><a href="#" className="hover:text-purple-600">Resource Hub</a></li>
                <li><a href="#" className="hover:text-purple-600">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-600">Is it safe?</a></li>
                <li><a href="#" className="hover:text-purple-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Online Audio Tools Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Online Audio Tools</h3>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-purple-600">Text to Speech</a></li>
                <li><a href="#" className="hover:text-purple-600">Online Voice Changer</a></li>
                <li><a href="#" className="hover:text-purple-600">Online Audio Enhancer</a></li>
                <li><a href="#" className="hover:text-purple-600">Online Vocal Remover</a></li>
                <li><a href="#" className="hover:text-purple-600">Online Echo Remover</a></li>
                <li><a href="#" className="hover:text-purple-600">AI STEM Splitter</a></li>
              </ul>
            </div>
          </div>

          {/* Supported Platforms Section */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">Supported Platforms</h3>
            <div className="flex justify-center space-x-4">
              <div className="p-3 bg-gray-100 rounded-full">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 16.09V13h-2v-2h2V8.91c0-2.79 1.67-4.31 4.12-4.31.83 0 1.67.08 2.5.25v2.75h-1.67c-1.33 0-1.58.63-1.58 1.58V11h3l-.42 2h-2.58v5.09c-2.87-.86-5-3.54-5-6.09z"/>
                </svg>
              </div>
              <div className="p-3 bg-gray-100 rounded-full">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm12.71 11.29l-5-5c-.39-.39-1.02-.39-1.41 0l-5 5c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 11.41l4.29 4.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41z"/>
                </svg>
              </div>
              <div className="p-3 bg-gray-100 rounded-full">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H7v-7h3v7zm0-9H7V5h3v3zm7 9h-3v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4H7v-7h3v1.17c.85-.92 2.03-1.17 3.1-1.17 2.21 0 3.9 1.79 3.9 4v3z"/>
                </svg>
              </div>
              <div className="p-3 bg-gray-100 rounded-full">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="mt-6 px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
            >
              Book a Call
            </button>
          </div>
        </div>

        {/* Book a Call Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Book a Call</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-600 hover:text-red-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="callCenterName" className="block text-gray-600 mb-2">
                    Name of Call Center
                  </label>
                  <input
                    type="text"
                    id="callCenterName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter call center name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="numCompanies" className="block text-gray-600 mb-2">
                    Number of Compaign
                  </label>
                  <input
                    type="number"
                    id="numCompanies"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter number of companies"
                    min="1"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="campaignName" className="block text-gray-600 mb-2">
                    Name of Campaign
                  </label>
                  <input
                    type="text"
                    id="campaignName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter campaign name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Are you using bots?</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="useBots"
                        value="yes"
                        checked={useBots === true}
                        onChange={() => setUseBots(true)}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="useBots"
                        value="no"
                        checked={useBots === false}
                        onChange={() => setUseBots(false)}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>
                {useBots && (
                  <div className="mb-4">
                    <label htmlFor="numBots" className="block text-gray-600 mb-2">
                      How many bots are you using?
                    </label>
                    <input
                      type="number"
                      id="numBots"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Enter number of bots"
                      min="1"
                      required
                    />
                  </div>
                )}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </footer>

      <style jsx>{`
        .bg-opacity-50 {
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default Footer;