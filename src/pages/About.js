import AnimatedText from '@/components/AnimatedText'
import Layouts from '@/components/Layouts'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ProfilePic from "../../public/images/profile/my_profile.png"
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Transition from '@/components/Transition'

const About = () => {
  return (
    <>
        <Head>
            <title>Janhavi</title>
            <meta name ="about" content='description-sills-experience-eduaction'></meta>
        </Head>
        <Transition/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
           <Layouts className='p-16'>
                <AnimatedText text="Dreams Drive Desires" className='mb-4 text-8xl lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb-8'/>
                <div className='relative grid w-full grid-cols-6 gap-16 sm:gap-8 '>
                    <div className='col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8'>
                      <h2 className='mb-4 text-lg font-bold uppercase text-dark/75  dark:text-light/75'>About Me</h2>
                      <p className='font-medium'>Hi, I&apos;m Janhavi, pursuing a degree in Computer Engineering from SRCOEM, Nagpur. Throughout my academic journey, I have developed a strong passion for technology, particularly in cloud computing, software development, and frontend engineering. I have excelled in my coursework, earning a merit scholarship from my college, and have actively engaged in various programs to gain practical experience in the software field.</p>
                      <p className='my-4 font-medium'>As an AWS enthusiast, I have been involved in projects that allowed me to leverage cloud technologies to build scalable and efficient solutions. Additionally, my experience in frontend development, has enabled me to create intuitive and user-friendly interfaces that enhance overall user experience. Collaborating on diverse projects has also helped me refine my problem-solving and teamwork abilities.</p>
                      <p className='my-4 font-medium'>I am eager to continue exploring innovative approaches in both cloud computing and frontend development to create impactful solutions that drive positive change. I look forward to contributing my technical skills and enthusiasm for technology to a team committed to making a meaningful impact on society.</p>
                    </div>
                    <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8'>
                      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light'/>
                      <Image src={ProfilePic} alt="Aastha" className='w-full h-auto rounded-2xl ' priority sizes='(max-width:768px)100vw, (max-width:1200px)50vw, 33vw'/>
                    </div>                   
                </div>
                <Skills/>
                <Experience/>
                <Education/>
           </Layouts>
        </main>
    </>
  )
}

export default About