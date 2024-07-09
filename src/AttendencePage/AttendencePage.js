import React, { useEffect, useState } from "react";
import "./attend.css";
import ReportView from "../ReportView/ReportView";
import axios from "axios";

const AttendencePage = () => {
  const [isToggled, setIsToggled] = useState(true);
  const [signInTime ,setSignInTime] = useState([])
  const [signOutTime ,setSignOutTime] = useState([])

  const toggleButton = () => {
    setIsToggled(!isToggled);
    
  };


  useEffect(() => {
    const SignInTime = async () => {
      if (isToggled) {
        const responseSignIn = await axios.post(
          "http://localhost:5000/api/attendence/signin"
        );
        console.log("sign in time: ", responseSignIn.data);
        setSignInTime(responseSignIn.data)
      } else {
        const responseSignOut = await axios.post(
          "http://localhost:5000/api/attendence/signout"
        );
        console.log("sign out time: ", responseSignOut.data);
        setSignOutTime(responseSignOut.data)
      }
    };
    SignInTime()
  }, [isToggled]);

  return (
    <div className="container">
      <button
        className={isToggled ? "sign-button" : "sign-out"}
        onClick={toggleButton}
      >
        {isToggled ? "SignIn" : "SighOut"}
      </button>

      <div>
      {signInTime.map((items, index) => (
        <div key={index}>{items} </div>
      ))}
      </div>
    </div>
  );
};

export default AttendencePage;
