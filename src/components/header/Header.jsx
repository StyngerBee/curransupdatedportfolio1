import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/portrait.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1> Curran Duke</h1>
        <h3 className='text-light'> Fullstack Developer</h3>
        <h5 className='text-light'> I am a practicing software developer, who strives to incorporate my existing developer knowledge, people and management skills to excel in my career and expand my programming knowledge.   I am seeking an opportunity in software development or related fields.  In my spare time I enjoy rebuilding cars and motorcycles where being a problem solver is a plus.  I am a motivated and fast learner and recently graduated from UCF's Full Stack Coding Bootcamp.</h5>
        <CTA></CTA>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>
      </div>
    </header>
  )
}

export default Header