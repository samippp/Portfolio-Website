import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { useNavigate } from "react-router-dom";
import {motion as m, useAnimationControls } from "framer-motion";
import { useEffect, useState} from "react";
import Projects from "./components/Projects";



function SwitchToHome(){
    const Navigate = useNavigate();
    Navigate('/Home');
}


function Home(){
    const showAbout = useAnimationControls();
    const showProj = useAnimationControls();
    const showContacts = useAnimationControls();
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.body.addEventListener('wheel', checkScroll);

        if(count == 1){
            showAbout.start("visible")
            showProj.start("hidden")
        }
        else if(count == 2){
            showProj.start("visible");
            showAbout.start("hidden")
        }
        else if(count == 3){
            showContacts.start("visible")
            
        }
    })
    const checkScroll = (e) => {
        console.log(window.scrollY , "   |    " ,e.wheelDeltaY )

        
    if(window.scrollY == 0)
        showAbout.start("visible")

    
    if(window.scrollY > 1700 && e.wheelDeltaY < 0){
        showAbout.start("hidden")
        showProj.start("visible")
    }
    else{
        showProj.start("hidden")    
        showAbout.start("visible")
    }
        

    if((window.scrollY > 3600 && e.wheelDeltaY < 0))
        showProj.start("hidden")
    
    else if(window.scrollY < 3600 && e.wheelDeltaY > 0)
        showProj.start("visible")
   
        


}


const startAni = (ani) =>{
    setCount(ani)
    console.log(count)
}

return (
        <>
            <m.div 
            initial={{opacity:0,}}
            animate={{opacity:1}}
            transition={{duration:2.00,}} className="bg-orange-100"
            >
            

                <NavBar StartAni={startAni} showAbout={showAbout} showProj={showProj}/>
                <div className = "pt-96 bottom-12"></div>
                <div className = "pt-96 bottom-12"></div>
                <arrow/>

                <m.div
                variants={{hidden:{x:-1000, transition:{duration:0.5}},
                           visible:{x:0, transition:{ stiffness:200}}}}
                initial="hidden"
                animate={showAbout} 
                id="AboutMe">
                
                    <AboutMe/>
                </m.div>

                <m.div
                variants={{hidden:{x:2000},
                           visible:{x:1000, transition:{ stiffness:200}}}}
                initial="hidden"
                animate={showProj} 
                id="Projects">
                    <Projects/>
                </m.div>

                <m.div
                variants={{hidden:{y:0, transition:{duration:0.5}},
                           visible:{x:0, transition:{ stiffness:200}}}}
                initial="hidden" animate={showContacts} 
                
                className="pt-[900px] flex items-center justify-center">
                <Contact/>
                </m.div>
            </m.div>
        </>
    )
}

export{
    SwitchToHome,
    Home
}