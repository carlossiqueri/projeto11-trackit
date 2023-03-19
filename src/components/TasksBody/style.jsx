import styled from "styled-components";

export const TasksContainer = styled.div`
  width: 90%;
  height: 94px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: 17.5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-top: 13px;
    margin-left: 15px;
    margin-bottom: 7px;
  }

  span {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    margin-left: 15px;
  }
`;

export const CheckButton = styled.button`
  width: 69px;
  height: 69px;
  position: absolute;
  top: 13px;
  right: 13px;
  background: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
