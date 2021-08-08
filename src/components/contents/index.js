import React from "react";
import { ContentContainer, ContentHeader, SkillsContainer } from "./styled";
import SkillProgress from "./SkillProgress";
import Experience from "../experience";
import Education from "../education";

const Contents = () => {
  return (
    <ContentContainer>
      <div>
        <ContentHeader>
          <p>Skills</p>
        </ContentHeader>
        <SkillsContainer style={{display: "flex"}}>
          <SkillProgress value={80} label={"ReactJS"}/>
          <SkillProgress value={50} label={"React Native"}/>
          <SkillProgress value={70} label={"React Redux"}/>
          <SkillProgress value={70} label={"Typescript"}/>
          <SkillProgress value={80} label={"Javascript"}/>
          <SkillProgress value={100} label={"HTML"}/>
          <SkillProgress value={100} label={"CSS"}/>
          <SkillProgress value={70} label={"PHP"}/>
          <SkillProgress value={80} label={"SQL"}/>
        </SkillsContainer>
      </div>
      <div>
        <ContentHeader>
          <p>Experience</p>
        </ContentHeader>
        <Experience />
      </div>
      <div>
        <ContentHeader>
          <p>Education</p>
        </ContentHeader>
        <Education />
      </div>
    </ContentContainer>
  );
}

export default Contents;
