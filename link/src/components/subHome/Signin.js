import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../../context/LoginContext";

function Signin({ space,setLoggedUser }) {
  const { setUserLogin } = useContext(LoginContext);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
    if (token) {
      navigate("/loggeduser");
    }
  }, [token, navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!emailOrUsername || !password) {
      return notifyA("Please enter both email/username and password.");
    }

    // Sending data to server
    fetch("/api/admin/backend/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailOrUsername,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          notifyB(data.message);
          setUserLogin(true);
          navigate("/loggeduser");
          localStorage.setItem("jwt", data.token);
          setLoggedUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          notifyA(data.error);
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
        notifyA("Server Error");
      });
  };

  return (
    <div>
      <div className={`container register `}>
        <div className={`card_container ${!space ? "" : "open"}`}>
          <div className="card col-md-4 p-3">
            <div className="register_title">
              <h1>Welcome Back</h1>
              <h3 className="banner_text_span">Sign In</h3>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label className="register_input_title">Email or Username</label>
                <input
                  className="register_input"
                  placeholder="Email or Username"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  type="text"
                />
              </div>
              <div>
                <label className="register_input_title">Password</label>
                <input
                  className="register_input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>
              <div className="log_btn">
                <input
                  type="submit"
                  className="register_btn btn my-2"
                  value="Sign In"
                />
              </div>
            </form>
            <Link to="/forgot/password">Forgot password?</Link>
            <div>
              New user <Link to="/signup">Register</Link> here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
