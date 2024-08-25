import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
  return( 
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-primary text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-primaryDark dark:text-dark
        lg:py-2 lg:px-4
        md:text-sm md:py-1.5 md:px-3
        xs:bg-transparent xs:dark:bg-transparent   xs:font-bold  xs:text-primary xs:dark:text-primaryDark'
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, transition:{duration: 1.5}}} 
        viewport={{once:true}}
        >
          {name}
        </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-7xl mt-36 w-full text-center md:text-6xl md:mt-32 mb-10'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      xs:bg-circularLightXs xs:dark:bg-circularDarkXs
      '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2'
        whileHover={{scale:1.05}}
        >
          AWS
        </motion.div>

        <Skill name="Amazon EC2" x="-5vw" y="-10vw"/>
        <Skill name="Amazon S3" x="-25vw" y="2vw"/>
        <Skill name="AWS Lambda" x="20vw" y="6vw"/>
        <Skill name="Amazon RDS" x="0vw" y="12vw"/>
        <Skill name="Amazon VPC" x="0vw" y="21vw"/>
        <Skill name="CloudTrail" x="-20vw" y="-15vw"/>
        <Skill name="DynamoDB" x="15vw" y="-12vw"/>
        <Skill name="Snapshots" x="32vw" y="-5vw"/>
        <Skill name="EventBridge" x="0vw" y="-20vw"/>
        <Skill name="Amazon SES" x="-25vw" y="18vw"/>
        <Skill name="Amazon IAS" x="18vw" y="18vw"/>

        
      </div>

      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark mt-16
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      xs:bg-circularLightXs xs:dark:bg-circularDarkXs
      '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-4 md:p-4 xs:text-xs xs:p-2'
        whileHover={{scale:1.05}}
        >
          OTHER SKILLS
        </motion.div>

        <Skill name="C" x="-5vw" y="-10vw"/>
        <Skill name="Java" x="-25vw" y="2vw"/>
        <Skill name="GitHub" x="-35vw" y="-4vw"/>
        <Skill name="GoLang" x="20vw" y="6vw"/>
        <Skill name="Python" x="0vw" y="12vw"/>
        <Skill name="HTML" x="-20vw" y="-15vw"/>
        <Skill name="MySQL" x="15vw" y="-12vw"/>
        <Skill name="JavaScript" x="32vw" y="-5vw"/>
        <Skill name="CSS" x="0vw" y="-20vw"/>
        <Skill name="Problem Solving" x="-25vw" y="18vw"/>
        <Skill name="Critical Thinking" x="18vw" y="18vw"/>

        
      </div>
    </>
  )
}

export default Skills