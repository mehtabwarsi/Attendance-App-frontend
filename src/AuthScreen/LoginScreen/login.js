import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  console.log(data);
  // second approch
  const AuthLogin = () => {
    try {
      if ((username && password) === "") {
        return setError(true);
      }
      if (password === data.password) {
        console.log("password is mached");
        navigate("/attendence");
      } else {
        setError("incorrect password");
      }
      if (username && password === "admin") {
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            username: username,
            password: password,
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [password, username]);

  // for admin
  // useEffect(() => {
  //   if (username === "admin" && password === "admin") {
  //     navigate("/admin");
  //   }
  // }, [username, password]);

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(ev) => setUsername(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={AuthLogin}
          value={"Log in"}
        />
        {error === true && <p> all filds are required !!!</p>}
      </div>

      <h3>
        <Link to={"/register"}>Register</Link>
      </h3>
    </div>
  );
};

export default Login;
