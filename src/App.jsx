import "./App.css";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { useContext, useEffect } from "react";
import { SignInContext } from "./context/SignInContext";
import LoadingSpinner from "./components/loader/LoadingSpinner";
import { HandleProcessesContext } from "./context/HandleProcessesContext";
import "@fontsource/roboto/300.css";
import { Box, Container } from "@mui/material";

function App() {
  const { setIsSignedIn } = useContext(SignInContext);
  const { isLoading, setIsLoading } = useContext(HandleProcessesContext);
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) setIsSignedIn(true);
      else setIsSignedIn(false);
      setIsLoading(false);
    });
  }, []);
  return (
    <Box height="100vh" display="flex" flexWrap="wrap">
      <Router>
        {isLoading && <LoadingSpinner />}
        <Navbar />
        <Container
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<h1>this is home page route</h1>} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/tasks/important-and-urgent"
              element={<h1>this is important-and-urgent</h1>}
            />
            <Route
              path="/tasks/important-not-urgent"
              element={<h1>this is important-not-urgent</h1>}
            />
            <Route
              path="/tasks/urgent-not-important"
              element={<h1>this is urgent-not-important</h1>}
            />
            <Route
              path="/tasks/not-important-and-not-urgent"
              element={<h1>this is not-important-and-not-urgent</h1>}
            />
          </Routes>
        </Container>
      </Router>
    </Box>
  );
}

export default App;
