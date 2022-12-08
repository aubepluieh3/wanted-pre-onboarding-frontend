import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./routes/Todo";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
