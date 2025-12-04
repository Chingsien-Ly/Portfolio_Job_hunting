import React from "react";
import Diploma from "../assets/diploma.png";
import Bachelor from "../assets/bachelor.png";
import SkillCard from "../components/SkillCard";
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
                  src={Bachelor}
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
                <time className="font-mono italic">2020</time>
                <div className="text-lg font-black">Junior Web-developer</div>
                The Apple Macintosh—later rebranded as the Macintosh 128K—is the
                original Apple Macintosh personal computer. It played a pivotal
                role in establishing desktop publishing as a general office
                function. The motherboard, a 9 in (23 cm) CRT monitor, and a
                floppy drive were housed in a beige case with integrated
                carrying handle; it came with a keyboard and single-button
                mouse.
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
                <time className="font-mono italic">1998</time>
                <div className="text-lg font-black">iMac</div>
                iMac is a family of all-in-one Mac desktop computers designed
                and built by Apple Inc. It has been the primary part of Apple's
                consumer desktop offerings since its debut in August 1998, and
                has evolved through seven distinct forms
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
                <time className="font-mono italic">2001</time>
                <div className="text-lg font-black">iPod</div>
                The iPod is a discontinued series of portable media players and
                multi-purpose mobile devices designed and marketed by Apple Inc.
                The first version was released on October 23, 2001, about 8+1⁄2
                months after the Macintosh version of iTunes was released. Apple
                sold an estimated 450 million iPod products as of 2022. Apple
                discontinued the iPod product line on May 10, 2022. At over 20
                years, the iPod brand is the oldest to be discontinued by Apple
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
                <time className="font-mono italic">2007</time>
                <div className="text-lg font-black">iPhone</div>
                iPhone is a line of smartphones produced by Apple Inc. that use
                Apple's own iOS mobile operating system. The first-generation
                iPhone was announced by then-Apple CEO Steve Jobs on January 9,
                2007. Since then, Apple has annually released new iPhone models
                and iOS updates. As of November 1, 2018, more than 2.2 billion
                iPhones had been sold. As of 2022, the iPhone accounts for 15.6%
                of global smartphone market share
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
                <time className="font-mono italic">2015</time>
                <div className="text-lg font-black">Apple Watch</div>
                The Apple Watch is a line of smartwatches produced by Apple Inc.
                It incorporates fitness tracking, health-oriented capabilities,
                and wireless telecommunication, and integrates with iOS and
                other Apple products and services
              </div>
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
