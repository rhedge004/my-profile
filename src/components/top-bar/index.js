import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { TopBarContainer, LogosContainer } from "./styled";

const TopBar = () => {
  return (
    <TopBarContainer>
        <div>
            <LogosContainer>
                <div>
                    <a href="https://github.com/rhedge004" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/rhedge004/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                </div>
            </LogosContainer>
        </div>
        <div>
            <p>Contact</p>
        </div>
    </TopBarContainer>
  );
}

export default TopBar;
