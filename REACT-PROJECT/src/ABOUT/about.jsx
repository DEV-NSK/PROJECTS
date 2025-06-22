import React from 'react'
import Insta from "/src/assets/insta.png";
import GitHub from "/src/assets/github.png";
import LinkedIn from "/src/assets/linkedin.png";
import "./about.css"

const About = () => {
  return (
    <div>
      {/* ABOUT SECTION */}
      <div className='md:hidden'>
        <h1 className="pb-5 gap-3 p-5">ABOUT US</h1>
        <div className="grid grid-cols-1 justify-items-center gap-10 p-10 pt-4">
        <div className="card1 p-5">
          <h2 className="pb-3 text-orange-600 font-bold"> Why choose CAREERA ?</h2>
          <p className="text-xs/4">
            ✅Beginner - advanced learning paths <br />&nbsp;&nbsp;&nbsp; – clear guidance at every stage. <br /><br />
            ✅Curated resources <br />&nbsp;&nbsp;&nbsp; – handpicked blogs and official  docs. <br /><br />
            ✅Salary & duration estimates <br />&nbsp;&nbsp;&nbsp; – know what to expect at every level. <br /><br />
            ✅Career-aligned guidance <br />&nbsp;&nbsp;&nbsp;&nbsp; – learn what top companies expect.
          </p>
        </div>
        <div className="card1 p-5">
          <h2 className="pb-3 text-orange-600 font-bold"> How CAREERA works ?</h2>
          <p className="text-xs/4">
            🧭Choose a roadmap <br />&nbsp;&nbsp;&nbsp;&nbsp; – Select from 25+ tech career tracks. <br/><br />
            📚Follow the path <br />&nbsp;&nbsp;&nbsp;&nbsp; – Learn with given resources. <br/><br />
            ✅Mark your progress <br />&nbsp;&nbsp;&nbsp;&nbsp; – Save your journey step-by-step. <br/><br />
            🏆Achieve your goal <br />&nbsp;&nbsp;&nbsp;&nbsp; – Gain skills to get hired.
          </p>
        </div>
      </div>
      </div>
      {/* CONTACT */}
            <div className="w-full p-10 md:hidden">
            <p className="text-center pb-5 w-5/6">Feel free to connect me on</p>
            <div className="flex justify-center items-center w-full p-5 pt-1" id="contact-logo">
              <a href="https://www.instagram.com/dev._.nest?igsh=MXgwYmtxYzlyN2ZtNw==" target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/bathula-naga-sai-kiran" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="" id="linkedin"/>
              </a>
              <a href="https://github.com/DEV-NSK" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="" />
              </a>
            </div>
            </div>
    </div>
  )
}

export default About
