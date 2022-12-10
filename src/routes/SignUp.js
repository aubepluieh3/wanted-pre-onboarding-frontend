import { api } from "../api/api";
import { Container, Email, Password, Btn, Message } from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    if (!currentEmail.includes("@") && !(currentEmail.length === 0)) {
      setEmailMessage("@를 포함하여 이메일을 입력하세요!");
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

  const onConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    if (password === confirmPassword) {
      setConfirmMessage("");
      setIsConfirm(true);
    } else {
      setConfirmMessage("비밀번호가 일치하지않습니다.");
      setIsConfirm(false);
    }
    setConfirm(confirmPassword);
  };

  const onSignUp = (e) => {
    e.preventDefault();

    api
      .post("/auth/signup", {
        email,
        password,
      })
      .then((res) => {
        const { access_token } = res.data;
        localStorage.setItem("token", access_token);
        navigate("/");
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
      <Password
        onChange={onConfirmPassword}
        placeholder="Confirm Password"
        type="password"
        minLength={8}
        required
        value={confirm}
      ></Password>
      <Message>{confirmMessage}</Message>
      <Btn onClick={onSignUp} disabled={!(isEmail && isPassword && isConfirm)}>
        Sign Up
      </Btn>
    </Container>
  );
}
