import {motion as m} from 'framer-motion';
import {useAnimation , useAnimate} from 'framer-motion';
import arrow from './images/down-arrow.png';
import {useEffect } from 'react';


function DetectScroll(){

  useEffect(()=>{
    document.body.addEventListener('wheel', checkScroll);
  })

  const checkScroll = (e) =>{
    if(e.wheelDeltaY < 0){
      return true;
    }
    return false;
  }
}

export default function LoadingPage(loading){
    const [scope, animate] = useAnimate();
    const arrow_dismiss = useAnimation();
    const text_dismiss = useAnimation();
    const [scope2, animate2] = useAnimate();


    useEffect(()=>{
      document.body.addEventListener('wheel', checkScroll);
    })
    

    const checkScroll = (e) =>{
      if(e.wheelDeltaY < 0){
          arrow_dismiss.start("bye")
          text_dismiss.start("dismiss")
          document.body.removeEventListener('wheel', checkScroll);
      }
        
    }


    useEffect(()=>{
      animate2([
        [scope2.current,{ y: 100, opacity: 0, }],
        [scope2.current,{y: 0, opacity:1, transition:{duration:1.00}}]
      ])

      setTimeout(() => {
        animate([
          [scope.current,{opacity:1, y:50, transition:{duration:1.00, delay:2.00}}],
          [scope.current,{opacity:1, y:40, transition:{duration:1.00, delay:1.00,}}]
        ]);
      },1000)
    })

    
    

    return (<>
        
        <div className = "text-7xl bg-red-400 text-white w-screen h-screen text-center pt-96">
          <m.div
          variants={
            {
              dismiss:{ y: 40, opacity: 0, transition:{delay:0.2, duration:1}},
            }
          }
          animate={text_dismiss}
          className='opacity-0' ref = {scope2}>

          Welcome.
          </m.div>

          <m.div 
          
          variants={{
            bye:{y:50, opacity: 0}
            }
          }
          animate = {arrow_dismiss}
          className='mx-auto pt-80 h-12 w-12 opacity-0' ref = {scope}><img src = { arrow }/></m.div>
        </div>
        
        </>
        );
}
