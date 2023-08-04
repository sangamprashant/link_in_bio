import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Main({setMainComponent,setUsername,isSearch,setIsSearch}) {
  const ac = "https://avatars.githubusercontent.com/u/93257774?v=4";
  const av = "https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?pid=ImgDet&rs=1";
  const { username } = useParams();
  useEffect(()=>{
    setMainComponent(true);
    setUsername(username);
    setIsSearch(false)
  },[username])

  return (
    <div className='main' >
      <div>
        <div className='userDetails'>
          <div className='user_pic col-md-4'><img src={ac} alt="User Profile" /></div>
          <div className='user_name'><h1 >Prashant Srivastav</h1></div>
          <div className='user_email'><h5>srivastavprashant.ps.official@gmail.com</h5></div>
          <div className='user_username'><p>sangam_prashant</p></div>
          <div className='user_bio'><p>Bio df ergb erverth rb3thdf rthg wth wrg w5yh rg wrt hwre fg weth wg wr</p></div>
        </div>
        <div className='social_links'>
          <div className='col-md-4 m-2'>
            <Link className='card px-3' to="/">
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </Link>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
          <div className='col-md-4 m-2'>
            <div className='card px-3'>
              <h2><i className='fab fa-instagram'></i></h2>
              <div className='social_name'><h1>Instagram</h1></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
