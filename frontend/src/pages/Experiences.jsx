import React from "react";
import Diploma from "../assets/diploma.png";
import Bachelor from "../assets/bachelor.png";
import SkillCard from "../components/SkillCard";
import Master from "../assets/master.png";
import SQL from "../assets/sql.jpeg";
function Experiences() {
  // skills
  const skills = [
    "C++",
    "C#",
    "C",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "PHP",
    "NodeJs",
    "ExpressJs",
    "Python",
    "Tailwind",
    "SQL",
    "NoSQL",
  ];
  return (
    <div className="w-full h-full flex px-28 overflow-y-scroll flex-col">
      {/* Education */}
      <div className="w-full mt-5">
        <div className="border border-[#CDCDCD]"></div>
        <div className="text-[20px] flex items-center justify-between">
          <div className="font-bold">EDUCATION</div>
          <div className="font-bold">AUSTRALIA</div>
        </div>
        <div className="border border-[#CDCDCD]"></div>
        {/* Certification */}
        <div className="w-full flex items-center justify-center">
          <div className="flex items-center justify-between mt-10 w-[70%]">
            <div className="hover-3d">
              {/* content */}
              <figure className="w-60 rounded-t-2xl">
                <img
                  src={Diploma}
                  alt="Diploma"
                  className="border  border-[#CDCDCD] rounded-2xl"
                />
                <div className="flex flex-col items-center justify-center">
                  <div className="font-bold">Swinburne University</div>
                  <div>2020-2021</div>
                  <div>Hawthorn, VIC, Melbourne</div>
                  <div></div>
                </div>
              </figure>

              {/* 8 empty divs needed for the 3D effect */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="hover-3d">
              {/* content */}
              <figure className="w-60 rounded-2xl">
                <img
                  src={Bachelor}
                  alt="bachelor"
                  className="border  border-[#CDCDCD] rounded-2xl"
                />
                <div className="flex flex-col items-center justify-center">
                  <div className="font-bold">Swinburne University</div>
                  <div>2021-2023</div>
                  <div>Hawthorn, VIC, Melbourne</div>
                  <div></div>
                </div>
              </figure>
              {/* 8 empty divs needed for the 3D effect */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="hover-3d ">
              {/* content */}
              <figure className="w-60 rounded-2xl">
                <img
                  src={Master}
                  alt="bachelor"
                  className="border  border-[#CDCDCD] rounded-2xl"
                />
                <div className="flex flex-col items-center justify-center">
                  <div className="font-bold">Flinders University</div>
                  <div>2023-2025</div>
                  <div>Tonsley, SA, Adelaide</div>
                  <div></div>
                </div>
              </figure>
              {/* 8 empty divs needed for the 3D effect */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* Career */}
      <div className="w-full mt-10">
        <div className="border border-[#CDCDCD]"></div>
        <div className="text-[20px] flex items-center justify-between">
          <div className="font-bold">CAREER</div>
          <div className="font-bold">AUSTRALIA</div>
        </div>
        <div className="border border-[#CDCDCD]"></div>
        {/* TIMELINE OF CAREER */}
        <div className="flex items-center w-full justify-center">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">June 2025 – Present</time>
                <div className="text-lg font-black">
                  Casual Academic (Teaching Assistant), Flinders University
                </div>
                At Flinders University, I support undergraduate and postgraduate
                students across core subjects in computer science and software
                engineering, including computer programming, data structures,
                and web development. My role involves leading practical lab
                sessions, tutoring students in UI/UX design, HTML, CSS,
                JavaScript, PHP, C++, Java, object-oriented programming, and
                data structures, and guiding them through debugging,
                optimisation, and best coding practices. I also assist with
                assessment marking and provide constructive, actionable feedback
                to enhance learning outcomes. Working closely with lecturers, I
                contribute to refining teaching materials and improving course
                delivery, while helping students build confidence and a strong
                understanding of programming fundamentals and modern web
                technologies.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic">August 2022 – Mar 2023</time>
                <div className="text-lg font-black">
                  Software Developer Intern, CBAA
                </div>
                CBAA is a Cambodia-based digital platform that supports users in
                exploring real estate locations, comparing pricing, identifying
                job opportunities, and evaluating property options. I
                contributed to the development of a full-stack web application
                using React.js and Node.js, designing responsive and
                user-friendly interfaces with Tailwind CSS and Material UI to
                ensure usability across devices. My work included building
                RESTful APIs and backend functionality with Express.js and
                MySQL, following Agile SDLC practices through sprint planning
                and reviews. I also used Git/GitHub for version control and
                participated in unit and integration testing to maintain code
                quality and reliability.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">
                  January 2021 – April 2022
                </time>
                <div className="text-lg font-black">
                  Full-stack Software Developer, Smart Axiata
                </div>
                At Smart Axiata, one of Cambodia’s largest telecommunications
                companies, I worked on internal digital platforms that supported
                business and operational teams. I developed and maintained
                full-stack web applications using JavaScript/TypeScript, React,
                Node.js, and RESTful APIs, while building reusable UI components
                with React, Tailwind CSS, and Material UI to improve consistency
                and development efficiency. My responsibilities included
                implementing authentication, role-based access control, CRUD
                operations, and optimising API endpoints, as well as integrating
                internal systems and third-party services via secure APIs. I
                collaborated closely with product, QA, and DevOps teams in an
                Agile/Scrum environment, designed and optimised relational
                databases, and supported the full development lifecycle using
                Git, Jira, CI/CD pipelines, and cloud platforms.
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
      {/* Short-course Certificate */}
      <div className="w-full mt-5">
        <div className="border border-[#CDCDCD]"></div>
        <div className="text-[20px] flex items-center justify-between">
          <div className="font-bold">CERTIFICATE</div>
          <div className="font-bold">AUSTRALIA</div>
        </div>
        <div className="border border-[#CDCDCD]"></div>
        <div className="hover-3d mt-10">
          {/* content */}
          <figure className="w-60 rounded-2xl">
            <img
              src={SQL}
              alt="bachelor"
              className="border  border-[#CDCDCD] rounded-2xl"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="font-bold">Flinders University</div>
              <div>2023-2024</div>
              <div></div>
            </div>
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* Skill */}
      <div className="w-full mt-5">
        <div className="border border-[#CDCDCD]"></div>
        <div className="text-[20px] flex items-center justify-between">
          <div className="font-bold">SKILLS</div>
          <div className="font-bold">AUSTRALIA</div>
        </div>
        <div className="border border-[#CDCDCD]"></div>
        {/* Skill list */}
        <div className="mt-5 flex gap-3">
          {skills.map((skill) => {
            return <SkillCard skill={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
