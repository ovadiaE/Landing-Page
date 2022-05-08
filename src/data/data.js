import chatApp from '../components/images/chatApp.png'
import WeatherApp from '../components/images/WeatherApp.png'
import deepCorrelation from '../components/images/deepCorrelation.png'
import correlation from '../components/images/correlation.png'
import landing_page from '../components/images/landing_page.png'

export const projects = [
    {
        title: "Chat App",
        subtitle: "REACT/redux, socket-io",
        description:"chatapp utilizing web sockets",
        image: chatApp,
        link: "https://lucid-ptolemy-a40286.netlify.app/?fbclid=IwAR2KJBL0zLTF76N3UsFLsS6nCUx8Vb8xLMiIlQV2JKK9ylnSZ2wolMJRIvo",
        id: 1
    },
    
    {
        title: "Internship at Lagoon",
        subtitle: "REACT, Material UI",
        description: null,
        image: deepCorrelation,
        image2: correlation,
        link: "https://data-lagoon.com/",
        id: 2,
        projectInfo: "Components created for Lagoon displaying correlations between a chosen companies public information and datasets aggragated from various sources",
        
    },
    {
        title: "Weather App",
        subtitle: "React, Redux, accuweather API ",
        description:"Weather app",
        image: WeatherApp,
        link: "https://mellow-sorbet-253c5b.netlify.app",
        id: 3
    },

    {
        title: "First Landing Page",
        subtitle: "React, React particles, scss",
        description:"particle animation landing page",
        image: landing_page,
        link: "https://www.ovadiae.com",
        id: 4
    }
]

export const skills = [
    
    { technicalSkill: "JavaScript", id: 's1' },
    
    { technicalSkill: "REACT", id: 's2' },
    
    { technicalSkill: "Redux", id: 's11' },
    
    { technicalSkill: "CSS", id: 's3' },

    { technicalSkill: "Tailwind CSS", id: 's4' },

    { technicalSkill: "Material UI", id: 's5' },
    
    { technicalSkill: "Bootstrap", id: 's6' },
    
    { technicalSkill: "NodeJS/epress", id: 's7' },

    { technicalSkill: "Socket-io", id: 's8' },

    { technicalSkill: "Heroku", id: 's9' },

    { technicalSkill: "Netlify", id: 's10' }
]