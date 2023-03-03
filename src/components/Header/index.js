import React from 'react';
import color from '../../assets/cover/colors.jpg';


function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <img src={color} alt=""></img>
      {props.children}
    </header>
  );
}

export default Header;
