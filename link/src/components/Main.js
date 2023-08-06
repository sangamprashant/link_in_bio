import React, { useEffect , useState} from 'react';
import { Link, useParams } from 'react-router-dom';

import ac from "./img/user.png"

function Main({setMainComponent,setUsername,isSearch,setIsSearch}) {

  const [user, setUser] = useState(null);
  const { username } = useParams();
  useEffect(()=>{
    setMainComponent(true);
    setUsername(username);
    setIsSearch(false);
    fetch(`http://localhost:5000/api/user/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          // Handle user not found
          console.log(data.error);
          setUser(null);
        } else {
          // User found, set the user state
          setUser(data);
          console.log(data)
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  },[username])

  return (
    <div className='main' >
      {user && (
      <div>
        <div className='userDetails'>
          <div className='user_pic col-md-4'><img src={user.avatar?user.avatar:ac} alt="User Profile" /></div>
          <div className='user_name'><h1 >{user.name}</h1></div>
          <div className='user_email'><h5>{user.email}</h5></div>
          <div className='user_username'><p>{user.username}</p></div>
          <div className='user_bio'><p>{user.bio}</p></div>
        </div>
        <div className='social_links'>
        {user.socialLinks.map((social,index) => (
              <div key={index} className='col-md-4 m-2'>
                <Link className='card px-3' to={social.link} target='_blank'>
                  <h2><i className={social.icon}></i></h2>
                  <div className='social_name'><h1>{social.platform}</h1></div>
                </Link>
              </div>
            ))}
        </div>
      </div>)}
    </div>
  );
}

export default Main;
