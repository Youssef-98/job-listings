import React from "react";
import Desktop from '../images/bg-header-desktop.svg';
import Mobile from '../images/bg-header-mobile.svg';

const Header = () => {
  return (
    <header className="bg-primary">
      {/* DESKTOP */}
      <img 
        src={Desktop} 
        alt="desktop-banner" 
        className="hidden mobile:block w-full h-36"
      />
      
      {/* MOBILE */}
      <img 
        src={Mobile} 
        alt="mobile-banner" 
        className="mobile:hidden w-full"
      />
    </header>
  );
};

export default Header;
