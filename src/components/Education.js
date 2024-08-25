import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-5 first:mt-0 last-mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full  md:text-sm ">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-40 xs:mt-16">
      <h2 className="font-bold text-6xl mb-32 xs:mb-16 w-full text-center md:text-6xl ms:mb-16 xs:text-4xl">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative  lg:w-full md:w-full xs:w-full">
      <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Technology in Computer Science and Engineering"
            time="2021 - Present"
            place="Ramdeobaba University"
            info="Attending Shri Ramdeobaba College of Engineering and Management, pursuing a degree in Computer Science and Engineering with a current CGPA of 9.85."
          />

          <Details
            type="Higher Secondary Education"
            time="2019 - 2021"
            place="Brijlal Biyani Science College"
            info="Scored 98.33% in Higher Secondary Education (HSC) at Brijal Biyani Science College. Worked on improving my soft skills while exploring new opportunities."
          />

          <Details
            type="Secondary Education"
            time="Up to 2019"
            place="Holy Corss Convent English High School"
            info="Scored 94.60% in Secondary Education (SSC) at Yashoda English High School. Demonstrated a passion for art, securing an A grade in Elementary and Intermediate Drawing State-level Exams. Developing skills in teamwork, communication, and time management."
            />
        </ul>
      </div>
    </div>
  );
};

export default Education;
