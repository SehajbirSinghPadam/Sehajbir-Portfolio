import { Avatar } from "@mantine/core";

// Import all images
import HTML from "../HTML.png";
import CSS from "../CSS.png";
import SASS from "../SASS.png";
import JavaScript from "../JavaScript.png";
import React_JS from "../React JS.png";
import Angular from "../Angular.png";
import Redux from "../Redux.png";
import Tailwind_CSS from "../Tailwind CSS.png";
import GSAP from "../GSAP.png";
import Material_UI from "../Material UI.png";
import Bootstrap from "../Bootstrap.png";
import Springboot from "../Springboot.png";
import Node_js from "../Node JS.png";
import Express_js from "../Express JS.png";
import MySQL from "../MySQL.png";
import MongoDB from "../MongoDB.png";
import Firebase from "../Firebase.png";
import PostgresSQL from "../PostgresSQL.png";
import C from "../C.png";
import C__ from "../C++.png";
import Java from "../Java.png";
import TypeScript from "../TypeScript.png";
import Git from "../Git.png";
import Github from "../Github.png";
import VS_code from "../VS Code.png";
import Postman from "../Postman.png";
import MongoDB_Compass from "../MongoDB Compass.png";
import Spring from "../Spring Tool Suite.png";

interface SkillBadgeProps {
  skills: string[];
}

interface SkillCardProps {
  title: string;
  skills: string[];
}

// Create a mapping object for skill names to imported images
const skillImages: Record<string, string> = {
  'HTML': HTML,
  'CSS': CSS,
  'SASS': SASS,
  'JavaScript': JavaScript,
  'React JS': React_JS,
  'Angular': Angular,
  'Redux': Redux,
  'Tailwind CSS': Tailwind_CSS,
  'GSAP': GSAP,
  'Material UI': Material_UI,
  'Bootstrap': Bootstrap,
  'Springboot': Springboot,
  'Node JS': Node_js,
  'Express JS': Express_js,
  'MySQL': MySQL,
  'MongoDB': MongoDB,
  'Firebase': Firebase,
  'PostgresSQL': PostgresSQL,
  'C': C,
  'C++': C__,
  'Java': Java,
  'TypeScript': TypeScript,
  'Git': Git,
  'Github': Github,
  'VS Code': VS_code,
  'Postman': Postman,
  'MongoDB Compass': MongoDB_Compass,
  'Spring Tool Suite': Spring
};

const SkillBadge = ({ skills }: SkillBadgeProps) => {
  // Define all skills that should have white text
  const whiteTextSkills = [
    'HTML', 'CSS', 'SASS', 'JavaScript',
    'React JS', 'Angular', 'Redux', 'Tailwind CSS', 
    'GSAP', 'Material UI', 'Bootstrap',
    'Springboot', 'Node JS', 'Express JS', 
    'MySQL', 'MongoDB', 'Firebase', 'PostgresSQL',
    'C', 'C++', 'Java', 'JavaScript', 'TypeScript',
    'Git', 'Github', 'VS Code', 'Postman',
    'MongoDB Compass', 'Spring Tool Suite'
  ];
  
  return (
    <>
      {skills.map((skill, index) => {
        // Check if current skill should have white text
        const useWhiteText = whiteTextSkills.includes(skill);
        // Get the image for the current skill
        const skillImage = skillImages[skill];
        
        return (
          <div
            key={`${skill}-${index}`}
            className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1 hover:bg-primaryColor/10 transition-colors duration-200"
          >
            {skill ? (
              <img
                className="w-[48px] h-[48px] bs-mx:w-[36px] bs-mx:h-[36px] xsm-mx:w-[28px] xsm-mx:h-[28px] p-1 object-contain"
                src={skillImage}
                alt={skill}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <div className="w-[48px] h-[48px] bs-mx:w-[36px] bs-mx:h-[36px] xsm-mx:w-[28px] xsm-mx:h-[28px] bg-gray-200 rounded-full"></div>
            )}
            <div className={`text-xl font-medium sm-mx:text-lg xs-mx:text-sm ${
              useWhiteText ? 'text-white' : 'text-textColor'
            }`}>
              {skill}
            </div>
          </div>
        );
      })}
    </>
  );
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
      className="w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl mb-3 border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full hover:shadow-[0_0_15px_0_#64FFDA70] transition-shadow duration-300"
    >
      <h3 className="text-3xl mb-4 text-white text-center sm-mx:text-2xl xs-mx:text-xl font-bold">
        {title}
      </h3>
      <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap">
        <SkillBadge skills={skills} />
      </div>
    </div>
  );
};

export default SkillCard;