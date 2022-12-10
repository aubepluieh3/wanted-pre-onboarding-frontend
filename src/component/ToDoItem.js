import styled from "styled-components";
import { api } from "../api/api";
import { useState } from "react";

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 7px 0px;
  align-items: center;
  height: 50px;
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

const TextInput = styled.input`
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
  const [isEdit, setIsEdit] = useState(false);
  const [newToDo, setNewToDo] = useState(toDo.todo);

  const onEdit = (e) => {
    setIsEdit(true);
  };

  const onBack = (e) => {
    setIsEdit(false);
  };

  const onChange = (e) => {
    setNewToDo(e.target.value);
  };

  const onUpdate = (id) => {
    api
      .put(
        `/todos/${id}`,
        {
          todo: newToDo,
          isCompleted: toDo.isCompleted,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setToDos(
          toDos.map((toDo) =>
            toDo.id === id ? { ...toDo, todo: newToDo } : toDo
          )
        );
      })
      .then(() => {
        onBack();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {isEdit ? (
        <Item>
          <Complete>{toDo.isCompleted ? "완료" : "진행중"}</Complete>
          <TextInput onChange={onChange} defaultValue={toDo.todo}></TextInput>
          <Btns>
            <Btn onClick={onBack}>취소</Btn>
            <Btn onClick={() => onUpdate(toDo.id)}>수정</Btn>
          </Btns>
        </Item>
      ) : (
        <Item>
          <Complete>{toDo.isCompleted ? "완료" : "진행중"}</Complete>
          <Text>{toDo.todo}</Text>
          <Btns>
            <Btn onClick={onEdit}>수정</Btn>
            <Btn>삭제</Btn>
          </Btns>
        </Item>
      )}
    </div>
  );
};
export default ToDoItem;
