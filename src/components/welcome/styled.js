import styled from "styled-components";

export const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: left;
`
export const WelcomeHeader = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 3vw;
    line-height: 0px;
    color: white;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const WelcomeSubheader = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 1.5vw;
    line-height: 0;
    color: #D9D9D9;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const ProfileParagraph = styled.p`
    font-family: 'Quicksand', sans-serif;
    text-align: left;
    text-justify: inter-word;
    font-size: 1vw;
    margin-left: 10px;
    line-height: 1vw;
    color:  white;
    @media (max-width: 768px) {
        font-size: 10px;
        line-height: 10px;
    }
`;

export const ProfileImage = styled.img`
    flex-shrink: 0;
    height: auto;
    width: 15vw;
    object-fit: cover;
    border-radius: 5px;
    margin: 20px;
    @media (max-width: 768px) {
        width: 20vw;
        margin: 5px;
    }
`