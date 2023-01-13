import React from 'react'
import './about.css'
import ME from '../../assets/images/candid.jpeg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Adventure Landing</h5>
              <small>Over 5 years of working as a manager at Adventure Landing, maintaining games and reprogramming them when needed.</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Discount Tire</h5>
              <small>6 months working as a service technician, learning to use my hands in the workplace and getting proficient at working on cars.</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Florida School for the Deaf and Blind</h5>
              <small>Over 2 years of working as a mentor, and an instructor for ages k-12, in the dorms and guiding the future of our society.</small>
            </article>
          </div>
          <p> 
            I'm Curran Duke, a practicing software developer, who strives to learn more about programming, in order to excel in my career. I enjoy playing games at home, and working on my car and my motorcycle. 
            I also enjoy problem solving and expanding my skill set in topics that I find interest in. 

          </p>

          <a href='#contact'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About