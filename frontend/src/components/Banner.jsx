import React, { useState, useEffect } from "react";

const Banner = ({ timeLeft, banner }) => {
  if (!banner.isVisible || timeLeft <= 0) return null;

  return (
    <div className="banner">
      <img
        src="https://images.unsplash.com/photo-1721332150382-d4114ee27eff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <p>{banner.description}</p>
      <a href={banner.link}>Learn More</a>
      <p>Time left: {timeLeft}s</p>
    </div>
  );
};

export default Banner;
