import React, { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";

const Dashboard = (props) => {
  const { banner, fetchBanner } = props;
  const initials = {
    description: banner.description,
    timer: banner.timer,
    link: banner.link,
    isVisible: banner.isVisible,
  };
  const [banners, setBanners] = useState(initials);
  const updateBanner = async () => {
    await axios.put(
      "https://takeuforward-igf3.onrender.com/api/banner",
      banners
    );
    fetchBanner();
  };

  return (
    <div className="dashboard">
      <label>
        Banner Description:
        <input
          type="text"
          value={initials.description}
          onChange={(e) =>
            setBanners({ ...banners, description: e.target.value })
          }
        />
      </label>
      <label>
        Timer (in seconds):
        <input
          type="number"
          value={initials.timer}
          onChange={(e) => setBanners({ ...banners, timer: e.target.value })}
        />
      </label>
      <label>
        Banner Link:
        <input
          type="text"
          value={initials.link}
          onChange={(e) => setBanners({ ...banners, link: e.target.value })}
        />
      </label>
      <label>
        Banner Visible:
        <input
          type="checkbox"
          checked={initials.isVisible}
          onChange={(e) =>
            setBanners({ ...banners, isVisible: e.target.checked })
          }
        />
      </label>
      <button onClick={updateBanner}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
