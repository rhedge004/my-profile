import React from "react";
import { ExperienceContainer } from "./styled";
import Experiences from "./ExpHeader";

const Experience = () => {
  return (
    <ExperienceContainer>
        <Experiences 
            company={"Cafisglobal Inc. — Frontend Developer"} 
            year={"June 2020 - Present"} 
            description={"Develop/Update responsive Kiosk UI using React. Troubleshoot interface and debug application codes."}
        />
        <Experiences 
            company={"Biarri Optimisations — Frontend React JS Developer"} 
            year={"June 2019 - April 2020"} 
            description={"Develop/Update features, functionalities of web based application using React JS/ React Native."}
        />
        <Experiences 
            company={"Freelance Web Developer — Web Developer"} 
            year={"April 2017 - May 2019"} 
            description={""}
        />
    </ExperienceContainer>
  );
}

export default Experience;
