import styled from "styled-components";

export const TasksBodyContainer = styled.div`
  margin-top: 70px;
  background-color: #e5e5e5;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-left: 17px;
    margin-top: 28px;
  }

`;

export const HabitsText = styled.p`
      width: 338px;
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${props => props.color};
    margin-right: 18px;
    margin-left: 17px;
    margin-bottom: 28px;
`

