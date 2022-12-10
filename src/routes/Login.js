import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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

export const Message = styled.div`
  margin: 3px 0px;
  font-size: 13px;
  color: #0070f3;
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
  &:hover {
    cursor: pointer;
  }
`;

const Join = styled.div`
  display: flex;
  font-size: 13px;
  margin-top: 5px;
`;
const Txt = styled.div``;

// 로그인 / 회원가입
//이메일 입력창, 비밀번호 입력창, 제출 버튼
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const log = localStorage.getItem("token");
    if (log) {
      navigate("/todo");
    }
  });

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    if (!currentEmail.includes("@") && !(currentEmail.length === 0)) {
      setEmailMessage("@를 포함하여 입력하세요!");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
    setEmail(currentEmail);
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    if (currentPassword.length > 0 && currentPassword.length < 8) {
      setPasswordMessage("8자 이상 입력하세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
    setPassword(currentPassword);
  };

  const onLogIn = (e) => {
    e.preventDefault();
    api
      .post("/auth/signin", { email, password })
      .then((res) => {
        const { access_token } = res.data;
        localStorage.setItem("token", access_token);
        navigate("/todo");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Email
        onChange={onChangeEmail}
        placeholder="Email"
        type="email"
        required
        value={email}
      ></Email>
      <Message>{emailMessage}</Message>
      <Password
        onChange={onChangePassword}
        placeholder="Password"
        type="password"
        minLength={8}
        required
        value={password}
      ></Password>
      <Message>{passwordMessage}</Message>
      <Btn onClick={onLogIn} disabled={!(isEmail && isPassword)}>
        Log In
      </Btn>
      <Join>
        <Txt>회원이 아닌신가요? </Txt>
        <Link to="/signup"> Sign Up</Link>
      </Join>
    </Container>
  );
}
