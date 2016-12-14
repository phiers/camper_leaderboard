import React from 'react';

const TitleBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <p className="menu-text"><span className="green">freeCodeCamp</span> LeaderBoard (click
          <span className="blue"> blue columns </span>to sort)
      </p>
    </div>
    <div className="top-bar-right">
      <p className="menu-text">View source code on
        <a href="https://github.com/phiers/camper_leaderboard" rel="noopener noreferrer" target="_blank"> Github</a>
      </p>
    </div>
  </div>
);

export default TitleBar;
