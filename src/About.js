import Contacts from "./Contacts";
import rooftops from './assets/images/travel.jpg'
import ReactPlayer from "react-player";
import funny from './assets/videoes/funny.mp4'

function About() {
    const summer = false;
    const randomImageUrl = "https://drive.google.com/uc?export=view&id=1ne7vH73FO0xJk7rickvf5UPYryn3VDyI";
    const vidUrl = "https://fb.watch/mw5JcjyIbT/";
    
    return(
        <>
            <img 
                width={500}
                src={rooftops}
                alt="A girl on the rock"
            />

            <img 
                width={500}
                src={require("./assets/images/travel.jpg")}
                alt="A girl on the rock"
            />

            <img 
                src={randomImageUrl}
                alt="A girl on the rock"
                width={300}
                
            />

            <ReactPlayer  
                url= {vidUrl}
                
                controls
                playing= {false}
                volume={0.5}
            />

            <ReactPlayer 
                
                controls
            />

            {summer 
            ? <h1>Let's go to the beach</h1>
            : <h1>Let's watch movie</h1>}
        </>
    )
}

export default About