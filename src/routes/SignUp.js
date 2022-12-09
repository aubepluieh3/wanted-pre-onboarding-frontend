import { api } from "../api/api";
import { Container, Email, Password, Btn } from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

      <Btn onClick={onSignUp}>Sign Up</Btn>
    </Container>
  );
}
