import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../../context/LoginContext";

function Register({ space, setLoggedUser }) {
  const { setUserLogin } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    if (!email || !password || !name || !username || !confirmPassword) {
      return notifyA("Please enter all fields.");
    }

    if (password !== confirmPassword) {
      return notifyA("Passwords do not match.");
    }

    // Sending data to server
    fetch("http://localhost:5000/api/admin/backend/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          notifyB(data.message);
          setUserLogin(true);
          navigate("/loggeduser");
          localStorage.setItem("jwt", data.token);
          setLoggedUser(JSON.stringify(data.user));
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          notifyA(data.error);
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        notifyA("Server Error");
      });
  };

  return (
    <div>
      <div className={`container register `}>
        <div className={`card_container ${!space ? "" : "open"}`}>
          <div className='card col-md-4 p-3'>
            <div className='register_title'>
              <h1>Register</h1>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label className='register_input_title'>Full Name</label>
                <input
                  className='register_input'
                  placeholder='Full Name'
                  name='fullname'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className='register_input_title'>Username</label>
                <input
                  className='register_input'
                  placeholder='Username'
                  name='username'
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className='register_input_title'>Email</label>
                <input
                  className='register_input'
                  placeholder='Email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className='register_input_title'>Password</label>
                <input
                  className='register_input'
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className='register_input_title'>Confirm Password</label>
                <input
                  className='register_input'
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className='log_btn'>
                <input
                  type='submit'
                  className='register_btn btn my-2'
                  value='Register'
                />
              </div>
            </form>
            <Link to="/forgot/password">Forgot password?</Link>
            <div>
              Already having an account? <Link to="/signin">Signin</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
