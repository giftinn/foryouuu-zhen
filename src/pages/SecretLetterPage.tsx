import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEffects } from '../utils/soundEffects';

interface SecretLetterPageProps {
  onBackToStart?: () => void;
}

const SecretLetterPage: React.FC<SecretLetterPageProps> = ({ onBackToStart }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const fullText = `hai ze, baca pelan-pelan ya wkwk.
gatau mau sedih apa seneng sama yang kamu bilang, tapi yang pasti aku seneng karna ternyata kamu masi inget aku and miss me sometimes (?) 

i'm glad that you're now happy dan bisa berinteraksi sama orang lain lagi. good job zee, kamu gapernah gagal bikin aku bangga sama kamu. jujur kaget banget pas cek id ternyata kamu balik rp lagi dan yeah, u have new (life) there maybe. 

zee, after all happens to us, trust me itu ga mengurangi rasa sayang aku ke kamu, how naif i am. i don't know why but i just wanna loving u and caring u it's enough for me. i can't fall in love with others atau punya ketertarikan sedikit pun for looking someone after u. 

kamu pasti bingung ya, sorry bikin kamu ngerasain itu, i'm here for u, whenever u need me, whenever u want to comeback to me, i'll stay for u and giving the comfort place as i can zee. so don't worry yaa... and i wanna ask u something, if u don't mind can us being us again? ga harus sekarang, i'll wait sampai kamu siap dan ga ragu, just take the time and the moment zee.
`;

  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowFinalMessage(true);
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-center space-y-4 sm:space-y-6 max-w-md mx-auto px-4">
      {/* Letter box with glow effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/90 to-pink-50/90 rounded-2xl sm:rounded-3xl border-2 border-pink-200 backdrop-blur-lg shadow-2xl relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-2">
            <div className="w-4 h-4 bg-pink-300 rounded-full" />
          </div>
          <div className="absolute top-2 right-2">
            <div className="w-3 h-3 bg-pink-300 rounded-sm rotate-45" />
          </div>
          <div className="absolute bottom-2 left-2">
            <div className="w-4 h-4 border-2 border-pink-300 rounded-full" />
          </div>
          <div className="absolute bottom-2 right-2">
            <div className="w-3 h-3 bg-gradient-to-br from-pink-300 to-rose-300 rounded-lg" />
          </div>

          {/* Letter content */}
          <div className="text-left space-y-4">
            <div className="text-sm sm:text-base text-pink-800 leading-relaxed whitespace-pre-wrap font-medium">
              {displayedText}
              {displayedText.length < fullText.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-pink-400 ml-1"
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl sm:text-2xl font-bold text-pink-800 px-4"
            >I love you forever, my baby 💞</motion.div>

            {/* Final decorative hearts */}
            <motion.div
              className="flex justify-center space-x-2 text-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="flex gap-2 justify-center">





              </div>
            </motion.div>

            {onBackToStart && (
            <button
                onClick={onBackToStart}
                className="px-4 py-2 bg-pink-600 text-white rounded-xl shadow-md hover:bg-pink-700 transition"
            >
                Back to Start
            </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default SecretLetterPage;
