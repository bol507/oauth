import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Oauth from "./components/Oauth";
import Dashboard from "./components/Dashboard";

import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get(
      "access_token",
    );

    if (param) {
      setToken(param);
      localStorage.setItem("accessToken", param);
    }

    if (localStorage.getItem("accessToken") !== null) {
      console.log(localStorage.getItem("accessToken"));
      setToken(localStorage.getItem("accessToken"));
      axios
        .get("https://api.github.com/user", {
          headers: {
            Authorization: "token " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          setUser(res.data);
          setLoggedIn(true);
          console.log("user", res.data);
          navigate("/Dashboard");
        })
        .catch((error) => {
          console.log("error " + error.message);
        });
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Oauth />} />
        <Route
          path="/dashboard"
          element={<Dashboard user={user} loggedIn={loggedIn} />}
        />
      </Routes>
    </div>
  );
};

export default App;
