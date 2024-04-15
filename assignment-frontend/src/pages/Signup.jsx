import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [imgUpload, setImgUpload] = useState("");
  const [password, setPassword] = useState("");
  const [employeeType, setEmployeeType] = useState("");

  // Course Section - Checkbox

  const [allChecked, setAllChecked] = React.useState([]);
  function handleChange(e) {
    if (e.target.checked) {
      setAllChecked([...allChecked, e.target.value]);
    } else {
      setAllChecked(allChecked.filter((item) => item !== e.target.value));
    }
  }

  // Designation Section - Dropdown

  const options = [
    {
      label: "Select Designation",
      value: "Select Designation",
    },
    { label: "HR", value: "hr" },

    { label: "Manager", value: "manager" },

    { label: "Sales", value: "sales" },
  ];

  const [value, setValue] = React.useState("Select Designation");

  const handleDesignationChange = (event) => {
    setValue(event.target.value);
  };

  async function submit(e) {
    e.preventDefault();

    console.log(name, email, mobile, designation, gender, course, password);

    try {
      await axios
        .post("http://localhost:8080/create", {
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
      <h3>Create Employee</h3>

      <>
        <form action="POST" onSubmit={submit}>
          <div className="form_radio_btn">
            <input
              type="radio"
              name="EmployeeType"
              value="Employee"
              className="employee_radio_btn"
              onChange={(e) => setEmployeeType(e.target.value)}
              style={{ cursor: "pointer" }}
            />{" "}
            Employee
            <input
              type="radio"
              name="EmployeeType"
              value="Admin"
              className="admin_radio_btn"
              onChange={(e) => setEmployeeType(e.target.value)}
              style={{ cursor: "pointer" }}
            />{" "}
            Admin
          </div>
          <div className="signin_form_layout">
            <div className="signin_form">
              <label htmlFor="email" className="signin_label">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="signin_form">
              <label htmlFor="email" className="signin_label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="signin_form">
              <label htmlFor="password" className="signin_label">
                Mobile No
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </div>

            {/* Designation Section - Dropdown */}
            <div className="signin_form">
              {/* <label htmlFor="password" className="signin_label">
                Designation
              </label>
              <input
                type="dropdown"
                placeholder="Select Designation"
                onChange={(e) => {
                  setDesignation(e.target.value);
                }}
              /> */}

              <label htmlFor="password" className="signin_label">
                Designation
                <select
                  value={value}
                  className="signin_dropdown"
                  onChange={handleDesignationChange}
                >
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>

            {/* Gender Section - Radio Button */}
            <div
              className="signin_form"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
              /*onChange={this.setGender.bind(this)}*/
            >
              <label htmlFor="email" className="signin_label">
                Gender
              </label>
              <div
                style={{
                  blockSize: "20px",
                  marginLeft: "20px",
                  marginTop: "30px",
                }}
                className="signin_radiobutton"
              >
                <input
                  type="radio"
                  value="MALE"
                  name="gender"
                  style={{ marginLeft: "30px", cursor: "pointer" }}
                />{" "}
                Male
                <input
                  type="radio"
                  value="FEMALE"
                  name="gender"
                  style={{ marginLeft: "30px", cursor: "pointer" }}
                />{" "}
                Female
                <input
                  type="radio"
                  value="FEMALE"
                  name="gender"
                  style={{ marginLeft: "30px", cursor: "pointer" }}
                />{" "}
                Prefer Not to Say
              </div>
            </div>

            {/* Course Section - Checkbox */}
            <div
              className="signin_form"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              <label htmlFor="course" className="signin_label">
                Course
              </label>
              <div
                style={{
                  marginLeft: "20px",
                  marginTop: "30px",
                  marginBottom: "5px",
                }}
                className="signin_checkbox"
              >
                <input
                  value="One"
                  type="checkbox"
                  style={{ marginLeft: "30px", cursor: "pointer" }}
                  onChange={handleChange}
                />
                <span> MCA </span>

                <input
                  value="Two"
                  type="checkbox"
                  style={{ marginLeft: "30px", cursor: "pointer" }}
                  onChange={handleChange}
                />
                <span> BCA </span>

                <input
                  value="Three"
                  type="checkbox"
                  style={{ marginLeft: "30px", cursor: "pointer" }}
                  onChange={handleChange}
                />
                <span> BSC </span>
              </div>
            </div>

            {/* Image Upload Section */}

            {/* <div className="signin_form">
            <label htmlFor="imgUpload" className="signin_label">
              Image Upload
            </label>
            <input
              type="image"
              onChange={(e) => {
                setImgUpload(e.target.value);
              }}
              placeholder="Upload Image"
            />
          </div> */}

            {/* Showing Password Field for Admin Only */}
            {employeeType == "Admin" ? (
              <div className="signin_form">
                <label htmlFor="password" className="signin_label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            ) : null}
          </div>

          <button type="submit" className="signin_btn" onClick={submit}>
            Submit
          </button>
        </form>
      </>
    </div>
  );
};

export default Signup;
