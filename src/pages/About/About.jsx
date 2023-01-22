import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About Us</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "about img" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About the BookHub</h2>
            <p className='fs-17'>Here at Daniel Awolowo's BookHub, we have thousands upon thousands of books for you to read up on and browse! And don't worry about losing us! We're just a click away!</p>
            <p className='fs-17'>Contact us at: 0110 040 0239 at Anywho, Wonderland, Earth.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About