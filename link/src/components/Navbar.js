import React from 'react';
import "./css/NavBar.css";
import { Link } from 'react-router-dom';

function Navbar({ mainComponent, setMainComponent, username, setIsSearch, isSearch }) {
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
            <Link className="d-flex col-md-4" role="search" to="/search" onClick={() => { setIsSearch(true);  setMainComponent(false);}}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </Link>
          )}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">

            <ul>
              <Link className="nav-item" to="/signin" onClick={() => { setIsSearch(false); setMainComponent(false); }}>
                <a className="nav-link">Signin</a>
              </Link>
              <Link className="nav-item" to="/signup" onClick={() => { setIsSearch(false); setMainComponent(false); }}>
                <a className="nav-link">Signup</a>
              </Link>
              <Link className="nav-item" to="/loggeduser" onClick={() => { setIsSearch(true); setMainComponent(true); }}>
                <a className="nav-link">Update</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
