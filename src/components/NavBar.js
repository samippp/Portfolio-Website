import React from 'react'
import {motion as m, spring, useAnimation } from "framer-motion";

  export default function NavBar() {
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
          transition={{delay:1.55}}>
            <p className="pl-10">Peng</p>
          </m.div>
          </div>
          <li></li>
          <li>
            <m.div
            variants={{
              infoHidden:{opacity:0, x:-800},
              infoEnd:{opacity:1, x:0}
            }}
            initial="infoHidden"
            animate="infoEnd"
            transition={{duration:0.70,delay:3, staggerChildren:0.5, staggerDirection:1, type: 'spring', stiffness: 60}} className="text-center grid grid-cols-3 text-2xl pt-5">
              <li>Git</li>
              <li>Projects</li>
              <li>Contacts</li>
            </m.div>
          </li>

        </div>
      </section>
    );
  }