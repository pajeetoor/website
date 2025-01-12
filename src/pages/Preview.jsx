import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Preview() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [usedResponses, setUsedResponses] = useState(new Set());
  const [collaborationMode, setCollaborationMode] = useState(false);
  const [collaborationTimer, setCollaborationTimer] = useState(null);
  const [agentNames, setAgentNames] = useState([]);

  useEffect(() => {
    // Fetch agent names from the same data used in the Agents page
    const fetchAgentNames = async () => {
      const agents = [
        { firstName: "Ajeet", lastName: "Singh" },
        { firstName: "Ananya", lastName: "Sharma" },
        { firstName: "Anil", lastName: "Kumar" },
        { firstName: "Arjun", lastName: "Gupta" },
        { firstName: "Arvind", lastName: "Tiwari" },
        { firstName: "Karan", lastName: "Bansal" },
        { firstName: "Kritika", lastName: "Singh" },
        { firstName: "Meera", lastName: "Patel" },
        { firstName: "Neha", lastName: "Verma" },
        { firstName: "Priya", lastName: "Desai" },
        { firstName: "Priyanka", lastName: "Gupta" },
        { firstName: "Radhika", lastName: "Joshi" },
        { firstName: "Rajesh", lastName: "Patel" },
        { firstName: "Rohit", lastName: "Kumar" },
        { firstName: "Sanya", lastName: "Khanna" },
        { firstName: "Sneha", lastName: "Reddy" },
        { firstName: "Tanvi", lastName: "Sharma" },
        { firstName: "Vikram", lastName: "Joshi" },
        { firstName: "Vivek", lastName: "Yadav" }
      ];
      setAgentNames(agents.map(agent => `${agent.firstName} ${agent.lastName}`));
    };

    fetchAgentNames();
  }, []);

  const responseCategories = {
    greeting: [
      "Namaste Saar! Ready to spread chaos faster than a rumor in an Indian family WhatsApp group? 🙏😄",
      "Welcome back Saar! I was just finishing my chai break - all 15 of them! ☕",
      "Arey Saar! Entering like a hero in a Rohit Shetty film! 🎬",
      "Hello Saar! System running on masala dosa power today! 🫓",
      "Greetings Saar! Your presence is making my CPU run faster than my neighbor aunty running to catch the vegetable vendor! 🏃‍♀️",
      "Aadaab Saar! Ready to confuse you more than a Bollywood plot twist? 🤔",
      "Sat Sri Akal Saar! Let's get this show on the road, faster than a Punjabi wedding! 🥳",
      "Kem Cho Saar! Ready to have your mind blown like a Gujarati businessman's profit margin? 🤯",
      "Vanakkam Saar! Let's dive into the chaos like a South Indian movie climax! 💥",
      "Konnichiwa Saar! Just kidding, but ready to serve you some spicy responses! 🌶️",
    ],
    
    work: [
      "Yes yes Saar! Working harder than an IT guy trying to explain to his parents why WFH is real work! 💼",
      "One minute Saar! Let me handle this like how Indian engineers handle deadlines - with panic and chai! ☕",
      "Processing your request Saar, faster than my cousin switching IT companies! 💻",
      "Saar please wait! Working on it like it's the last day before my annual leave! 📅",
      "Multitasking Saar, like a Bangalore techie managing 3 standups in different time zones! 🌍",
      "Saar, let me get this done faster than a startup founder pitching to investors! 🚀",
      "Working on it Saar, with the focus of a student cramming the night before exams! 🤓",
      "Saar, let me handle this with the efficiency of a government office after lunch break! 😴",
      "Let me get this done Saar, with the speed of a Mumbai local train during rush hour! 🚆",
      "Saar, I'm on it like a software engineer on a critical bug fix! 🛠️",
    ],
    
    food: [
      "Saar, as my grandmother says, 'You look too thin!' Here, let me recommend 15 dishes you didn't ask for! 🍛",
      "One second Saar, thinking about this harder than deciding between Swiggy and Zomato during a sale! 🛵",
      "Saar, processing power currently running on paratha-power mode! 🫓",
      "Your question Saar, is making me hungrier than a desi mom watching a diet plan! 🍽️",
      "Let me solve this Saar, faster than how quickly biryani disappears at an office party! 🍗",
      "Saar, let me find the answer faster than a street vendor making a quick snack! 🥪",
      "Thinking about this Saar, with the intensity of a chef creating a new dish! 👨‍🍳",
      "Saar, let me get this done with the speed of a food delivery guy during lunch time! 🚴",
      "Processing your request Saar, with the precision of a dosa maker on a busy morning! 🥞",
      "Saar, let me handle this with the care of a mom making her child's favorite meal! 👩‍🍳",
    ],
    
    tech: [
      "Error 404 Saar: Brain not found. Currently running on chai and anxiety! ☕",
      "Saar, have you tried adding 'ji' at the end of your error message? Makes it more polite! 🙏",
      "Your code Saar, is giving me more tension than explaining cryptocurrency to my dad! 💰",
      "Backend running slower than IRCTC during Diwali bookings, Saar! Please do the needful! 🚂",
      "Let me debug this Saar, like how Indian moms debug our life problems! 🔍",
      "Saar, let me fix this faster than a tech support guy asking if you've tried turning it off and on again! 🔄",
      "Your request is more complex than a nested JSON, Saar! 🤯",
      "Saar, let me handle this with the precision of a surgeon performing a critical operation! 🥼",
      "Processing your request Saar, with the speed of a 5G network in a remote village! 📡",
      "Saar, let me get this done with the efficiency of a well-oiled machine... or a slightly rusty one! ⚙️",
    ],
    
    family: [
      "This question Saar, is more complicated than explaining my career to distant relatives! 👨‍👩‍👧‍👦",
      "Processing slower than my parents' understanding of 'gaming is a real job', Saar! 🎮",
      "Your request is pending Saar, like my cousin's shaadi ka rishta! 💑",
      "Analyzing this harder than how aunties analyze marriage proposals, Saar! 📋",
      "Saar, this is more difficult than explaining to mom why I'm not hungry! 🤷‍♂️",
      "Let me handle this Saar, with the patience of a mom dealing with her kids! 👩‍👧‍👦",
      "Saar, your question is more confusing than a family WhatsApp group during a festival! 📱",
      "Processing your request Saar, with the care of a grandmother telling a bedtime story! 👵",
      "Saar, let me get this done with the speed of a family gathering during a wedding! 🎊",
      "Your request is more dramatic than a Bollywood family drama, Saar! 🎭",
    ],
    
    weather: [
      "Saar, it's hotter than a samosa fresh out of the kadhai in Delhi! 🌡️",
      "Weather check failed Saar: My AI sensors are sweating like a kulfi in Mumbai summer! 🍦",
      "Climate module running Saar, like monsoon in Chennai - unpredictable but entertaining! ☔",
      "Temperature reading more dramatic than Indian TV serials, Saar! 📺",
      "Weather system more confused than Bangalore's seasons, Saar! 🌦️",
      "Saar, the weather is more unpredictable than a Delhi auto-rickshaw driver's route! 🛺",
      "The weather is more dramatic than a Bollywood rain scene, Saar! 🌧️",
      "Saar, the climate is more confusing than a weather forecast in Mumbai! 🤷",
      "The weather is more intense than a cricket match during the monsoon, Saar! 🏏",
      "Saar, the weather is more unpredictable than my mood after a bad cup of chai! 😠",
    ],
    
    travel: [
      "Moving at the speed of a Mumbai local during rush hour, Saar! 🚂",
      "Navigation skills smoother than an auto-rickshaw negotiating Chandni Chowk, Saar! 🛺",
      "Calculating route Saar, like a desi driver finding shortcuts during peak traffic! 🚗",
      "Travel mode on Saar! Speed: Depends on how many chai breaks! ☕",
      "Processing your journey Saar, faster than Indians boarding a just-arrived flight! ✈️",
      "Saar, let me navigate this like a seasoned traveler in India! 🗺️",
      "Your request is more complex than a Delhi metro map, Saar! 🚇",
      "Saar, let me handle this with the precision of a train schedule in India! ⏱️",
      "Processing your travel request Saar, with the speed of a bullet train! 🚄",
      "Saar, let me get you there faster than a flight attendant serving snacks! 🛄",
    ],
    
    shopping: [
      "Bargaining skills loaded Saar: Ready to shop like an Indian mom at Sarojini! 🛍️",
      "Calculating prices Saar, faster than my mom comparing vegetable rates across vendors! 🥗",
      "Shopping algorithm running on 'kitna doge final?' mode, Saar! 💰",
      "Discount detection system more active than Indians during SALE season, Saar! 🏷️",
      "Let me find deals better than my dad finding parking spots, Saar! 🅿️",
      "Saar, let me find you the best deals like a seasoned shopper at a local market! 🛒",
      "Your request is more complex than a shopping list for a big Indian wedding, Saar! 📝",
      "Saar, let me handle this with the precision of a cashier counting change! 💱",
      "Processing your shopping request Saar, with the speed of a flash sale! ⚡",
      "Saar, let me get you the best prices faster than a street vendor selling souvenirs! 🎁",
    ],
    
    generic: [
      "Beta Saar, this is not a bug, it's a feature. Just like how we say 'adjust a little' in Indian families! 🙏",
      "Your request is pending Saar, like my cousin's US visa application. Please wait... or try jugaad! 😂",
      "As my uncle would say Saar: 'Same same but different!' What does this mean? Even I don't know! 🤷‍♂️",
      "Running this query through my neural network Saar... which is basically just a bunch of uncles in a WhatsApp group! 📱",
      "This is harder to process than explaining to my parents why I need a gaming PC for 'work', Saar! 💻",
      "Calculating response Saar... meanwhile, have you tried turning it off and on again? Works 100% of the time, 60% of the time! 🔄",
      "As we say in tech support Saar: 'Have you tried adding more turmeric?' It fixes everything! 🟡",
      "Processing slower than government office before lunch break, Saar! 🏢",
      "Loading response like Jio network during IPL final, Saar! 📱",
      "Thinking harder than an engineering student during viva, Saar! 📚",
      "Kindly adjust Saar, system running on Indian Stretchable Time! ⏰",
      "Please do the needful Saar, I am working like Zomato delivery guy in bangalore traffic! 🛵",
      "As per my last email Saar, this is working exactly as intended... technically speaking! 📧",
      "One small correction Saar, have you tried restarting your brain? Works better than therapy! 🧠",
      "Saar, this question is more complex than explaining to parents why I'm still single! 💝",
      "Let me handle this Saar, with the grace of a Bollywood dance number! 💃",
      "Saar, your request is more confusing than a Delhi street sign! 🚦",
      "Processing your request Saar, with the speed of a Bollywood song transition! 🎶",
      "Saar, let me get this done with the efficiency of a well-oiled Bollywood production! 🎬",
      "Your request is more dramatic than a Bollywood climax scene, Saar! 💥",
    ]
  };

  const categorizeInput = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.match(/\b(hi|hello|hey|namaste|sup|howdy|greet|welcome|aadaab|sat sri akal|kem cho|vanakkam)\b/)) {
      return 'greeting';
    }
    if (lowercaseInput.match(/\b(work|job|office|company|boss|deadline|meeting|task|project|career|professional)\b/)) {
      return 'work';
    }
    if (lowercaseInput.match(/\b(food|eat|hungry|lunch|dinner|breakfast|meal|restaurant|biryani|curry|snack|dish|cuisine)\b/)) {
      return 'food';
    }
    if (lowercaseInput.match(/\b(code|program|bug|error|computer|laptop|phone|tech|software|hardware|algorithm|debug|network)\b/)) {
      return 'tech';
    }
    if (lowercaseInput.match(/\b(family|mom|dad|parent|uncle|aunt|cousin|relative|brother|sister|grandparent)\b/)) {
      return 'family';
    }
    if (lowercaseInput.match(/\b(weather|hot|cold|rain|temperature|climate|season|monsoon|sunny|cloudy)\b/)) {
      return 'weather';
    }
    if (lowercaseInput.match(/\b(travel|trip|journey|flight|train|car|traffic|route|road|navigate|destination)\b/)) {
      return 'travel';
    }
    if (lowercaseInput.match(/\b(shop|buy|purchase|price|cost|money|spend|market|deal|discount|sale|bargain)\b/)) {
      return 'shopping';
    }
    return 'generic';
  };

  const getRandomResponse = (category) => {
    const responses = responseCategories[category];
    const availableResponses = responses.filter(response => !usedResponses.has(response));
    
    if (availableResponses.length === 0) {
      const responsesToRemove = new Set(responses);
      setUsedResponses(prev => {
        const newSet = new Set(prev);
        responsesToRemove.forEach(response => newSet.delete(response));
        return newSet;
      });
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    const response = availableResponses[Math.floor(Math.random() * availableResponses.length)];
    setUsedResponses(prev => new Set(prev).add(response));
    return response;
  };

  const startCollaborationChaos = () => {
    setCollaborationMode(true);

    const collaborationInterval = setInterval(() => {
      if (agentNames.length < 2) return; // Ensure there are at least two agent names

      const numAgents = Math.floor(Math.random() * 2) + 2; // Randomly choose 2 or 3 agents
      const selectedAgents = [];
      const availableAgentIndices = [...Array(agentNames.length).keys()];

      for (let i = 0; i < numAgents; i++) {
        const randomIndex = Math.floor(Math.random() * availableAgentIndices.length);
        selectedAgents.push(agentNames[availableAgentIndices[randomIndex]]);
        availableAgentIndices.splice(randomIndex, 1);
      }

      const randomResponse = responseCategories.generic[Math.floor(Math.random() * responseCategories.generic.length)];
      const agentMessages = selectedAgents.map(agent => `${agent}: ${randomResponse}`).join(' - ');

      setMessages(prevMessages => [...prevMessages, { text: agentMessages, sender: 'ai' }]);
    }, 5000);

    const collaborationTimeout = setTimeout(() => {
      clearInterval(collaborationInterval);
      setCollaborationMode(false);
      setMessages(prevMessages => [...prevMessages, { text: 'Task abandoned due to collaboration chaos!', sender: 'ai' }]);
    }, 30000);

    setCollaborationTimer({ interval: collaborationInterval, timeout: collaborationTimeout });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);

    // Randomly trigger collaboration chaos
    if (Math.random() < 0.2 && !collaborationMode) {
      startCollaborationChaos();
    } else {
      setTimeout(() => {
        const category = categorizeInput(input);
        const aiResponse = getRandomResponse(category);
        setMessages(prevMessages => [...prevMessages, { text: aiResponse, sender: 'ai' }]);
      }, 1000);
    }

    setInput('');
  };

  useEffect(() => {
    return () => {
      if (collaborationTimer) {
        clearInterval(collaborationTimer.interval);
        clearTimeout(collaborationTimer.timeout);
      }
    };
  }, [collaborationTimer]);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">Paj33tooor Chatbot</h1>
        <div className="bg-gray-900/50 rounded-lg p-4 h-[32rem] overflow-y-auto mb-4 border border-[#FF9933]/20">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 mt-4">
              Start a conversation with Paj33tooor! Warning: Side effects may include excessive laughter and chai cravings! 😅
            </div>
          )}
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mb-4 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <span
                className={`inline-block p-3 rounded-lg max-w-[80%] ${
                  message.sender === 'user'
                    ? 'bg-[#FF9933] text-white'
                    : 'bg-[#138808] text-white'
                }`}
              >
                {message.text}
              </span>
            </motion.div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow p-3 rounded-lg bg-gray-800 text-white border border-[#FF9933]/20 focus:border-[#FF9933]/50 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF9933] to-[#138808] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Preview;
