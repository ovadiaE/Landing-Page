
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data/data";
import ProjectLinks from './ProjectLinks'
import ProjectModal from "./ProjectModal";

export default function Projects() {

  const iconHeader = () => (
    <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-14 mb-4 fill-green-600" />
          <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-white">
            My work
          </h1>
        </div>
   )

   const ProjectDisplay = () => (
    
    <div className="flex justify-evenly flex-wrap -m-4">
     
      <ProjectLinks 
        link={projects[0].link} 
        id={projects[0].id} 
        image={projects[0].image} 
        title={projects[0].title}
        subtitle={projects[0].subtitle}
        description={projects[0].description}
      />
      
      <ProjectLinks 
        link={projects[2].link} 
        id={projects[2].id} 
        image={projects[2].image} 
        title={projects[2].title}
        subtitle={projects[2].subtitle}
        description={projects[2].description}
      />
      
      <ProjectLinks 
        link={projects[3].link} 
        id={projects[3].id} 
        image={projects[3].image} 
        title={projects[3].title}
        subtitle={projects[3].subtitle}
        description={projects[3].description}
      />
      <ProjectModal projects={projects}/>   
    </div>
  )
  
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        {iconHeader()}
        {ProjectDisplay()}
      </div>
    </section>
  );
}