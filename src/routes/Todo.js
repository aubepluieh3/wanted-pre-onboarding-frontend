import Main from "../component/Main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;
const Title = styled.div`
  font-size: 30px;
  margin: 50px 0px 15px 0px;
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
      <Main />
    </Container>
  );
}
