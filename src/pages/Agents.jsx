import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import OnlineStatus from '../components/OnlineStatus';

const agents = [
  {
    firstName: "Ajeet",
    lastName: "Singh",
    city: "Chandigarh",
    coordinates: "30.7333° N, 76.7794° E",
    neighborhood: "Sector 17",
    job: "Civil Engineer",
    linkedin: "https://www.linkedin.com/in/ajeet-singh-5b456930/"
  },
  {
    firstName: "Ananya",
    lastName: "Sharma",
    city: "Mumbai",
    coordinates: "19.0760° N, 72.8777° E",
    neighborhood: "Juhu",
    job: "Content Writer",
    linkedin: "https://www.linkedin.com/in/ananyashawarma/"
  },
  {
    firstName: "Anil",
    lastName: "Kumar",
    city: "Hyderabad",
    coordinates: "17.3850° N, 78.4867° E",
    neighborhood: "Banjara Hills",
    job: "HR Manager",
    linkedin: "https://www.linkedin.com/in/anil-kumar-8300b82"
  },
  {
    firstName: "Arjun",
    lastName: "Gupta",
    city: "Bengaluru",
    coordinates: "12.9716° N, 77.5946° E",
    neighborhood: "Whitefield",
    job: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/arjngpta/"
  },
  {
    firstName: "Arvind",
    lastName: "Tiwari",
    city: "Kanpur",
    coordinates: "26.4499° N, 80.3319° E",
    neighborhood: "Civil Lines",
    job: "Business Analyst",
    linkedin: "https://www.linkedin.com/in/arvind-tiwari-44960116/"
  },
  {
    firstName: "Karan",
    lastName: "Bansal",
    city: "Chandigarh",
    coordinates: "30.7333° N, 76.7794° E",
    neighborhood: "Sector 15",
    job: "Mechanical Engineer",
    linkedin: "https://www.linkedin.com/in/karanb192"
  },
  {
    firstName: "Kritika",
    lastName: "Singh",
    city: "Bangalore",
    coordinates: "12.9716° N, 77.5946° E",
    neighborhood: "Koramangala",
    job: "Graphic Designer",
    linkedin: "https://www.linkedin.com/in/kritika-singh-654bb2134"
  },
  {
    firstName: "Meera",
    lastName: "Patel",
    city: "Ahmedabad",
    coordinates: "23.0225° N, 72.5714° E",
    neighborhood: "Navrangpura",
    job: "Ayurvedic Practitioner",
    linkedin: "https://www.linkedin.com/in/rojiwadiameera/"
  },
  {
    firstName: "Neha",
    lastName: "Verma",
    city: "Delhi",
    coordinates: "28.6139° N, 77.2090° E",
    neighborhood: "Saket",
    job: "Marketing Manager",
    linkedin: "https://www.linkedin.com/in/nehaverma4/"
  },
  {
    firstName: "Priya",
    lastName: "Desai",
    city: "Surat",
    coordinates: "21.1702° N, 72.8311° E",
    neighborhood: "Rander",
    job: "Fashion Designer",
    linkedin: "https://www.linkedin.com/in/priya-desai-820225195/"
  },
  {
    firstName: "Priyanka",
    lastName: "Gupta",
    city: "Kolkata",
    coordinates: "22.5726° N, 88.3639° E",
    neighborhood: "Salt Lake City",
    job: "Event Manager",
    linkedin: "https://www.linkedin.com/in/capriyankagupta/"
  },
  {
    firstName: "Radhika",
    lastName: "Joshi",
    city: "Pune",
    coordinates: "18.5204° N, 73.8567° E",
    neighborhood: "Aundh",
    job: "Financial Analyst",
    linkedin: "https://www.linkedin.com/in/radhikajoshi92/"
  },
  {
    firstName: "Rajesh",
    lastName: "Patel",
    city: "Ahmedabad",
    coordinates: "23.0225° N, 72.5714° E",
    neighborhood: "Satellite",
    job: "Software Developer",
    linkedin: "https://www.linkedin.com/in/rajesh-patel-08447bb4"
  },
  {
    firstName: "Rohit",
    lastName: "Kumar",
    city: "Lucknow",
    coordinates: "26.8467° N, 80.9462° E",
    neighborhood: "Hazratganj",
    job: "Lawyer",
    linkedin: "https://www.linkedin.com/in/raghuvanshirohit"
  },
  {
    firstName: "Sanya",
    lastName: "Khanna",
    city: "Gurgaon",
    coordinates: "28.4595° N, 77.0266° E",
    neighborhood: "DLF Phase 2",
    job: "UX Designer",
    linkedin: "https://www.linkedin.com/in/khannasanya"
  },
  {
    firstName: "Sneha",
    lastName: "Reddy",
    city: "Chennai",
    coordinates: "13.0827° N, 80.2707° E",
    neighborhood: "Adyar",
    job: "Teacher",
    linkedin: "https://www.linkedin.com/in/sneha-reddy-3371a173"
  },
  {
    firstName: "Tanvi",
    lastName: "Sharma",
    city: "Delhi",
    coordinates: "28.6139° N, 77.2090° E",
    neighborhood: "Vasant Vihar",
    job: "Content Strategist",
    linkedin: "https://www.linkedin.com/in/tsharma133/"
  },
  {
    firstName: "Vikram",
    lastName: "Joshi",
    city: "Pune",
    coordinates: "18.5204° N, 73.8567° E",
    neighborhood: "Koregaon Park",
    job: "Marketing Manager",
    linkedin: "https://www.linkedin.com/in/joshivikram/"
  },
  {
    firstName: "Vivek",
    lastName: "Yadav",
    city: "Noida",
    coordinates: "28.5355° N, 77.3910° E",
    neighborhood: "Sector 15",
    job: "Data Scientist",
    linkedin: "https://www.linkedin.com/in/vivekyadav01/"
  }
].sort((a, b) => a.firstName.localeCompare(b.firstName));

function AgentCard({ agent, index }) {
  const isOnline = useOnlineStatus(agent.firstName);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card overflow-hidden group hover:shadow-lg hover:shadow-[#FF9933]/10 transition-all duration-300 relative"
    >
      <OnlineStatus isOnline={isOnline} />
      <div className="relative">
        <div className="bg-gradient-to-r from-[#FF9933]/10 to-[#138808]/10 p-6 rounded-t-xl">
          <h3 className="text-2xl font-bold mb-1 text-white agent-name tech-text">
            {agent.firstName} <span className="text-[#FF9933]">{agent.lastName}</span>
          </h3>
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <FaBriefcase className="text-[#FF9933]" />
            <span className="font-light">{agent.job}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt className="text-[#138808]" />
            <span className="font-light">{agent.city}, {agent.neighborhood}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1 font-light">
            {agent.coordinates}
          </div>
        </div>
        <div className="p-4 flex justify-end">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={agent.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#FF9933] transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function Agents() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text tech-text">
          Our Agents
        </h1>
        <p className="text-lg text-[#FF9933] max-w-2xl mx-auto">
          Meet our collection of specialized AI agents, each with their own unique personality and expertise
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {agents.map((agent, index) => (
          <AgentCard key={agent.firstName} agent={agent} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Agents;
