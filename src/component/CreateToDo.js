import styled from "styled-components";
import { api } from "../api/api";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Write = styled.input`
  border: none;
  border-bottom: 1px solid;
  margin-right: 5px;
  text-align: center;
`;

const AddBtn = styled.button`
  background-color: #0070f3;
  height: 30px;
  color: white;
  border: none;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const CreateToDo = ({ toDos, setToDos }) => {
  const [newToDo, setNewToDo] = useState("");
  const access_token = localStorage.getItem("token");

  const onAddToDo = (e) => {
    e.preventDefault();
    api
      .post(
        "/todos",
        {
          todo: newToDo,
        },
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      )
      .then((res) => {
        setToDos([...toDos, res.data]);
        setNewToDo("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <form onSubmit={onAddToDo}>
        <Write
          onChange={(e) => {
            setNewToDo(e.target.value);
          }}
          placeholder={"Please write a To Do"}
          value={newToDo}
        ></Write>
        <AddBtn>Add</AddBtn>
      </form>
    </Container>
  );
};

export default CreateToDo;
