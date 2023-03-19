import styled from "styled-components";

export const AddHabits = styled.div`
  width: 100%;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-left: 17px;
  }
`;

export const AddHabitsButton = styled.button`
  /*button*/
  width: 40px;
  max-height: 35px;
  background-color: #52b6ff;
  border-radius: 4.63636px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 17px;
  padding-bottom: 5px;
  /*text*/

  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 26px;
  color: #ffffff;
`;

export const Text = styled.p`
  width: 338px;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
  margin-right: 18px;
`;

export const AddContainer = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 29px;
  display: flex;
  flex-direction: column;
  padding-left: 19px;
  span {
    color: #52b6ff;
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
  }
`;

export const AddHabitInput = styled.input`
  width: 90%;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 11px;
  margin-bottom: 6px;
  height: 45px;
  margin-top: 18px;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  &::placeholder {
    color: #dbdbdb;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;

  button {
    background-color: #ffffff;
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-right: 4px;
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    color: #DBDBDB;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


export const ContainerSave = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    height: 50px;
    position: relative;
    top: 20px;
    left: 144px;
    button{
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 15px;
    line-height: 26px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }

`