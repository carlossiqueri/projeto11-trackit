import styled from "styled-components";
export const HabitsFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 26px;

    color: #52b6ff;
  }
`;

export const TodayButton = styled.button`
  width: 91px;
  height: 91px;
  border-radius: 100%;
  position: relative;
  bottom: 30px;
  border: none;
  background-color: #52b6ff;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;

  color: #ffffff;
`;
