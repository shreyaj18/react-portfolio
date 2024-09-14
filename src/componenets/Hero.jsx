import { Content } from "../assets/constants"
import  profilepic  from "../assets/profile_port4.png"
import { motion } from "framer-motion"

const container = (delay)=>({
    hidden: {x: -100 , opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    },
})

const  iconVariants = (duration) =>({
    initial: {y: -10},
    animate: {
      y: [10, -10],
      transition : {
        duration :duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      },
    },
  })
  
function Hero() {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Shreyaj Kanade</motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-4xl
                tracking-tight text-transparent">
                    Full Stack Developer
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tight">{Content}</motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div 
                    initial={{ x:100 , opacity: 0}}
                    animate={{ x:0 ,opacity:1}}
                    transition={{duration: 1, delay:1.3}}
                className="flex justify-center">
                <motion.img 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    
                className="border rounded-full " src={profilepic} alt="profilepic" />
            </motion.div>
        </div>
    </div>
  </div>
}

export default Hero