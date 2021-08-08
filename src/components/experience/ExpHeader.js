import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
`;

const Contents = styled.div`
    color: gray;
    font-size: 15px;
    margin: 0;
    p {
        margin: 0;
    }
`;

const CompanyContainer = styled.div`
    font-size: 20px;
`;

const YearContainer = styled.div`
    padding: 0 20px;
`;

const Year = styled.span`
    background-image: initial;
    background-color: #329bdc;
    color: white;
    border-radius: 4px;
    padding: 4px 8px;
    white-space: nowrap;
`;


const Experiences = ({company, year, description}) => {
  return (
      <Container>
        <Header>
            <CompanyContainer>
                <p>{company}</p>
            </CompanyContainer>
            <YearContainer>
                <Year>{year}</Year>
            </YearContainer>
        </Header>
        <Contents>
            <p>{description}</p>
        </Contents>
    </Container>
  );
}

export default Experiences;
