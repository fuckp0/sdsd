import { useRef, useState } from 'react';
import otherBot1 from '../../../assets/otherbot.wav';
import otherBot2 from '../../../assets/otherbot.wav';
import wiseTechBot from '../../../assets/wisetechbot.wav';

const Recordings = () => {
  const recordings = [
    { name: 'Other Bot 1', src: otherBot1, duration: '00:02/02:34' },
    { name: 'Other Bot 2', src: otherBot2, duration: '00:02/02:34' },
    { name: 'WiseTech Bot', src: wiseTechBot, duration: '00:02/02:34' },
  ];

  const audioRefs = useRef(recordings.map(() => null));
  const [playingIndex, setPlayingIndex] = useState(null);

  const playAudio = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (audio) {
        if (i === index) {
          if (audio.paused) {
            audio.play();
            setPlayingIndex(index);
          } else {
            audio.pause();
            audio.currentTime = 0;
            setPlayingIndex(null);
          }
        } else {
          audio.pause();
          audio.currentTime = 0;
          if (playingIndex === i) {
            setPlayingIndex(null);
          }
        }
      }
    });
  };

  return (
    <>
      <div className="bg-white text-black min-h-screen font-poppins">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slideUp">
            Compare Calling Bot Recordings
          </h1>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Left Side: Recordings */}
            <div className="md:w-1/2 mb-8 md:mb-0 animate-slideUp delay-200">
              {recordings.map((recording, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 mb-6 border border-purple-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 2.84 2.76 5.06 5.91 5.06s5.42-2.22 5.91-5.06c.09-.6-.39-1.14-1-1.14z"/>
                      </svg>
                    </div>
                    <button
                      onClick={() => playAudio(index)}
                      className="text-purple-600 hover:text-purple-700"
                    >
                      {playingIndex === index ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                    <audio
                      ref={(el) => (audioRefs.current[index] = el)}
                      src={recording.src}
                      preload="metadata"
                    />
                    <span className="font-medium">{recording.name}.wav</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500">{recording.duration}</span>
                    <a href={recording.src} download className="text-gray-500 hover:text-purple-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                    </a>
                    <button className="text-gray-500 hover:text-red-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Description for WiseTech Bot */}
            <div className="md:w-1/2 md:pl-8 animate-slideUp delay-400">
              <h2 className="text-3xl font-bold mb-4">Experience High-Quality Calls with WiseTech Bot</h2>
              <p className="text-gray-600 mb-4">
                WiseTech Bot delivers premium, high-quality voice interactions for seamless calling experiences. Whether you're connecting with friends, joining game lobbies, or hosting group chats, WiseTech ensures crystal-clear audio and reliable performance.
              </p>
              <p className="text-gray-600">
                Record your voice, download the audio file, and enjoy top-notch sound quality in any calling app. With WiseTech, every conversation feels professional and engaging—just press play and experience the difference.
              </p>
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

export default Recordings;