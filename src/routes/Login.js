import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding: 10px;
`;

export const Email = styled.input`
  margin: 5px 0px;
  height: 30px;
`;
export const Password = styled.input`
  margin: 5px 0px;
  height: 30px;
`;
export const Btn = styled.button`
  margin: 5px 0px;
  height: 30px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 15px;
`;

const Join = styled.div`
  display: flex;
  font-size: 13px;
`;
const Txt = styled.div``;

// 로그인 / 회원가입
//이메일 입력창, 비밀번호 입력창, 제출 버튼
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogIn = (e) => {
    e.preventDefault();
    api
      .post("/auth/signin", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.access_token);
        navigate("/todo");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Email
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
        value={email}
      ></Email>
      <Password
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        minLength={8}
        required
        value={password}
      ></Password>
      <Btn onClick={onLogIn}>Log In</Btn>
      <Join>
        <Txt>회원이 아닌신가요? </Txt>
        <Link to="/signup"> Sign Up</Link>
      </Join>
    </Container>
  );
}
