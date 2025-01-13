import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter, FaGithub, FaBook, FaBars, FaTimes, FaStream, FaComments, FaRobot, FaSun, FaMoon, FaWallet, FaCog } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SettingsPanel from './SettingsPanel';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [time, setTime] = useState(new Date());
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [userSettings, setUserSettings] = useState({
    fontSize: '16',
    colorPalette: 'dark',
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.body.style.fontSize = `${userSettings.fontSize}px`;
  }, [isDarkMode, userSettings.fontSize]);

  useEffect(() => {
    if (userSettings.colorPalette === 'light') {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, [userSettings.colorPalette]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleSettingsChange = (settings) => {
    setUserSettings(settings);
  };

  const formatTime = (date) => {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return new Intl.DateTimeFormat('en-IN', options).format(date);
  };

  return (
    <nav className={`backdrop-blur-sm ${isDarkMode ? 'bg-black/90' : 'bg-white/80'} border-b border-[#FF9933]/40 sticky top-0 z-50`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {formatTime(time)} IST
        </div>
        <Link to="/" className={`font-bold text-xl hover:text-[#FF9933]/80 transition-colors duration-300 ${isDarkMode ? 'text-[#FF9933]' : 'text-[#138808]'}`}>
          Paj33tooor
        </Link>

        {/* Hamburger Menu Button */}
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleMenu} 
            className={`transition-colors duration-300 z-50 p-2 rounded-lg hover:bg-[#FF9933]/20 ${isDarkMode ? 'text-[#FF9933] hover:text-white' : 'text-[#138808] hover:text-black'}`}
            aria-label="Toggle menu"
          >
            <FaBars className="text-2xl" />
          </button>
          <button
            onClick={toggleSettings}
            className={`transition-colors duration-300 z-50 p-2 rounded-lg hover:bg-[#FF9933]/20 ${isDarkMode ? 'text-[#FF9933] hover:text-white' : 'text-[#138808] hover:text-black'}`}
            aria-label="Open settings"
          >
            <FaCog className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`fixed inset-0 z-40 backdrop-blur-sm ${isDarkMode ? 'bg-black/80' : 'bg-white/80'}`}
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed top-0 right-0 h-full w-80 z-50 shadow-xl shadow-black/50 border-l border-[#FF9933]/40 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className={`absolute top-4 right-4 transition-colors duration-300 p-2 rounded-lg hover:bg-[#FF9933]/20 ${isDarkMode ? 'text-[#FF9933] hover:text-white' : 'text-[#138808] hover:text-black'}`}
                aria-label="Close menu"
              >
                <FaTimes className="text-2xl" />
              </button>

              <div className="flex flex-col p-8 gap-8">
                {/* Menu Header */}
                <div className={`font-bold text-2xl mb-4 ${isDarkMode ? 'text-[#FF9933]' : 'text-[#138808]'}`}>
                  Menu
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-6">
                  <Link
                    to="/agents"
                    onClick={toggleMenu}
                    className={`transition-colors duration-300 text-lg flex items-center gap-2 hover:bg-[#FF9933]/10 p-2 rounded-lg ${isDarkMode ? 'text-white hover:text-[#FF9933]' : 'text-black hover:text-[#138808]'} ${
                      location.pathname === '/agents' ? (isDarkMode ? 'text-[#FF9933] bg-[#FF9933]/10' : 'text-[#138808] bg-[#138808]/10') : ''
                    }`}
                  >
                    Agents
                  </Link>
                  <Link
                    to="/preview"
                    onClick={toggleMenu}
                    className={`transition-colors duration-300 text-lg flex items-center gap-2 hover:bg-[#FF9933]/10 p-2 rounded-lg ${isDarkMode ? 'text-white hover:text-[#FF9933]' : 'text-black hover:text-[#138808]'} ${
                      location.pathname === '/preview' ? (isDarkMode ? 'text-[#FF9933] bg-[#FF9933]/10' : 'text-[#138808] bg-[#138808]/10') : ''
                    }`}
                  >
                    Preview
                  </Link>
                  <Link
                    to="/solana-wallet"
                    onClick={toggleMenu}
                    className={`transition-colors duration-300 text-lg flex items-center gap-2 hover:bg-[#FF9933]/10 p-2 rounded-lg ${isDarkMode ? 'text-white hover:text-[#FF9933]' : 'text-black hover:text-[#138808]'} ${
                      location.pathname === '/solana-wallet' ? (isDarkMode ? 'text-[#FF9933] bg-[#FF9933]/10' : 'text-[#138808] bg-[#138808]/10') : ''
                    }`}
                  >
                    <FaWallet className="text-xl" />
                    Paj33tooor Wallet Tracker
                  </Link>

                  {/* Coming Soon Section */}
                  <div className="border-t border-[#FF9933]/20 pt-6 space-y-4">
                    <div className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-[#FF9933]' : 'text-[#138808]'}`}>Coming Soon</div>
                    <button
                      className={`text-left text-lg flex items-center gap-2 w-full group hover:bg-gray-800/50 p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} cursor-not-allowed`}
                      disabled
                    >
                      <FaStream className={`text-xl ${isDarkMode ? 'text-[#FF9933]' : 'text-[#138808]'}`} />
                      Live Stream
                      <span className={`text-xs px-2 py-1 rounded ml-auto ${isDarkMode ? 'bg-[#FF9933]/20 text-[#FF9933]' : 'bg-[#138808]/20 text-[#138808]'}`}>Beta</span>
                    </button>
                    <button
                      className={`text-left text-lg flex items-center gap-2 w-full group hover:bg-gray-800/50 p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} cursor-not-allowed`}
                      disabled
                    >
                      <FaComments className={`text-xl ${isDarkMode ? 'text-[#FF9933]' : 'text-[#138808]'}`} />
                      1:1 Chat
                      <span className={`text-xs px-2 py-1 rounded ml-auto ${isDarkMode ? 'bg-[#FF9933]/20 text-[#FF9933]' : 'bg-[#138808]/20 text-[#138808]'}`}>Soon</span>
                    </button>
                    <button
                      className={`text-left text-lg flex items-center gap-2 w-full group hover:bg-gray-800/50 p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} cursor-not-allowed`}
                      disabled
                    >
                      <FaRobot className={`text-xl ${isDarkMode ? 'text-[#FF9933]' : 'text-[#138808]'}`} />
                      Custom Agent
                      <span className={`text-xs px-2 py-1 rounded ml-auto ${isDarkMode ? 'bg-[#FF9933]/20 text-[#FF9933]' : 'bg-[#138808]/20 text-[#138808]'}`}>Soon</span>
                    </button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-auto border-t border-[#FF9933]/20 pt-6">
                  <div className={`mb-4 text-sm font-semibold ${isDarkMode ? 'text-[#FF9933]' : 'text-[#138808]'}`}>Follow Us</div>
                  <div className="flex gap-6">
                    <a
                      href="https://x.com/pajeet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 p-2 rounded-lg hover:bg-[#FF9933]/10 ${isDarkMode ? 'text-white hover:text-[#FF9933]' : 'text-black hover:text-[#138808]'}`}
                    >
                      <FaTwitter className="text-2xl" />
                    </a>
                    <a
                      href="https://paj33tooor-exe.gitbook.io/paj33tooor-gitbook/key-functions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 p-2 rounded-lg hover:bg-[#FF9933]/10 ${isDarkMode ? 'text-white hover:text-[#FF9933]' : 'text-black hover:text-[#138808]'}`}
                    >
                      <FaBook className="text-2xl" />
                    </a>
                    <a
                      href="https://github.com/pajeetoor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 p-2 rounded-lg hover:bg-[#FF9933]/10 ${isDarkMode ? 'text-white hover:text-[#FF9933]' : 'text-black hover:text-[#138808]'}`}
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <button
        onClick={toggleDarkMode}
        className={`absolute top-4 left-4 transition-colors duration-300 p-2 rounded-lg hover:bg-[#FF9933]/20 z-50 ${isDarkMode ? 'text-white hover:text-[#FF9933]' : 'text-black hover:text-[#138808]'}`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
      </button>
      <SettingsPanel isOpen={isSettingsOpen} onClose={toggleSettings} onSettingsChange={handleSettingsChange} />
    </nav>
  );
}

export default Navbar;
