import React from "react";
import groupPhoto from "../assets/group.png";
function About() {
  return (
    <div className="w-full h-full flex flex-col   px-28 ">
      {/* Our mission */}
      <div className="flex flex-col gap-10 mt-5 h-[50%]">
        <div className="text-2xl text-center font-semibold">My Mission</div>
        <div className="text-[#1f2a35] font-bold text-4xl text-center">
          Building meaningful digital solutions through software
        </div>
        <div className="text-center text-lg">
          I help organisations and communities solve real-world problems by
          developing modern web applications and supporting the next generation
          of software developers. With experience in full-stack development,
          teaching, and collaborative software projects, I focus on creating
          applications that are reliable, scalable, and user-focused. I believe
          technology should simplify processes, improve efficiency, and empower
          people to work smarter. Through both industry experience and academic
          teaching, I aim to contribute to building software that makes a
          meaningful impact while continuously learning new technologies and
          improving my craft as a developer.
        </div>
      </div>
      {/* Our journey */}
      <div className="bg-[#ebf0f3] w-[calc(75%)] h-[60%] relative pl-10 rounded-lg">
        <div className="w-[65%] h-full flex flex-col items-center gap-2 justify-center">
          <div className="text-xl text-center font-semibold">My Journey</div>
          <div className="text-[#1f2a35] font-bold text-2xl wrap-break-word">
            Creating technology with curiosity and impact
          </div>
          <div>
            My journey in software development started with a curiosity about
            how digital systems work and how they can be improved. Over time,
            this curiosity grew into hands-on experience building full-stack web
            applications and experimenting with systems that combine software
            with hardware. Alongside development work, I also support students
            as a Teaching Assistant in programming and web development at
            Flinders University. This experience has strengthened my ability to
            communicate technical ideas clearly and guide others through complex
            problem-solving. I enjoy building systems using technologies such as
            React, Node.js, JavaScript, PHP, and RESTful APIs, with a focus on
            clean design, maintainable code, and practical functionality.
          </div>
        </div>
        {/* overlay picture */}

        <img
          src={groupPhoto}
          alt="group photo"
          className="w-[60%] h-[80%] object-fit absolute top-15 -right-[35%] rounded-lg"
        />
      </div>
    </div>
  );
}

export default About;
