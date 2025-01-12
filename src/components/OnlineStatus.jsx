import React from 'react';
import { motion } from 'framer-motion';

const OnlineStatus = ({ isOnline }) => {
  return (
    <div className="absolute top-4 right-4 flex items-center gap-2">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ 
          scale: isOnline ? [1, 1.2, 1] : 1,
          opacity: isOnline ? 1 : 0.5
        }}
        transition={{ 
          duration: 1,
          repeat: isOnline ? Infinity : 0,
          repeatDelay: 1
        }}
        className={`status-dot ${isOnline ? 'online' : 'offline'}`}
      />
      <span className={`text-xs font-medium ${
        isOnline ? 'text-green-500' : 'text-gray-400'
      }`}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

export default OnlineStatus;
