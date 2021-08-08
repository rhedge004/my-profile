import React from "react";
import { WelcomeContainer, WelcomeHeader, WelcomeSubheader, ProfileImage, ProfileParagraph } from "./styled";
import profileImage from "../../assets/profile-image.jpg";

const Welcome = () => {
  return (
    <WelcomeContainer>
        <div>
            <ProfileImage src={profileImage} alt="Profile"/>
        </div>
        <div>
            <WelcomeHeader>Rhedge Michael Navarro</WelcomeHeader>
            <WelcomeSubheader>Frontend Developer</WelcomeSubheader>
            <ProfileParagraph>I am a Front-end Developer for more than 2 years. 
              Mainly using ReactJS, I am responsible for for designing and implementing UI components for JavaScript-based web applications and mobile applications.</ProfileParagraph>
        </div>
    </WelcomeContainer>
  );
}

export default Welcome;
