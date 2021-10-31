import playbg from "./video1.mp4";
import React from "react";
import './Background.css';

function Background(){
    return(
        <div className="bg">
           <video autoPlay muted loop>
               <source src={playbg} type="video/mp4" />        
            </video> 
        </div>
    )
}

export default Background;