import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const history = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handling the input fields
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handling the form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(user);

    console.log(user);
  };


  // async function submit(e) {
  //   e.preventDefault();

  //   // try {
  //   //   await axios
  //   //     .post("http://localhost:8080/", {
  //   //       email,
  //   //       password,
  //   //     })
  //   //     .then((res) => {
  //   //       if (res.data == "exist") {
  //   //         history("/dashboard", { state: { id: email } });
  //   //       } else if (res.data == "notexist") {
  //   //         alert("User Not Exists !!");
  //   //       }
  //   //     })
  //   //     .catch((e) => {
  //   //       alert("Wrong Credentials !!");
  //   //       console.log(e);
  //   //     });
  //   // } catch (e) {
  //   //   console.log(e);
  //   // }
  // }

  return (
    <div className="signin">
      <h3>Login Page</h3>

      <>
        <form action="POST" onSubmit={handleSubmit}>
          <div className="signin_form_layout">
            <div className="signin_form">
              <label htmlFor="email" className="signin_label">
                User Name
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div className="signin_form">
              <label htmlFor="password" className="signin_label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                id="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
          </div>
          <button type="submit" className="signin_btn">
            Login
          </button>
        </form>
      </>
    </div>
  );
};

export default Signin;
