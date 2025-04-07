import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import SignIn from "./Screens/Signin";
import Navbar from "./Components/Navbar";
import './App.css';
function App() {
  return (
    <Router>
      {/* Navbar at the top */}
      <Navbar />

      {/* Ensure the content is visible and properly spaced */}
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
