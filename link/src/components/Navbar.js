import React, { useContext } from 'react';
import "./css/NavBar.css";
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from "../context/LoginContext";

function Navbar({ login, mainComponent, setMainComponent, username, setIsSearch, isSearch, loggedUser }) {
  const navigate = useNavigate();
  const { setUserLogin } = useContext(LoginContext);
  const handleSignOut = () => {
    setIsSearch(false); 
    setMainComponent(true);
    setUserLogin(false);
    // Clear local storage
    localStorage.clear();
    // Navigate to the home page
    navigate("/");
  };

  const optionShow = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return (
        <>
          <Link className="nav-item" to="/loggeduser" onClick={() => { setIsSearch(false); setMainComponent(true); }}>
            <a className="nav-link">Update</a>
          </Link>
          <div className="nav-item" onClick={() => { handleSignOut() }}>
            <a className="nav-link">SignOut</a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link className="nav-item" to="/signin" onClick={() => { setIsSearch(false); setMainComponent(false); }}>
            <a className="nav-link">Signin</a>
          </Link>
          <Link className="nav-item" to="/signup" onClick={() => { setIsSearch(false); setMainComponent(false); }}>
            <a className="nav-link">Signup</a>
          </Link>
        </>
      );
    }
  };

  return (
    <div>
      <nav className="navbar bg_body_nav nav_bar">
        <div className="container-fluid">
          {mainComponent ? (
            <Link className="nav_main_title" to={`/${username}`}>
              <i className='fa fa-user'></i>
              {username}
            </Link>
          ) : (
            <Link className="nav_main_title" to="/">
              <i className='fa fa-home'></i>
              GetConnect
            </Link>
          )}
          {!isSearch && (
            <Link className="d-flex col-md-4" role="search" to="/search" onClick={() => { setIsSearch(true); setMainComponent(false);}}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </Link>
          )}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul>
            <Link className="nav-item" to="/iconadd" onClick={() => { setIsSearch(false); setMainComponent(false); }}>
            <a className="nav-link">Add icon</a>
          </Link>
              {optionShow()}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
