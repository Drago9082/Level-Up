import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { AuthContext } from "./context/Auth.js";
import globalContext from "./contexts/globalContext";

//need this to set cookies
axios.defaults.withCredentials = true;

function App() {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [user, setUser] = userState({});

  async function getLogged() {
    const loggedResponse = await axios.get("/api/user/loggedIn");
    setLoggedIn(loggedResponse.data);
  }

  useEffect(() => {
    getLogged();
  }, []);

  return (
    //We set the router in the authContext to provide context...
    <globalContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </globalContext.Provider>
  );
}

export default App;
