import { useState, useEffect } from 'react';

export const useOnlineStatus = (agentId) => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    // Generate random initial delay (1-30 seconds)
    const initialDelay = Math.random() * 30000;
    
    // Generate random online duration (30-180 seconds)
    const getRandomOnlineDuration = () => (30 + Math.random() * 150) * 1000;
    
    // Generate random offline duration (10-60 seconds)
    const getRandomOfflineDuration = () => (10 + Math.random() * 50) * 1000;

    let timeoutId;

    const toggleStatus = () => {
      setIsOnline(current => {
        const newStatus = !current;
        const nextDuration = newStatus ? getRandomOnlineDuration() : getRandomOfflineDuration();
        timeoutId = setTimeout(toggleStatus, nextDuration);
        return newStatus;
      });
    };

    // Initial status change after random delay
    timeoutId = setTimeout(toggleStatus, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [agentId]);

  return isOnline;
};
