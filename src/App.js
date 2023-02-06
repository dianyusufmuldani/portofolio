import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Skills from "./pages/skills";
import SocialMedia from "./pages/socialmedia";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Social Media" element={<SocialMedia />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
