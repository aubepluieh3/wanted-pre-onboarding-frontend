import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 500px;
`;

const Main = ({ toDos, setToDos }) => {
  return (
    <Container>
      <CreateToDo toDos={toDos} setToDos={setToDos} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </Container>
  );
};

export default Main;
