import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8080/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/dashboard", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User Not Exists !!");
          }
        })
        .catch((e) => {
          alert("Wrong Credentials !!");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="signin">
      <h3>Login Page</h3>

      <>
        <form action="POST">
          <div className="signin_form_layout">
            <div className="signin_form">
              <label htmlFor="email" className="signin_label">
                User Name
              </label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Email"
              />
            </div>
            <div className="signin_form">
              <label htmlFor="password" className="signin_label">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password"
              />
            </div>
          </div>
          <button type="submit" className="signin_btn" onClick={submit}>
            Login
          </button>
        </form>
      </>
    </div>
  );
};

export default Signin;
