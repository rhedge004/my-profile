import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
    text-align: left;
`;

export const ContentHeader = styled.div`
    border: 1px white solid;
    border-bottom-right-radius: 25px;
    padding: 5px;
    margin: 10px 0;
    background: #3c88c6;
    color: white;
    font-size: 20px;
    width: 250px;
    line-height: 0;
`

export const SkillsContainer = styled.div`
    display: flex;
    overflow: auto;
    white-space: nowrap;
    max-width: 100vw;
`;