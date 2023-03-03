import React from 'react';
import me from '../../assets/cover/0.jpg';

function About() {
  return (
    <section className="my-5">
        <img src={me} alt='../../assets/cover/0.jpg'></img>
      <div className="my-2">
        <div className="profile-img my-5">
        <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
        Hello im Salvatore, a junior developer from the msu coding bookcamp, and would love to join your team! 
        </p>
      </div>
    </section>
  );
}

export default About;
