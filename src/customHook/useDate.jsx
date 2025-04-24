import { useState, useEffect } from 'react';

export default function useDate() {
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
    hour: 0,
    minutes: 0,
    seconds: 0
  });

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      setDate({
        day: formatTime(currentDate.getDate()),
        month: formatTime(currentDate.getMonth() + 1),
        year: currentDate.getFullYear(),
        hour: formatTime(currentDate.getHours()),
        minutes: formatTime(currentDate.getMinutes()),
        seconds: formatTime(currentDate.getSeconds())
      });
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return [date];
}