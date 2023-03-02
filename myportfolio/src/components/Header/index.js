import React from 'react';


function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <img src={require('../../assets/cover/colors.jpg')} alt=""></img>
      {props.children}
    </header>
  );
}

export default Header;
