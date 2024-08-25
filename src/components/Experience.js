import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-40 xs:mt-16">
      <h2 className="font-bold text-6xl mb-32 xs:mb-16 w-full text-center md:text-6xl ms:mb-16 xs:text-4xl">
        Experience / Achievements
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative  lg:w-full md:w-full xs:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Joint Secretary"
            company="Compusys"
            time="2023 - present"
            address="Shri Ramdeobaba College of Engineering and Management"
            companyLink="https://www.linkedin.com/company/compusys-student-society-rcoem-cse/about/"
            work="Led initiatives to foster student engagement and professional development within the organization."
          />

          <Details
            position="Women Empowerment Cell"
            company="Rotract Club, RCOEM"
            time="2023 - present"
            address="Shri Ramdeobaba College of Engineering and Management"
            companyLink="https://www.instagram.com/rotaract_rcoem/"
            work="Managed club activities and collaborated with members to organize community service projects."
          />

          <Details
            position="Student"
            company="Amazon ML Summer School"
            time="Sept 2023 - Oct 2023"
            address="Amazon"
            companyLink="https://www.amazon.science/academic-engagements/amazon-launches-annual-ml-summer-school-in-india"
            work="Engaged in intensive learning sessions focused on machine learning concepts and applications."
          />

          <Details
            position="Student Expert"
            company="Postman"
            time="Jun 2024"
            address="Online"
            companyLink="https://badgr.com/public/assertions/tpkrWlwCT0i9F5DPchX3BQ"
            work="Contributed to testing and optimizing API workflows, gaining hands-on experience with Postman tools."
          />

          <Details
            position="Web Development Intern"
            company="CodSoft"
            time="Jun 2024"
            address="Online"
            companyLink="https://www.linkedin.com/company/codsoft/"
            work="Developed responsive web applications and assisted in frontend and backend development tasks."
          />

          <Details
            position="Cloud Virtual Internship"
            company="AWS"
            time="Jun 2024"
            address="Online"
            companyLink="https://www.credly.com/badges/6fe3f592-5aca-49b8-b7fe-d5bba418a851/public_url"
            work="Explored cloud computing principles and gained practical knowledge through virtual lab exercises."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
