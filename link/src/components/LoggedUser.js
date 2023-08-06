import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ac from "./img/user.png"

function LoggedUser({ setMainComponent, setUsername, isSearch, setIsSearch, loggedUser }) {
  const [dataIn, setDataIn] = useState(loggedUser);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (dataIn) {
      setMainComponent(true);
      setUsername(dataIn.username);
      setIsSearch(false);
      fetch(`http://localhost:5000/api/user/${dataIn.username}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            // Handle user not found
            console.log(data.error);
            setUser(null);
          } else {
            // User found, set the user state
            setUser(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    }
  }, [dataIn, setMainComponent, setUsername, setIsSearch]);

  const handleNameChange = (e) => {
    setDataIn((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  };

  const handleBioChange = (e) => {
    setDataIn((prevData) => ({
      ...prevData,
      bio: e.target.value,
    }));
  };

  return (
    <div className='main' >
      {dataIn && (
        <div>
          <div className='userDetails'>
            <div className='user_pic col-md-4'><img src={dataIn.avatar ? dataIn.avatar : ac} alt="User Profile" /> </div>

            <div className='user_username '><p>{dataIn.username} </p></div>
            <div className='user_email'><p>{dataIn.email} </p></div>
            <label className=' col-md-4 px-3'>Name</label>
            <div className='user_name  col-md-4'>
              <input value={dataIn.name} onChange={handleNameChange} placeholder='name' required={true} />
            </div>
            <label className=' col-md-4 px-3'>Bio</label>
            <div className='user_bio col-md-4'>
              <textarea value={dataIn.bio} onChange={handleBioChange} placeholder='Bio'></textarea>
            </div>
          </div>
        <div className='social_links'>
        {dataIn.socialLinks.map((social) => (
              <div key={social.id} className='col-md-4 m-2'>
                <Link className='card px-3' to={social.link} target='_blank'>
                  <h2><i className={social.icon}></i></h2>
                  <div className='social_name'><h1>{social.name}</h1></div>
                </Link>
              </div>
            ))}
            <div className='col-md-4 m-2'>
            <div className='input'><div className='card px-3'>
              <div className='social_link_input'> <input className='link_input'/> </div>
              <div className='social_link_input'><input className='link_input'/></div>
              <div className='social_link_input'><input className='link_input' /></div>
              </div>  </div>
            
          </div>
          <div className='col-md-4 m-2'>
            <Link className='card px-3' >
              <div className='social_name'><h1>+</h1></div>
            </Link>
          </div>
          <div className='col-md-4 m-2'>
            <Link className='card px-3'  >
              <div className='social_name'><h1>Cancel</h1></div>
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
      </div>)}
    </div>
  );
}

export default LoggedUser;
