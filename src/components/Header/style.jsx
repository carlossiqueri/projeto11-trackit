import styled from "styled-components";

export const HabitsHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #126ba5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
  }

  p {
    font-family: "Playball";
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #ffffff;
    margin-left: 18px;
  }
`;
