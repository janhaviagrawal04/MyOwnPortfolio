import Layouts from '@/components/Layouts'
import Head from 'next/head' 
import Image from 'next/image'
import profilepic from "../../public/images/profile/my_img.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import HorizontalScrollingText from '@/components/HorizontalScrollingText' 
import Transition from '@/components/Transition'

export default function Home() {
  return (
    <>
      <Head>
        <title>Janhavi</title>
        <meta name="home page" content="Resume-github-linkedIn-leetcode" />
      </Head>
      <Transition/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light overflow-x-hidden'>
        <Layouts className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image 
                src={profilepic} 
                alt="Janhavi" 
                className='w-[80%] h-auto md:inline-block md:w-full ml-20 lg:ml-0 md:ml-0 sm:mb-8' 
                priority 
                sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw' 
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText 
                text="HELLO WORLD ! Janhavi Agrawal Here" 
                className='!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <HorizontalScrollingText 
                text="Frontend Developer - Amazon Web Services - Java programmer" 
                className='!text-4xl text-left'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              Skilled Frontend Developer with expertise in AWS cloud and Java, delivering robust, scalable solutions. Passionate about seamless user experiences.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Resume_JanhaviAgrawal.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:p-2 md:px-4 md:text-base'
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"}/> 
                </Link>
              </div>
            </div>
          </div>
        </Layouts>

        <HireMe/>
        <div className='absolute right-8 bottom-8 w-24 inline-block md:hidden'>
          <Image src={lightBulb} alt="Janhavi" className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
