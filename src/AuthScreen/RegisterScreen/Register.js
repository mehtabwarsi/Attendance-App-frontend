import React, { useState } from "react";
import "../LoginScreen/login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registerStatus, setRegisterStatus] = useState(null); // Track registration status
  const [error, setError] = useState("");
  console.log("runtit",error)

  const storeData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username: username,
          password: password,
          email: email,
          phoneNumber: phoneNumber,
        }
      );
      console.log("post request: ", response.data);
      if (response.data.created === false) {
        setRegisterStatus("error");
      } else if (username && password && phoneNumber && phoneNumber === "") {
        setError("");
      } else {
        setRegisterStatus("success");
        setError("not error");
      }
    } catch (error) {
      console.error("Error registering:", error);
      if (username && password && phoneNumber && phoneNumber === "") {
        setRegisterStatus("error");
      }
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Register</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={username}
          type="text"
          required={true}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className={"inputBox"}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className={"inputBox"}
        />
        <input
          value={email}
          type="text"
          placeholder="Email ID"
          onChange={(e) => setEmail(e.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={phoneNumber}
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={storeData}
          value={"Register"}
        />
      </div>
      {/* Show status message based on registerStatus */}
      {registerStatus === "success" && <p>Registration successful!</p>}
      {registerStatus === "error" && <p>Email is already register.</p>}
      {/* {error === "" && <p> All inputs are required</p>} */}

      <h3>
        <Link to={"/"}>LogIn</Link>
      </h3>
    </div>
  );
};

export default Register;
