import React from 'react'
import "./Recommend.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
const Recommend = () => {
  return (
    <section className="recommend-wrapper">
        <div className="paddings innerWidth flexCenter recommend-container">
            {/* left side */}
            <div className="flexColStart recommend-left">
              <div className="recommend-title">
                <div className="orange-circle"/>
                <motion.h1
                initial={{y: "2rem", opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                  duration: 2,
                  type: "spring"
                }}
                >
                  Modern Palace <br/>
                  Of Your Dream Is <br/>
                  Now In A Click
                </motion.h1>
              </div>
              <div className="flexColStart recommend-des">
                <span>The property of your choice is available which satisfies you completely.</span>
                <span>All the difficulties of life are going to go away now. A new environment is going to<br/> bring happiness in your life.</span>
              </div>
              <div className="flexCenter search-bar">
                <HiLocationMarker color="var(--blue)" size={25}/>
                <input type="text" />
                <button className="button">Search</button>
              </div>
              <div className="flexCenter stats">
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={80000} end={95000} duration={4}/>
                    <span>+</span>  
                  </span>
                  <span className='secondaryText'>Convenient<br/> Location</span>
                </div>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={3000000} end={4750000} duration={4}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Satisfied <br/>Customers</span>
                </div>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={550} end={880} duration={4}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Branches <br/>in India</span>
                </div>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={350} end={450} duration={4}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Branches <br/> All over World</span>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="flexCenter recommend-right">
                <motion.div 
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
                className="image-container">
                    <img src="./hero-image.png" alt="" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Recommend

