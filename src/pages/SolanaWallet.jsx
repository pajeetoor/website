import React from 'react';
import { motion } from 'framer-motion';

function SolanaWallet() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">Pajeet Wallet Tracker</h1>
        <p className="text-center text-gray-400 mb-8">Watch paj33tooor trade tokens artificially via our specialized algorithm</p>
        <div className="text-center">
          <motion.a
            href="https://solscan.io/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#138808] to-[#FF9933] text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-[#138808]/20 transition-shadow duration-300 w-fit"
          >
            View on Solscan
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default SolanaWallet;
