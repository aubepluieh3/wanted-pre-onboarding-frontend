import styled from "styled-components";
import { api } from "../api/api";

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 7px 0px;
  align-items: center;
`;

const Complete = styled.div`
  color: #0070f3;
  font-size: 7px;
  font-weight: bold;
  margin-left: 10px;
  width: 30px;
`;
const Text = styled.div`
  margin-left: 10px;
  width: 130px;
  text-align: center;
`;

const Btns = styled.div`
  display: flex;
  margin-left: 5px;
`;

const Btn = styled.button`
  background-color: #0070f3;
  height: 30px;
  color: white;
  border: none;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
  margin-right: 3px;
`;

const ToDoItem = ({ toDo, toDos, setToDos, token }) => {
  return (
    <Item>
      <Complete>{toDo.isCompleted ? "완료" : "진행중"}</Complete>
      <Text>{toDo.todo}</Text>
      <Btns>
        <Btn>수정</Btn>
        <Btn>삭제</Btn>
      </Btns>
    </Item>
  );
};
export default ToDoItem;
