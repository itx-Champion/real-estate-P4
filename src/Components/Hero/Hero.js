import React from "react";
import { MdLocationOn } from 'react-icons/md';
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container paddings flexCenter innerWidth ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
          <div className="hero-circle"/>
            <motion.h1
            initial={{x:"-2rem",y:"2rem",opacity:0}}
            animate={{y:0,x:0, opacity:1}}
            transition={{
              duration:2,
              type:"spring"
            }}
            >
              Discover
              <br /> Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className=" flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
          <MdLocationOn size={25} color="var(--blue)" />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className=" flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                <CountUp start={8800} end={9000} duration={5} />
                <span>+</span>
                </span>
                <span className="secondaryText" >Premium Products</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                <CountUp start={1950} end={2000} duration={5} />
                <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                <CountUp end={28}  />
                <span>+</span>
                </span>
                <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div 
          initial={{x:"7rem",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
            duration:2,
            type:"spring"
          }}
          className="image-container">
            <img src="../images/hero-image.png" alt="hero-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
