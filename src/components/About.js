import React from "react"
import coder from './images/coder.svg'
import CV from "./CV"
const About = () => {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className = "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello I'm Ovadia, <br></br> Welcome to my landing-page. <br/>
            </h1>
            <p className="mb-8 leading-relaxed text-lg sm:text-2xl">
              I am a Full-Stack developer with a passion for coding and an eye for detail.
              <br></br>
             <span>Take a look and feel free to reach out if you like what you see!</span>
           
            </p>
            <div className="flex justify-center  sm:h-20  ">
              <a 
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg sm:h-20 sm:flex sm:items-center">
               Chat
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg sm:items-center">
               Portfolio
              </a>
            
                 <CV/>
              
             
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> 
            <img 
              className="object-cover pbject-center rounded"
              alt="hero"
              src={coder}>
            </img>
          </div>
        </div>
      </section>
    )
}
export default About