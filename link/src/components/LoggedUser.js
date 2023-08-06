import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ac from "./img/user.png"
import { toast } from "react-toastify";

function LoggedUser({ setMainComponent, setUsername, isSearch, setIsSearch, loggedUser }) {
  const [dataIn, setDataIn] = useState(loggedUser);
  const [isLinkUpload, setIsLinkUpload] = useState(false);
  const [platformName,setPlatformName] = useState("");
  const [platformLink,setPlatformLink] = useState("");
  const [platformIcon,setPlatformIcon] = useState("");
  const [isDataChanged, setIsDataChanged] = useState(false);
  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const handelshowInputLink = ()=>{
    setIsLinkUpload(!isLinkUpload);
    setPlatformName("")
    setPlatformLink("")
    setPlatformIcon("")
  }

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
          } else {
            // User found, set the user state
            localStorage.setItem("user", JSON.stringify(data));
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
    setIsDataChanged(true);
  };

  const handleBioChange = (e) => {
    setDataIn((prevData) => ({
      ...prevData,
      bio: e.target.value,
    }));
    setIsDataChanged(true);
  };

  const handleDeleteSocialLink = (index) => {
    setDataIn((prevData) => ({
      ...prevData,
      socialLinks: prevData.socialLinks.filter((_, i) => i !== index),
    }));
    setIsDataChanged(true);
  };

  const handleAddSocialLink = () => {
    // Create a new social link object
    const newSocialLink = {
      platform: platformName,
      icon: platformIcon,
      link: platformLink,
    };
    // Update the state with the new social link
    setDataIn((prevData) => ({
      ...prevData,
      socialLinks: [...prevData.socialLinks, newSocialLink],
    }));
    handelshowInputLink();
    setIsDataChanged(true);
  };

  const handleUpdateUser = () => {
    if(!dataIn.name){
      notifyA("Name can't be empty.")
    }
    // Make an API call to update the user data
    fetch(`http://localhost:5000/api/user/${dataIn._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Include the JWT token in the header for authentication
      },
      body: JSON.stringify(dataIn),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.message){
          notifyB(data.message)
          localStorage.setItem("user", JSON.stringify(data.loggeduser));
          setIsDataChanged(false);
        }
        else{
          notifyA(data.error)
        }
        // Handle the response data if needed
        // Optionally, you can show a success message to the user here.
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        // Optionally, you can show an error message to the user here.
      });
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
        {dataIn.socialLinks.map((social, index) => (
              <div key={index} className='col-md-4 m-2 d-flex'>
                <Link className='card px-3' to={social.link} target='_blank'>
                  <h2><i className={social.icon}></i></h2>
                  <div className='social_name'><h1>{social.platform}</h1></div>
                </Link>
                <div className='action'><i className='fa fa-trash-can' onClick={() => handleDeleteSocialLink(index)}></i></div>
              </div>
            ))}
          {isLinkUpload&&<div className='col-md-4 m-2'>
          <div className='input'><div className='card px-3'>
            <div className='social_link_input'> <input className='link_input' placeholder='Platform name' value={platformName} onChange={(e)=>{setPlatformName(e.target.value)}}/> </div>
            <div className='social_link_input'><input className='link_input' placeholder='Platform link' value={platformLink} onChange={(e)=>{setPlatformLink(e.target.value)}}/></div>
            <div className='social_link_input'><input className='link_input' placeholder='Platform icon i.e:fab fa-github' value={platformIcon} onChange={(e)=>{setPlatformIcon(e.target.value)}}/></div>
            </div>  
          </div>
        </div>}
        {!isLinkUpload?(<div className='col-md-4 m-2'>
          <Link className='card px-3' onClick={handelshowInputLink}>
            <div className='social_name'><h1>+</h1></div>
          </Link>
        </div>):
        <><div className='col-md-4 m-2'>
          <Link className='card px-3' onClick={handleAddSocialLink}>
            <div className='social_name'><h1>Add</h1></div>
          </Link>
        </div>
        <div className='col-md-4 m-2'>
          <Link className='card px-3' onClick={handelshowInputLink}>
            <div className='social_name'><h1>cancel</h1></div>
          </Link>
        </div></>}
        {isDataChanged && (
          <div className='col-md-4 m-2'>
          <Link className='card px-3' onClick={handleUpdateUser}>
                  <div className='social_name'><h1>Save</h1></div>
                </Link>
        </div>
                
              )}
        </div>
      </div>)}
    </div>
  );
}

export default LoggedUser;
