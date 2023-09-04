import { useEffect } from "react";
import { LoadingPage, DetectScroll } from "./LoadingPage";
import {motion as m, useAnimation } from "framer-motion";




export default function LPAnimation(Component){
    const loadingTransition = useAnimation();
  
    useEffect(()=>{
      if(!loading){
        console.log(loading);
        loadingTransition.start("loaded");
      }
    })

    return(
      <>
      <m.div className='fixed' 
        variants={
          {
          loading: { y:0} ,
          loaded: { y:-1200},
          }
        }
        initial = "loading"
        animate = {loadingTransition}
        transition = {{ duration : 0.500}}
        >
        <LoadingPage/>
        
        </m.div>
      </>
    );

}

