import pok from "../images/pokemon.png"
import gameImg from "../images/baguetteAdventures.png"
import studyProj from "../images/chatGPTStudy.png"  
import rightArrow from "../images/right-arrow.png"
import leftArrow from "../images/left_arrow.png"

import { useState } from "react";

function OutputText({x}){

        if(x == 0){
            return (
                <p className="text-2xl">A text based card management system where the user can create cards and manage them. 
                    Designed with OOP and quick search by employing the techniques of sorting and binary sarch.
                </p>
            );
        }
        else if(x==1){
            return (
                <p className="text-2xl">A 2d Adventure game made with jframes and its own physics. OOP was used to create the world and 
                    interactive characters and data structures were used to organize these objects.
                </p>
            )
        }
        else{
            return (
                <p className="text-2xl">
                    A study on ChatGPT made using python and matplotlib. Reads data from a file and forms graphs 
                    based on those statistics.
                </p>
            )
        }

}

export default function Projects(){
    const SliderData = [
        {
            image: pok,
            title: "Pokemon Card Collection"
        },
        {
            image: gameImg,
            title: "2D adventure game"
        },
        {
            image: studyProj,
            title: "ChatGpt study using matplotlib"
        }
    ];
    
    const [currentProj, setCurrent] = useState(0);
    
    const goToPrev = () =>{
        if(currentProj !=0)
            setCurrent(currentProj-1)
    }

    const goToNext = () =>{
        if(currentProj !=2)
            setCurrent(currentProj+1)   
    }


    return(
        <>
        <div className="pt-52"></div>
        <div className = "p-44 text-xl bg-orange-300 w-2/4 rounded-l-[450px] relative right-2" id="projects">
            <p className="text-4xl pl-[40%] pb-24 pt-56">Projects</p>

            <div style={{height:"330px", justifyContent:"center", display:"flex"}}className="bg-black rounded-[100px]">
            <img className = "h-12" style={{position:"absolute", top:"680px", left:"19%"}}src={leftArrow} onClick={goToPrev}/>
            <img className = "h-12" style={{position:"absolute", top:"680px", right:"19%"}}src={rightArrow} onClick={goToNext}/>
            <img className = "mx-auto h-[320px] pt-2 rounded-[50px] w-[400px]"src={SliderData[currentProj].image}></img>
            </div>

            <div className="pt-12 font-light">
            <OutputText x={currentProj}/>
            </div>
            <div className="pt-52"></div>
        </div>

        
        
        </>
    )
}