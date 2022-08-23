import "./App.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2 className="logo">CB</h2>
        <div className="tabs">
          <a className="login-tab" href="/">
            Login
          </a>
          <a className="content-tab" href="/content">
            Content
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
