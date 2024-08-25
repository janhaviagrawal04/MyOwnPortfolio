import AnimatedText from "@/components/AnimatedText";
import Transition from "@/components/Transition";
import { sendContactForm } from "@/lib/api";
import Head from "next/head";
import React, { useState } from "react";
import img from "../../public/images/contact.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HorizontalScrollingText from "@/components/HorizontalScrollingText";
const FramerImage = motion(Image);

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues, isLoading: false, success: false };

const Contact = () => {
  const [state, setState] = useState(initState);

  const { values, isLoading, success } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
      success: false,  
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
      success: false,
    }));

    try {
      await sendContactForm(values); 
      setState({ ...initState, success: true }); 
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          success: false,
        }));
      }, 1000);
    } catch (error) {
      console.error("Error sending contact form:", error);
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <>
      <Head>
        <title>Janhavi - Contact</title>
        <meta
          name="conatct"
          content="Contact form for users to get in touch"
        />
      </Head>
      <Transition />
      <AnimatedText
        text="Let's Collaborate!"
        className="!text-8xl mt-8 dark:text-light lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb-4 md:mx-8 md:mt-10"
      />
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 dark:text-light/85 mb-8">
        <div className="relative flex flex-col col-span-4 items-center justify-center md:col-span-8 md:order-1 md:mt-10 xs:col-span-8">
          <FramerImage
            src={img}
            className="w-[50%] h-auto items-center md:inline-block md:w-[70%]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width:768px)100vw, (max-width:1200px)50vw, 50vw"
          />
        </div>
        <div className="relative col-span-4 mt-16 md:col-span-8 md:order-2 flex flex-col items-center justify-center md:mt-4 md:ml-10 xs:col-span-8">
          <form className="" onSubmit={onSubmit} method="POST">
            {success && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
            <div className="mb-4 grid grid-cols-5 sm:flex-row sm:space-x-4">
              <div className="col-span-2 sm:mb-0">
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="block w-[90%] h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary bg-gray-50 dark:focus:border-primaryDark !text-dark  placeholder:font-semibold"
                />
              </div>
              <div className="col-span-3 ">
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="block  w-[66%] h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary bg-gray-50 dark:focus:border-primaryDark !text-dark placeholder:font-semibold"
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="block w-[80%] h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary bg-gray-50  dark:focus:border-primaryDark !text-dark placeholder:font-semibold"
              />
            </div>
            <div className="mb-4">
              <textarea
               type="textarea"
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="block w-[80%] h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary bg-gray-50  dark:focus:border-primaryDark !text-dark placeholder:font-semibold"
              />
            </div>
            <button
              className={`bg-dark py-2 px-4 rounded-md text-white relative ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary dark:hover:bg-primaryDark font-semibold dark:bg-light dark:text-dark"
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="mb-8">
        <HorizontalScrollingText
          text="Have a project idea or review? Reach out and connect!"
          className="!text-4xl text-left mb-16 dark:text-light !md:text-2xl"
        />
      </div>
    </>
  );
};

export default Contact;
