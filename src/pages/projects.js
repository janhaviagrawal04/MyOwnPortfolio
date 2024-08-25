import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layouts from '@/components/Layouts'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'  
import Transaction from "../../public/images/projects/transaction_tracker.png" 
import cloud from "../../public/images/projects/cloud.png"
import Football from "../../public/images/projects/Football_Detection_Result.jpg"
import rideSharing from "../../public/images/projects/rideSharing.png"
import { motion } from 'framer-motion';
import Transition from '@/components/Transition'
const FramerImage = motion(Image); 

const FeaturedProject = ({type, title, summary, img, link, github}) =>{
    return(
        <article className='relative w-full flex items-center justify-between rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.0rem]'/>
                      
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full  border-dark border-[1px]'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority sizes='(max-width:768px)100vw, (max-width:1200px)50vw, 50vw'/>
            
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10 transform hover:scale-110 transition-transform duration-300'><GithubIcon/></Link>
                    <Link href={link} target="_blank"
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base transform hover:scale-110 transition-transform duration-300'
                    >Visit project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title,  img, link, github}) =>{
    return(
        <article className='w-full flex-flex-cols items-center justify-center rounded-2xl border shadow-2xl border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4
        '>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.0rem]
            '/>
             
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg '>
            <FramerImage src={img} alt={title} className='w-full h-auto rounded-md  border-dark border-[1px]' 
                whileHover={{scale:1.02}}
                transition={{duration:0.2}}
                priority sizes='(max-width:768px)100vw, (max-width:1200px)50vw, 50vw'/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center '>
                <Link href={link} target="_blank"
                    className='mr-4 text-lg font-semibold underline md:text-base transform hover:scale-110 transition-transform duration-300'
                    >Visit </Link>
                    <Link href={github} target="_blank" className='w-10 md:w-6 transform hover:scale-110 transition-transform duration-300'><GithubIcon/></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Janhavi - Projects</title>
            <meta name ="projects" content='full stack project - mern stack - ml'></meta>
        </Head>
        <Transition/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layouts className='py-16'>
                <AnimatedText text="Vision Over Facts" className='mb-8 lg:!text-7xl sm:mb-6 sm:!text-6xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                    <FeaturedProject
                            title="Football Player Detection and Tracking"
                            summary="Football Automated Analytics uses YOLOv5 and ByteTrack to detect and track players, referees, and the ball in video footage. Leveraging Bundesliga data and custom datasets, this tool delivers precise, real-time insights for enhanced football analytics."
                            link="#"
                            type="Enhancing Football Analytics with AI: Real-Time Player and Ball Tracking"
                            img={Football}
                            github="https://github.com/janhaviagrawal04/Football-Player-Detection-and-Tracking" 
                        /> 
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Voice Powered Transaction Tracker"
                            summary="Business Ledger is an innovative expense tracking application that combines the power of voice recognition with advanced React features. This application allows users to manage and track transactions effortlessly using voice commands. It leverages Redux for robust state management, Context API for streamlined global state handling, and Local Storage for offline capabilities."
                            link="https://transaction-tracker-react-speechly.netlify.app/"
                            type="Revolutionize Expense Tracking with Voice Commands"
                            img={Transaction}
                            github="https://github.com/janhaviagrawal04/Voice-Powered-Transaction-Tracker-App"
                        />
                    </div>
                    {/* <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="HomeTown" 
                            link="https://home-decor-shopping.netlify.app/"
                            type="Spuce Up your home with elegance"
                            img={home_decor}
                            github="https://github.com/aasthasingh14/Basic-Home_decor-Shopping"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                            title="To-Do-List" 
                            link="https://to-do-list-to-keep-you-updated.netlify.app/"
                            type="Keep track and increase productivity"
                            img={to_do}
                            github="https://github.com/aasthasingh14/To-Do-List"
                        />
                    </div> */}
                    <div className='col-span-12'>
                    <FeaturedProject
                            title="Serverless Email Marketing Application"
                            summary="Discover how to build a powerful serverless email marketing application using AWS services. This tutorial guides you through creating an application that schedules and sends emails, utilizing HTML templates and contact lists stored in an S3 bucket. Learn to leverage AWS Lambda, S3, and other AWS tools to automate and streamline your email marketing efforts with scalability and efficiency."
                            link="#"
                            type="Effortlessly Automate Your Email Campaigns with a Serverless Solution"
                            img={cloud}
                            github="https://github.com/janhaviagrawal04/CloudMailer---An-AWS-based-Serverless-Email-Marketing-Application"
                        />
                    </div>
                    
                    {/* <div className='col-span-6 sm:col-span-12'>
                    <Project
                            title="Basic Portfolio" 
                            link="https://basic-aastha-portfolio.netlify.app/"
                            type="Take a look at my basic Portfolio"
                            img={basic_portfolio}
                            github="https://github.com/aasthasingh14/Personal-Portfolio"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                            title="Calculator" 
                            link="https://calculator-use-it-and-get-correct-ans.netlify.app/"
                            type="Get your calculations corect"
                            img={calculator}
                            github="https://github.com/aasthasingh14/To-Do-List"
                        />
                    </div> */}
                    
                    <div className='col-span-12'>
                    <FeaturedProject
                            title="Ride Sharing App"
                            summary="A serverless ride-sharing app using AWS services like Amplify, Lambda, and DynamoDB to demonstrate cloud-based deployment, management, and scalability, inspired by AWS Wild Rydes."
                            link="#"
                            type="Seamless Cloud-Powered Ride-Sharing"
                            img={rideSharing}
                            github="https://github.com/janhaviagrawal04/Amazon-Wild-Rydes---Clone"
                        />
                    </div>
                </div>
            </Layouts>
        </main>
    </>
  )
}

export default projects