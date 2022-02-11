
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data/data";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className=" container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-14 mb-4 fill-green-600" />
          <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-white">
            My work
          </h1>
        </div>
        <div className="flex justify-evenly flex-wrap -m-4">
            <a
              href={projects[0].link}
              target="_blank"
              rel="noreferrer" 
              key={projects[0].id}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative sm:h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={projects[0].image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {projects[0].subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {projects[0].title}
                  </h1>
                  <p className="leading-relaxed">{projects[0].description}</p>
                </div>
              </div>
            </a>
            <ProjectModal projects={projects}/>          
        </div>
      </div>
    </section>
  );
}