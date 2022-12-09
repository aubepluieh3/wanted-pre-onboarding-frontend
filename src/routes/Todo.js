import CreateToDo from "../component/CreateToDo";
import ToDoList from "../component/ToDoList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  margin: 15px 0px;
  font-weight: bold;
`;

export default function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    const log = localStorage.getItem("token");
    if (!log) {
      navigate("/");
    }
  });

  return (
    <Container>
      <Title>To Do List 📝 </Title>
      <CreateToDo />
      <ToDoList />
    </Container>
  );
}
