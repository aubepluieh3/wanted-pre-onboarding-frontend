import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Email = styled.input``;
const Password = styled.input``;
const Btn = styled.button;

// 로그인 / 회원가입
//이메일 입력창, 비밀번호 입력창, 제출 버튼
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //errorMessage: "An account with this username does not exists."

  const onClick = () => {};

  return (
    <Container>
      <Email placeholder="Email" type="email" required></Email>
      <Password placeholder="Password" minLength={8} required></Password>
      <Btn onClick={onClick}>Log In</Btn>
    </Container>
  );
}
