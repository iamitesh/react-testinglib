import { useState } from "react";
import "./App.css";

function Login() {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>This is the Login Form</div>
      <form>
        <div className="emailWrapper">
          <div className="section email">
            <label for="email">Email Address</label>
            <input id="email" type="email" name="email" required></input>
          </div>
          <div className="email-err err">Invalid Email</div>
        </div>
        <div className="passwordWrapper">
          <div className=" section password">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={loginInput.password}
              onChange={changeHandler}
              required
            ></input>
          </div>
          <div className="password-err err">Invalid Password</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;
