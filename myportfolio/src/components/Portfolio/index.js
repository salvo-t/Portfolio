import React from 'react';
import note from '../../assets/cover/note.png';
import text from '../../assets/cover/jate.png';
import back from '../../assets/cover/backend.png';
import regex from '../../assets/cover/regex.PNG';
import team from '../../assets/cover/team.png';
import tech from '../../assets/cover/tech.PNG'
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

      <div>
      <p>______________________________________________________________________________________________________________</p>
      <p></p>
        <a href='https://gist.github.com/salvo-t/44ca6d336ca264314fde59249a2293b0'>github repo</a>
        <p>My email REGEX tutorial</p>
        <img src={regex} alt='' className='portfolio-img'></img>
      </div>

      <div>
      <p>______________________________________________________________________________________________________________</p>
      <p></p>
        <a href='https://github.com/salvo-t/Generating-team-profiles'>github repo</a>
        <p>A team generating website using fs</p>
        <img src={team} alt='' className='portfolio-img'></img>
      </div>

      <div>
      <p>______________________________________________________________________________________________________________</p>
      <p></p>
        <a href='https://github.com/salvo-t/Tech-blog'>github repo</a>
        <p>Tech blog made with mvc</p>
        <img src={tech} alt='' className='portfolio-img'></img>
      </div>

    </>

  )
};

export default Portfolio;
