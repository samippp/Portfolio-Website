import {motion as m } from "framer-motion";
import { Link } from 'react-scroll';

  export default function NavBar({StartAni}) {
    
    return (
      <section>
        <div className = "grid grid-cols-3 list-none p-10 text-3xl font-sans fixed w-screen">
          <div class="text-4xl">
          <m.div
          variants={{
            namefirst:{opacity:0},
            namefinal:{opacity:1}
          }}
          initial="first"
          animate="final"
          transition={{delay:1.5}}>
          
            <li>Sami</li>
          </m.div>

          <m.div
          variants={{
            surnameFirst:{opacity:0, y:-10},
            surnameFinal:{opacity:1, y:0}
          }}
          initial="surnameFirst"
          animate="surnameFinal"
          transition={{delay:.55}}>
            <p className="pl-10">Peng</p>
          </m.div>
          </div>
          <li></li>
          <li className='grid grid-cols-3'>
            <m.div
            variants={{
              infoHidden:{opacity:0, x:-800},
              infoEnd:{opacity:1, x:0}
            }}
            initial="infoHidden"
            animate="infoEnd"
            transition={{duration:0.70,delay:1, staggerDirection:1}} className="text-center text-2xl pt-5 cursor-pointer">
              <li><Link 
              onClick={()=>StartAni(1)}
              to="about me"
              smooth={true}>About Me</Link></li>
              </m.div>

              <m.div
            variants={{
              infoHidden:{opacity:0, x:-300},
              infoEnd:{opacity:1, x:0}
            }}
            initial="infoHidden"
            animate="infoEnd"
            transition={{duration:0.70,delay:1.5}} className="text-center text-2xl pt-5 cursor-pointer">
              <li><Link
              onClick={()=>StartAni(2)}
              to="projects"
              smooth={true}>Projects</Link></li>
            </m.div>
            <m.div
            variants={{
              infoHidden:{opacity:0, x:-200},
              infoEnd:{opacity:1, x:0}
            }}
            initial="infoHidden"
            animate="infoEnd"
            transition={{duration:0.70,delay:2}} className="text-center text-2xl pt-5 cursor-pointer">
              <li><Link
              to="contact"
              onClick={()=>StartAni(3)}
              smooth={true}>
                Contacts</Link></li>
              
            </m.div>
            
          </li>

        </div>
      </section>
    );
  }
