import React from "react";
import Resume from "react-resume-component";
import profileImage from "/images/home-profile.jpg";
 
const ResumePage = () => {
    return (
        <>
        <Resume
    name="Nasirullah Oladipo"
    firstName="Nasirullah"
    tel="+234 901 106 6748"
    email="softcruder@gmail.com"
    address="Remote, Nigeria"
    linkedInAccount="@nasirullah-oladipo"
    githubAccount="@softcruder"
    profileImage={profileImage}
    summary="Tony is a brilliant engineer who strives to success for the benefit of the company and the society"
    profession="Frontend Engineer"
    skills={[
      { name: "Electronics", level: 5 },
      { name: "Programming", level: 5 },
      { name: "Machine Learning", level: 5 },
      { name: "Physics", level: 5 },
      { name: "Leadeship", level: 4 }
    ]}
    experiences={[
      {
        company: "Stark Industries",
        period: "1971 - present",
        title: "CEO",
        description: (
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )
      }
    ]}
    education={[
      {
        school: "AltSchol Africa",
        department: "Software Engineering",
        degree: "Diploma",
        period: "2022-2023"
      },
      {
        school: "Federal University of Technology, Minna",
        department: "Computer Science",
        degree: "Bachelor's of Technology",
        period: "2019-2025"
      }
    ]}
    miscSection={
      <p
        className="description"
        style={{ position: "absolute", bottom: "0em", fontSize: "8px" }}
      >
        This resume was made with react-resume-component.
        <a href="https://github.com/rjkokko/react-resume-component.git">
          {" "}
          github.com/rjkokko/react-resume-component
        </a>
      </p>
    }
  />
  </>
    )
};

export default ResumePage;