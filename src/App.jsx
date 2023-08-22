import "./App.css";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>this is home page route</h1>} />
          <Route path="/login" element={<h1>login page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
