import React, { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";

const Dashboard = (props) => {
  const { banner } = props;

  const [data, setData] = useState({
    description: banner.description || "",
    timer: banner.timer || "",
    link: banner.link || "",
    isVisible: banner.isVisible || false,
  });

  useEffect(() => {
    if (banner) {
      setData({
        description: banner.description || "",
        timer: banner.timer || "",
        link: banner.link || "",
        isVisible: banner.isVisible || false,
      });
    }
  }, [banner]);
  const updateBanner = async () => {
    await axios.put("https://takeuforward-igf3.onrender.com/api/banner", data);
    fetchBanner();
  };
  console.log(data);
  return (
    <div className="dashboard">
      <label>
        Banner Description:
        <input
          type="text"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
      </label>
      <label>
        Timer (in seconds):
        <input
          type="number"
          value={data.timer}
          onChange={(e) => setData({ ...data, timer: e.target.value })}
        />
      </label>
      <label>
        Banner Link:
        <input
          type="text"
          value={data.link}
          onChange={(e) => setData({ ...data, link: e.target.value })}
        />
      </label>
      <label>
        Banner Visible:
        <input
          type="checkbox"
          checked={data.isVisible}
          onChange={(e) => setData({ ...data, isVisible: e.target.checked })}
        />
      </label>
      <button onClick={updateBanner}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
