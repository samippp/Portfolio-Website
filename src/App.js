import './App.css';
import React, {useState, useEffect} from 'react';
import LoadingPage from './LoadingPage.js';
import {Home} from './Home.js';

import {motion as m} from 'framer-motion';
import {useAnimation} from 'framer-motion';




let bodyClass = ''
function App() {
  const [loading, setLoading] = useState(true);
  const loadingTransition = useAnimation();

  document.body.style.overflow = "hidden";

  useEffect(() => {
    document.addEventListener("wheel", detectKeyDown)
  },)

  const detectKeyDown = (e) => {
    if(e.wheelDeltaY < 0){
      setTimeout(() =>{
        loadingTransition.start("loaded");
        document.removeEventListener("wheel", detectKeyDown)
        setTimeout(() =>{
          setLoading(false);
        },1000)

      },1000)
    }
  }
  if(loading){
      bodyClass = 'invisible'
  }
  else{
      bodyClass = 'visible'
      document.body.style.overflow = "auto"
      console.log(loading)
      
    }

    return (
      <>
      {
        loading ?
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
      
      
        <LoadingPage />
        </m.div> 
        :
       
        <Home/>
      
      }

  
  </>)
}

export default App;
