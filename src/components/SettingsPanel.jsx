import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCog, FaTimes } from 'react-icons/fa';

const SettingsPanel = ({ isOpen, onClose, onSettingsChange }) => {
  const [fontSize, setFontSize] = useState('16');
  const [colorPalette, setColorPalette] = useState('dark');

  useEffect(() => {
    const storedSettings = localStorage.getItem('userSettings');
    if (storedSettings) {
      const settings = JSON.parse(storedSettings);
      setFontSize(settings.fontSize || '16');
      setColorPalette(settings.colorPalette || 'dark');
    }
  }, []);

  useEffect(() => {
    onSettingsChange({ fontSize, colorPalette });
    localStorage.setItem('userSettings', JSON.stringify({ fontSize, colorPalette }));
  }, [fontSize, colorPalette, onSettingsChange]);

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleColorPaletteChange = (e) => {
    setColorPalette(e.target.value);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900 z-50 shadow-xl shadow-black/50 border-l border-[#FF9933]/40 p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-[#FF9933] transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
              aria-label="Close settings"
            >
              <FaTimes className="text-2xl" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-white">Settings</h2>
            <div className="mb-4">
              <label htmlFor="fontSize" className="block text-gray-400 mb-2">Font Size</label>
              <select
                id="fontSize"
                value={fontSize}
                onChange={handleFontSizeChange}
                className="bg-gray-800 text-white p-2 rounded-lg w-full"
              >
                <option value="14">Small</option>
                <option value="16">Normal</option>
                <option value="18">Large</option>
                <option value="20">Extra Large</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="colorPalette" className="block text-gray-400 mb-2">Color Palette</label>
              <select
                id="colorPalette"
                value={colorPalette}
                onChange={handleColorPaletteChange}
                className="bg-gray-800 text-white p-2 rounded-lg w-full"
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SettingsPanel;
