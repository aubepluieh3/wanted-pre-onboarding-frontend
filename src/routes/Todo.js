import Main from "../component/Main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/api";

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
  const [toDos, setToDos] = useState([]);
  const access_token = localStorage.getItem("token");

  useEffect(() => {
    const log = localStorage.getItem("token");
    if (!log) {
      navigate("/");
    }
  });

  useEffect(() => {
    api
      .get("/todos", {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        setToDos(res.data);
      })
      .catch((error) => console.log(error));
  }, [access_token]);

  return (
    <Container>
      <Title>To Do List 📝 </Title>
      <Main toDos={toDos} setToDos={setToDos} />
    </Container>
  );
}
