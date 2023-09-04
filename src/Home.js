import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import { useNavigate } from "react-router-dom";
import {motion as m, useAnimation } from "framer-motion";


function SwitchToHome(){
    const Navigate = useNavigate();
    Navigate('/Home');
}

function Home(){
    return (
        <>
            <m.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2.00}} className="bg-orange-100">
                <NavBar/>
                <div className = "pt-96 bottom-12"></div>
                <div className = "pt-96 bottom-12"></div>
                <div className = "pt-64 bottom-12"></div>
                <arrow/>
                <AboutMe/>
            </m.div>
        </>
    )
}

export{
    SwitchToHome,
    Home
}