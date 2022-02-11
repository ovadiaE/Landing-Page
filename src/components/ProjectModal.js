import React, { useState } from "react"
import { ArrowRightIcon } from "@heroicons/react/solid"
import { ArrowLeftIcon } from "@heroicons/react/solid"

const ProjectModal = ({projects}) => {
    const [toggleImage, setToggleImage] = useState(false)

    const cycleImage = () => (setToggleImage(!toggleImage))

    const modalButton = () => (
        <>
            <button key={projects[1].id} className="sm:w-1/2 w-100 p-4" type="button" data-modal-toggle="defaultModal">
                <div className="flex relative sm:w-full sm:h-full">
                    <img
                        alt="gallery"
                        className="absolute inset-0 w-full sm: h-full sm:w-full object-cover"
                        src={projects[1].image}/>
                    
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                            {projects[1].subtitle}
                        </h2>
                            
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                            {projects[1].title}
                        </h1>
                            <p className="leading-relaxed">{projects[1].description}</p>
                    </div>
                </div>
            </button>
        </>
    )

    const deepCorrelation = () => (
        <>                    
            <p className="text-lg sm:text-sm text-white leading-relaxed xl:w-2/4 lg:w-3/4 py-5 mx-auto">
                {projects[1].projectInfo}
            </p>
        </>
    )

    const correlation = () => (
        <> 
            <p className="text-lg sm:text-sm text-white leading-relaxed xl:w-2/4 lg:w-3/4 py-5 mx-auto">
                {projects[1].projectInfo}
            </p>
        </>
    )

    const arrowButtons = () => {
        return (
             toggleImage ? 
                
                <div>
                    <ArrowLeftIcon onClick={cycleImage} className="w-5 h-5 ml-1"/>
                </div> : 
                
                <div>
                    <ArrowRightIcon onClick={cycleImage} className="w-5 h-5 ml-1"/>
                </div>
        )
    }


    const modalContent = () => (
        <div id="defaultModal" aria-hidden="true" className="sm:h-3/4 sm:text-sm hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center  flex-col items-center 
             h-modal md:h-full md:inset-0">
            
                {!toggleImage ? (correlation()) : (deepCorrelation())} 
            
            <div className="w-1/2 h-2/4 relative sm:w-full">
                {!toggleImage ?  (<img alt="gallery" className="" src={projects[1].image2}/>)  : (<img alt="gallery" className="" src={projects[1].image}/>) }
            </div>
            
            <br></br>
            {arrowButtons()}
            <br></br>
            <button  data-modal-toggle="defaultModal" type="button" className="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 
                first-letter:focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Close
            </button>
        </div>
    )
    
    return (
        <>
            {modalButton()}
            {modalContent()}
        </>
    )
}

export default ProjectModal