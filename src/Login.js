import "./App.css";

function Login() {
  return (
    <div>
      <div>This is the Login Form</div>
      <div>
        <div className="section email">
          <label for="email">Email Address</label>
          <input id="email" type="email" name="email"></input>
        </div>
        <div className=" section password">
          <label for="password">Password</label>
          <input id="password" type="password" name="password"></input>
        </div>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}
export default Login;
