import React from "react";

export default function AboutMe(){
    return(
        <div className = "p-20 pt-52 text-xl bg-orange-300 w-[54%] rounded-r-[600px] relative h-[1500px]" id ="about me">
            <h2 className = "py-5 text-4xl pt-56">Hello, I am Sami.</h2>
            <div className = "text-2xl pt-20 font-light">
                <p>I am currently a second year student studying Computer Science at Toronto 
            Metropolitan University. I am passionate about technology and the way it works.</p> 
            
            <div className="pt-24"></div>
            <p className="pt-10 text-4xl font-normal">Hobbies</p>

            <p className="pt-24 pr-3 inline-block">Outside of school, I am a badminton enjoyer and training has made me understand the 
                process of enjoying as you learn. 
            </p>

            </div>

        </div>
    );
}