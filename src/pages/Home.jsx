import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaRandom, 
  FaNetworkWired, 
  FaCode, 
  FaArrowRight,
  FaCopy,
  FaWallet
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const contractAddress = "TBA";
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [publicKey, setPublicKey] = useState(null);
  const [signature, setSignature] = useState(null);
  const [message, setMessage] = useState('Connect to Paj33tooor');

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const features = [
    {
      icon: <FaBrain className="text-4xl text-[#FF9933]" />,
      title: "Multi-Modal Confusion",
      description: "Process text, images, and audio with entertaining results and unexpected outcomes."
    },
    {
      icon: <FaRandom className="text-4xl text-white" />,
      title: "Knowledge Mismanagement",
      description: "Build and query knowledge graphs that even we don't understand."
    },
    {
      icon: <FaNetworkWired className="text-4xl text-[#138808]" />,
      title: "Swarm-Level Chaos",
      description: "Participate in swarm consensus (which is rarely consensual)."
    },
    {
      icon: <FaCode className="text-4xl text-[#FF9933]" />,
      title: "Blockchain Befuddlement",
      description: "Interact with Solana and Ethereum through inexplicable transactions."
    }
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopied(false);
    }
  };

  const connectWallet = async () => {
    try {
      const provider = window.phantom?.solana;
      if (!provider) {
        alert("Phantom wallet not found. Please install Phantom wallet.");
        return;
      }
      const resp = await provider.connect();
      setPublicKey(resp.publicKey.toString());
      const encodedMessage = new TextEncoder().encode(message);
      const signedMessage = await provider.signMessage(encodedMessage);
      setSignature(signedMessage.signature);
    } catch (err) {
      console.error('Failed to connect wallet: ', err);
      setPublicKey(null);
      setSignature(null);
    }
  };

  return (
    <div className={`container mx-auto px-4 py-12 ${isDarkMode ? '' : 'text-gray-800'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-7xl font-bold mb-6 tech-text shimmer ${isDarkMode ? 'gradient-text' : 'gradient-text light'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            textShadow: isHovered ? '0 0 20px rgba(255, 153, 51, 0.5)' : 'none',
            transition: 'text-shadow 0.3s ease-in-out',
          }}
        >
          Paj33tooor
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`text-xl md:text-2xl max-w-3xl mx-auto mb-4 ${isDarkMode ? 'text-[#FF9933]' : 'text-[#138808]'}`}
        >
          The World's First Satirical AI, Proudly Powered by Actual Indians
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`text-lg max-w-2xl mx-auto mb-8 font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Embodying modular nonsense, autonomous indecision, and the capability to sort-of handle tasks
        </motion.p>
        <motion.button
          onClick={() => navigate('/agents')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className={`px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gradient-to-r from-[#FF9933] to-[#138808] text-white hover:shadow-[#FF9933]/20' : 'bg-gradient-to-r from-[#138808] to-[#FF9933] text-black hover:shadow-[#138808]/20'}`}
        >
          View Our Agents <FaArrowRight className="text-sm" />
        </motion.button>
      </motion.div>

      <Carousel />

      {/* Contract Address Section */}
      <div className="text-center mb-16">
        <div className={`inline-flex items-center backdrop-blur-sm rounded-xl p-4 border border-[#FF9933]/20 hover:border-[#FF9933]/40 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-200/50'}`}>
          <span className={`mr-2 font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Contract Address:</span>
          <span className={`font-medium select-all ${isDarkMode ? 'text-white' : 'text-black'}`}>{contractAddress}</span>
          <button
            onClick={handleCopy}
            className={`ml-2 transition-colors duration-300 focus:outline-none ${isDarkMode ? 'text-gray-400 hover:text-[#FF9933]' : 'text-gray-600 hover:text-[#138808]'}`}
            aria-label="Copy contract address"
          >
            <FaCopy className="text-xl" />
          </button>
          {copied && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="ml-2 text-green-500 text-sm font-medium"
            >
              Copied!
            </motion.span>
          )}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <motion.a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gradient-to-r from-[#FF9933] to-[#138808] text-white hover:shadow-[#FF9933]/20' : 'bg-gradient-to-r from-[#138808] to-[#FF9933] text-black hover:shadow-[#138808]/20'}`}
          >
            pump.fun
          </motion.a>
          <motion.a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gradient-to-r from-[#138808] to-[#FF9933] text-white hover:shadow-[#138808]/20' : 'bg-gradient-to-r from-[#FF9933] to-[#138808] text-black hover:shadow-[#FF9933]/20'}`}
          >
            Dexscreener
          </motion.a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`feature-card cursor-pointer hover:scale-105 transition-transform duration-300 ${isDarkMode ? 'animate-border-glow' : 'feature-card light'}`}
            onClick={() => alert(`You clicked on ${feature.title}!`)}
          >
            <motion.div 
              className="mb-4"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {feature.icon}
            </motion.div>
            <h3 className={`text-xl font-bold mb-2 tech-text ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {feature.title}
            </h3>
            <p className={`font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 text-center"
      >
        <div className={`rounded-xl p-8 max-w-4xl mx-auto shimmer cursor-pointer hover:scale-105 transition-transform duration-300 ${isDarkMode ? 'bg-gradient-to-r from-[#FF9933]/10 to-[#138808]/10' : 'bg-gradient-to-r from-[#138808]/50 to-[#FF9933]/50 shadow-lg border border-gray-300'}`}
          onClick={() => alert('You clicked on the Core Capabilities section!')}
        >
          <h2 className={`text-2xl font-bold mb-4 tech-text ${isDarkMode ? 'gradient-text' : 'gradient-text light'}`}>
            Core Capabilities
          </h2>
          <ul className={`space-y-2 font-light text-white`}>
            <li>• Reinforcement Forgetting: Self-learn how to unoptimize task execution</li>
            <li>• IPFS (Inefficient File Protocol System): Store and retrieve files but lose track of why</li>
            <li>• Distributed Task Mismanagement: Ensure no task is left unmanaged—or managed correctly</li>
            <li>• Collaboration Chaos: Enable inter-agent communication that often results in arguments</li>
          </ul>
        </div>
        <p className={`text-sm italic mt-16 ${isDarkMode ? 'text-[#138808]/80' : 'text-[#FF9933]/80'}`}>
          Disclaimer: This model is not responsible for your lost brain cells, broken friendships, 
          or confusion about life. It is, however, responsible for reminding you that India is a 
          vibe—and sometimes, that's all you need.
        </p>
      </motion.div>
      
      <motion.div className="text-center mt-8">
        <motion.button
          onClick={() => navigate('/preview')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gradient-to-r from-[#138808] to-[#FF9933] text-white hover:shadow-[#138808]/20' : 'bg-gradient-to-r from-[#FF9933] to-[#138808] text-black hover:shadow-[#FF9933]/20'}`}
        >
          Try Our Chatbot <FaArrowRight className="text-sm" />
        </motion.button>
      </motion.div>
      <div className="text-center mt-8">
        <motion.button
          onClick={connectWallet}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gradient-to-r from-[#FF9933] to-[#138808] text-white hover:shadow-[#FF9933]/20' : 'bg-gradient-to-r from-[#FF9933] to-[#138808] text-black hover:shadow-[#FF9933]/20'}`}
        >
          <FaWallet className="text-sm" /> Connect Wallet
        </motion.button>
        {publicKey && (
          <div className="mt-4">
            <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Public Key: <span className="font-normal">{publicKey}</span>
            </p>
            {signature && (
              <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Signature: <span className="font-normal">{signature}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
