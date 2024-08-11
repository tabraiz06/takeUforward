import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [banner, setBanner] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  const fetchBanner = async () => {
    const response = await axios.get(
      "https://takeuforward-igf3.onrender.com/api/banner"
    );
    setBanner(response.data);
    setTimeLeft(response.data.timer);
  };
 

  useEffect(() => {
    fetchBanner();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);
  return (
    <div className="container">
      <Banner fetchBanner={fetchBanner} banner={banner} timeLeft={timeLeft} />
      <Dashboard
        fetchBanner={fetchBanner}
        banner={banner}
        timeLeft={timeLeft}
      />
    </div>
  );
};

export default App;
