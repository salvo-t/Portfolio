import React from 'react';

function About() {
  return (
    <section className="my-5">
        <img src={require('../../assets/cover/0.jpg')} alt='../../assets/cover/0.jpg'></img>
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
