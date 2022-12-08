import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Todo from "./routes/Todo";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
