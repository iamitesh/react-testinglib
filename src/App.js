import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Content from "./Content";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="heading">Test React App</h1>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/content" element={<Content />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
