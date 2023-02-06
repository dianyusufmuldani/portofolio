import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Skills from "./pages/skills";
import SocialMedia from "./pages/socialmedia";
import { ThemeProvider } from "@material-ui/styles";
import { Helmet } from "react-helmet";

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DIAN YUSUF MULDANI</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Social Media" element={<SocialMedia />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
