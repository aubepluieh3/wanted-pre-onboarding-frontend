import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const List = styled.li`
  line-style: none;
  margin: 5px 10px;
  display: flex;
  flex-direction: column;
`;

function ToDoList({ toDos, setToDos }) {
  const access_token = localStorage.getItem("token");

  return (
    <List>
      {toDos &&
        toDos.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            toDos={toDos}
            setToDos={setToDos}
            token={access_token}
          />
        ))}
    </List>
  );
}
export default ToDoList;
