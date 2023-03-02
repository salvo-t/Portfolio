import React from 'react';
import note from '../../assets/cover/note.png';
import text from '../../assets/cover/jate.png';
import back from '../../assets/cover/backend.png';
import './portfolio.css'


function Portfolio() {
  return (

    <>

      <div>
        <a href='https://github.com/salvo-t/Note-Taker'>github repo</a>
        <p>This is my note taker app made deployed with heroku</p>
        <img src={note} alt='' className='portfolio-img'></img>
      </div>

      <div>
      <p>______________________________________________________________________________________________________________</p>
      <p></p>
        <a href='https://github.com/salvo-t/Text-editor'>github repo</a>
        <p>This is my text editor made with PWA</p>
        <img src={text} alt='' className='portfolio-img'></img>
      </div>

      <div>
      <p>______________________________________________________________________________________________________________</p>
      <p></p>
        <a href='https://github.com/salvo-t/E-commerce-back-end'>github repo</a>
        <p>This is my ecommerce backened using insomnia</p>
        <img src={back} alt='' className='portfolio-img'></img>
      </div>

    </>

  )
};

export default Portfolio;
