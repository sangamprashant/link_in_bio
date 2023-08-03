import React from 'react'
import "./css/NavBar.css"
import { Link } from 'react-router-dom'

function Navbar({mainComponent,username}) {
  console.log(mainComponent)
  return (
    <div>
      <nav class="navbar bg_body_nav nav_bar">
  <div class="container-fluid">
  {mainComponent?<Link class="nav_main_title" to="/username">
  <i className='fa fa-user'></i>
   {username}
    </Link>:
    <Link class="nav_main_title" to="/">
    <i className='fa fa-home'></i>
     GetConnect
    </Link>}
    <form class="d-flex col-md-4" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      
    <ul>
        <Link class="nav-item" to="signin"> <a class="nav-link">Signin</a></Link>
        <Link class="nav-item" to="signup"><a class="nav-link">Signup</a></Link>
    </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
