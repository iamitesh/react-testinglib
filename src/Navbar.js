import "./App.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2 className="logo">CB</h2>
        <div className="tabs">
          <Link className="login-tab" to="/">
            Login
          </Link>
          <Link className="content-tab" to="/content">
            Content
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
