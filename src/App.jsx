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
    <div>
      <Router>
        {isLoading && <LoadingSpinner />}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="pt-2 p-10 text-3xl font-bold underline">
                this is home page route
              </h1>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
