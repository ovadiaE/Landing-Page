import React from "react"
import axios from "axios"

const CV = () => {
   
    const fetchCV = async () => {
        await axios(`http://localhost:4000/pdf`, {
            method: "GET",
            responseType: "blob"
            //Force to receive data in a Blob Format
          })
            .then(response => {
              //Create a Blob from the PDF Stream
              const file = new Blob([response.data], {
                type: "application/pdf"
              });
              //Build a URL from the file
              const fileURL = URL.createObjectURL(file);
              //Open the URL on new Window
              window.open(fileURL);
            })
            .catch(error => {
              console.log(error);
            });
        }
     
        return (
        <button  onClick={fetchCV}  
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg bg-blue-700 sm:items-center" >
            CV
        </button>
      
    )
    

}

export default CV