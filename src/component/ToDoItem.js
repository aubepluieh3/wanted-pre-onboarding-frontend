import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.div``;

const ToDoItem = ({ toDo, toDos, setToDos, token }) => {
  return (
    <Item>
      <Text>{toDo.todo}</Text>
    </Item>
  );
};
export default ToDoItem;
