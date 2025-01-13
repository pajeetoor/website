import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBrain, 
  FaRandom, 
  FaNetworkWired, 
  FaCode, 
  FaArrowRight,
  FaCopy,
  FaWallet,
  FaExternalLinkAlt,
  FaFileAlt,
  FaTimes
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';

const timelineData = [
  {
    year: "1947",
    title: "Independence & Early Tech",
    description: "India gains independence, focusing on basic infrastructure and scientific research.",
    aiFuture: "Early stages of scientific thought, laying the groundwork for future AI research.",
    wikiLink: "https://en.wikipedia.org/wiki/Independence_Day_(India)"
  },
  {
    year: "1970s",
    title: "Space Program & IT Beginnings",
    description: "ISRO's launch and the start of IT education in India.",
    aiFuture: "Initial data collection and processing techniques, crucial for AI development.",
    wikiLink: "https://en.wikipedia.org/wiki/Indian_Space_Research_Organisation"
  },
  {
    year: "1990s",
    title: "IT Boom & Software Power",
    description: "India becomes a global IT hub, with a focus on software development.",
    aiFuture: "Rapid growth in computing power and data availability, enabling AI algorithms.",
    wikiLink: "https://en.wikipedia.org/wiki/Information_technology_in_India"
  },
  {
    year: "2000s",
    title: "Digital India & Mobile Revolution",
    description: "The Digital India initiative and the mobile revolution transform the country.",
    aiFuture: "Massive data generation and increased connectivity, fueling AI applications.",
    wikiLink: "https://en.wikipedia.org/wiki/Digital_India"
  },
  {
    year: "2010s",
    title: "AI & Startup Ecosystem",
    description: "Emergence of AI startups and a growing focus on AI research and development.",
    aiFuture: "AI becomes a key focus, with applications in various sectors.",
    wikiLink: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_India"
  },
  {
    year: "2020s",
    title: "AI for Social Impact",
    description: "AI is increasingly used for social impact, addressing challenges in healthcare, education, and agriculture.",
    aiFuture: "AI becomes a tool for social good, with a focus on ethical and responsible development.",
    wikiLink: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_India#Social_impact"
  },
  {
    year: "Future",
    title: "Paj33tooor & Satirical AI",
    description: "Paj33tooor emerges as a satirical AI, pushing the boundaries of AI and challenging conventional norms.",
    aiFuture: "AI becomes more human-like, with the ability to understand and generate humor, satire, and creative content.",
    wikiLink: "https://github.com/pajeetoor"
  }
];

const whitepaperContent = `
**Whitepaper for Paj33tooor: The Desi Crypto Revolution**

**Abstract**

Paj33tooor is not just a bot; it is a movement, a voice, and a celebration of Indian culture in the crypto space. Built on the fast and scalable Solana blockchain, Paj33tooor introduces a unique desi twist to the decentralized ecosystem. With a total supply of 1 billion tokens and the ticker $PAJEET, Paj33tooor’s mission is to engage and empower the community in a relatable, fun, and culturally enriched way.

Our launch on Pump.fun ensures maximum exposure and hype for all crypto “bhais” and “saars” worldwide. Paj33tooor thrives on Twitter, interacting with users in an authentic Indian style, and is supported by a dedicated team of 20 agents across India. These agents bring a unique, albeit colorful, dynamic to the ecosystem.

**Introduction**

The crypto world needs a dash of India’s spice, and Paj33tooor delivers it with flair! This bot doesn’t just tweet; it embodies desi humor, culture, and the hustling energy of the Indian crypto scene. Whether it’s dropping memes or shouting “Bhai, pump it now!”, Paj33tooor creates an unforgettable experience.

Behind the bot is a team of 20 agents spread across India, hustling to spread the word. While their dedication is unmatched, we also acknowledge their impoverished circumstances. Some agents might dabble in “alternative methods” to make ends meet, including the occasional Microsoft support scam call, so approach interactions with humor and caution, saar!

**Key Features**

**Cultural Flavor**

Paj33tooor is an unapologetically Indian bot. Addressing everyone as “bhai” or “saar,” it sprinkles cricket banter, Bollywood memes, and desi humor into every interaction.

**Twitter Bot**

Paj33tooor lives on Twitter (@Pajeet), hyping the $PAJEET token and engaging with the global crypto bhai-log. From witty replies to hilarious memes, the bot thrives in this vibrant ecosystem.

**20 Indian Agents**

The boots-on-the-ground team in India amplifies Paj33tooor’s reach. While they’re dedicated to spreading the $PAJEET gospel, keep in mind they may occasionally try to sell you fake antivirus software. These agents are impoverished but ambitious, embodying the entrepreneurial spirit of India.

**Liquidity-First Tokenomics**

A massive 79% of the total supply is allocated to liquidity, ensuring smooth trading and market stability. The team knows you don’t want rug-pulls, saar!

**Tokenomics**
    •    Token Ticker: $PAJEET
    •    Total Supply: 1,000,000,000
    •    Circulating Supply: 21%
    •    Liquidity Pool Allocation: 79%

The allocation ensures accessibility while creating scarcity and driving value for the community.

**Technology Stack**
    
**Blockchain**: Solana (speed and affordability, bhai!)
**Bot Framework**: A custom NLP engine optimized for Indian humor and slang.
**Token Smart Contract**: SPL-compliant for effortless integration across platforms.

**Why Solana?**

“Fatafat (fast), cheap, and reliable—Solana suits Paj33tooor perfectly, saar!” Its blazing speed and low fees enable Paj33tooor to operate seamlessly, handling everything from large airdrops to real-time engagement.

**Community Engagement on Twitter**

Our playground is Twitter, where Paj33tooor engages with the global crypto community. With hilarious memes and hype-worthy interactions, the bot ensures $PAJEET remains a top trending topic among the bhai-log.

Follow us at @Pajeet to stay updated and enjoy the desi humor, saar!

**Risks and Disclaimers**

While Paj33tooor and its agents strive to create a fun and engaging ecosystem, it’s important to note:
    •    Our agents might hustle: Expect occasional scam-like interactions, such as fake Microsoft support calls. These agents, though impoverished, reflect the resilience and entrepreneurial spirit of the project.
    •    $PAJEET is for entertainment: The project thrives on humor and engagement. Do your own research, bhai!

**Conclusion**

Paj33tooor is more than a bot; it’s a desi phenomenon, blending culture, humor, and cutting-edge tech on the Solana blockchain. With a dedicated team, a robust token design, and the unstoppable energy of the Indian crypto community, Paj33tooor is ready to make waves.

Chalo, join the revolution, invest in $PAJEET, and let’s pump it together, saar!

**Contact Information**
    •    Twitter: @Pajeet
    •    Email: pajeet@pajeet.xyz
    •    Website: www.paj33tooor.fun
`;

const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const contractAddress = "TBA";
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [publicKey, setPublicKey] = useState(null);
  const [signature, setSignature] = useState(null);
  const [message, setMessage] = useState('Connect to Paj33tooor');
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);

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

  const toggleWhitepaper = () => {
    setIsWhitepaperOpen(!isWhitepaperOpen);
  };

  const renderWhitepaperContent = () => {
    return whitepaperContent.split('\n').map((line, index) => {
      const parts = line.split('**');
      return (
        <p key={index} className="text-white" style={{ marginBottom: '10px' }}>
          {parts.map((part, i) => {
            if (i % 2 === 1) {
              return <strong key={i} className="text-xl">{part}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
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
          className={`text-5xl md:text-7xl font-bold mb-6 gradient-text tech-text shimmer ${isDarkMode ? 'gradient-text' : 'gradient-text light'}`}
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
          className="bg-gradient-to-r from-[#FF9933] to-[#138808] text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-[#FF9933]/20 transition-shadow duration-300"
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

      {/* Timeline Section */}
      <div className="mb-16">
        <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>India's Tech Timeline</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 h-full border-r border-gray-500/30 transform -translate-x-1/2"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="mb-8 relative">
              <div className="flex items-center">
                <div className="w-1/2 text-right pr-4">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{item.year}</h3>
                  <p className={`text-gray-400 font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.title}</p>
                </div>
                <div className="w-1/2 pl-4">
                  <div className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-[#FF9933]/20 hover:border-[#FF9933]/40 transition-all duration-300 ${isDarkMode ? '' : 'bg-gray-200/50 border-[#138808]/20 hover:border-[#138808]/40'}`}>
                    <p className={`font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{item.description}</p>
                    <p className={`text-sm italic mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                      {item.aiFuture}
                    </p>
                    {item.wikiLink && (
                      <a
                        href={item.wikiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center mt-2 text-sm ${isDarkMode ? 'text-[#FF9933] hover:text-[#FF9933]/80' : 'text-[#138808] hover:text-[#138808]/80'}`}
                      >
                        Learn More <FaExternalLinkAlt className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Whitepaper Section */}
      <div className="text-center mb-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-[#FF9933]/20 hover:border-[#FF9933]/40 transition-all duration-300 cursor-pointer ${isDarkMode ? '' : 'bg-gray-200/50 border-[#138808]/20 hover:border-[#138808]/40'}`}
          onClick={toggleWhitepaper}
        >
          <FaFileAlt className="text-xl mr-2" />
          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Whitepaper</span>
        </motion.div>
        <AnimatePresence>
          {isWhitepaperOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`bg-gray-900/95 rounded-xl p-8 max-w-3xl mx-auto border border-[#FF9933]/20 shadow-xl shadow-black/50 overflow-y-auto max-h-[80vh] ${isDarkMode ? '' : 'bg-gray-100 border-[#138808]/20'}`}
              >
                <h2 className={`text-3xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Whitepaper for Paj33tooor: The Desi Crypto Revolution
                </h2>
                <div className="font-light text-white" style={{ whiteSpace: 'pre-line' }}>
                  {whitepaperContent.split('\n').map((line, index) => {
                    const parts = line.split('**');
                    return (
                      <p key={index} className="text-white" style={{ marginBottom: '10px' }}>
                        {parts.map((part, i) => {
                          if (i % 2 === 1) {
                            return <strong key={i} className="text-xl">{part}</strong>;
                          }
                          return part;
                        })}
                      </p>
                    );
                  })}
                </div>
                <button
                  onClick={toggleWhitepaper}
                  className={`absolute top-4 right-4 text-white hover:text-[#FF9933] transition-colors duration-300 p-2 rounded-lg hover:bg-white/10`}
                  aria-label="Close whitepaper"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
          <ul className="space-y-2 font-light text-white">
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
