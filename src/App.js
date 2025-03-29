import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import SignIn from "./Screens/Signin";
import Navbar from "./Components/Navbar";
import ContactUs from "./Screens/contact";

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
          <Route path="/ContactUs" element={<ContactUs />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
