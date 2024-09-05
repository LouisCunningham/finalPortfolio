import React, { useState } from 'react';
import '../styling/navbar.css';
import IonIcon from '@reacticons/ionicons';

const BottomMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive((current) => !current);
  };
  
  // Object of icon names and corresponding URLs
  const iconUrls = {
    "logo-twitter": "https://twitter.com",
    "logo-twitch": "https://www.twitch.tv/trafalgarbob",
    "logo-discord": "https://discord.com",
    "logo-youtube": "https://www.youtube.com/@TrafalgarD_Bob",
    "logo-tiktok": "https://tiktok.com",
    "logo-playstation": "https://playstation.com",
    "logo-github": "https://github.com/LouisCunningham",
    "logo-facebook": "https://www.facebook.com/profile.php?id=61555628654221"
  };

  const getColorForIndex = (index) => {
    // Define an array of colors (you can add more colors if needed)
    const colors = ['#ff2972', '#fee800', '#04fc43', '#fe00f1', '#00b0fe', '#fea600', '#a529ff', '#01bdbb'];

    // Return the color based on the index (looping back if the index exceeds the color array length)
    return colors[index % colors.length];
  };

  return (
    <div className="bottomContainer">
      <ul className={`navMenu ${isActive ? 'active' : ''}`}>
        <div className='menuToggle' onClick={handleButtonClick}>
          <IonIcon name="add-outline" />
        </div>
        {Object.entries(iconUrls).map(([iconName, url], index) => (
          <li key={iconName} style={{ color: getColorForIndex(index), '--i': index + 1 }}>
            <a href={url} target='_blank' rel="noopener noreferrer" className='item' style={{ '--item-color': getColorForIndex(index) }}>
              <IonIcon name={iconName} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BottomMenu;
