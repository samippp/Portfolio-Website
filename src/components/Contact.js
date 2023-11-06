import github from '../images/github.png'
import mail from '../images/mail.png'
import linkedin from '../images/in.png'
import { motion as m} from 'framer-motion'

export default function Contact(){
    return(<>
    <div className="pt-52"></div>
        <div className = "p-44 text-xl bg-orange-300 w-2/4 rounded-[450px] " id="contact">
            <p className="text-4xl text-center pb-24">Contact Me</p>
            
            <div className='pl-[46%]'>
            <a href = "https://github.com/samippp"><m.div  
                whileHover={{x: -150}}>
                <div className='grid grid-cols-2'>
                
                    <img src={github} className="h-12 w-12"/>
                    <m.div
                        initial={{opacity: 0 , x: -90}}
                        whileHover={{opacity: 1}}>
                            github.com/samippp
                    </m.div>
                </div>
            </m.div>
            </a>
            
            <m.div 
                whileHover={{x: -150}}>
                <div className='grid grid-cols-2'>
                
                    <img src={mail} className="h-12 w-12"/>
                    <m.div
                        initial={{opacity: 0 , x: -100}}
                        whileHover={{opacity: 1}}>
                            sami.peng1108@gmail.com
                    </m.div>
                </div>
            </m.div>
            
            <a href="https://www.linkedin.com/in/sami-peng-596381292/">
            <m.div 
                whileHover={{x: -150}}>
                <div className='grid grid-cols-2'>
                
                    <img src={linkedin} className="h-12 w-12"/>
                    <m.div
                    className='w-96'
                        initial={{opacity: 0 , x: -100}}
                        whileHover={{opacity: 1}}>
                            sami-peng-596381292
                    </m.div>
                </div>
            </m.div>
            </a>
            </div>


        </div> </>
    )
    
    

}