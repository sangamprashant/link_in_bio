import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Search({isSearch,setIsSearch}) {
    useEffect(()=>{
        setIsSearch(true)
    },[])
  const ac = "https://avatars.githubusercontent.com/u/93257774?v=4";
  return (
    <div className="search">
      <div className="banner_text">
      <p>Serach by Name/Username. </p>
        <form class="d-flex col-md-4" role="search">
        
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>

      <Link className="search_item my-2" to="/username">
        <div className="col-md-6">
          <div className="card">
            <div className="d-flex items px-3">
              <img className="search_user_image" alt="user" src={ac} />

              <div className="mx-3">
                <h3>Prashant</h3>
                <h5>User name </h5>
                <p>srivastavp891@gmsail.com</p>
                <p>srivast avp89 1@gmsail.com srivastavp891@g msail.com srivastavp891@gmsai l.com srivastavp 891@gmsail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="search_item my-2">
        <div className="col-md-6">
          <div className="card">
            <div className="d-flex items px-3">
              <img className="search_user_image" alt="user" src={ac} />

              <div className="mx-3">
                <h3>Prashant</h3>
                <h5>User name </h5>
                <p>srivastavp891@gmsail.com</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search_item my-2">
        <div className="col-md-6">
          <div className="card">
            <div className="d-flex items px-3">
              <img className="search_user_image" alt="user" src={ac} />

              <div className="mx-3">
                <h3>Prashant</h3>
                <h5>User name </h5>
                <p>srivastavp891@gmsail.com</p>
                <p>srivast avp89 1@gmsail.com srivastavp891@g msail.com srivastavp891@gmsai l.com srivastavp 891@gmsail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search_item my-2">
        <div className="col-md-6">
          <div className="card">
            <div className="d-flex items px-3">
              <img className="search_user_image" alt="user" src={ac} />

              <div className="mx-3">
                <h3>Prashant</h3>
                <h5>User name </h5>
                <p>srivastavp891@gmsail.com</p>
                <p>srivast avp89 1@gmsail.com srivastavp891@g msail.com srivastavp891@gmsai l.com srivastavp 891@gmsail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search_item my-2">
        <div className="col-md-6">
          <div className="card">
            <div className="d-flex items px-3">
              <img className="search_user_image" alt="user" src={ac} />

              <div className="mx-3">
                <h3>Prashant</h3>
                <h5>User name </h5>
                <p>srivastavp891@gmsail.com</p>
                <p>srivast avp89 1@gmsail.com srivastavp891@g msail.com srivastavp891@gmsai l.com srivastavp 891@gmsail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search_item my-2">
        <div className="col-md-6 items">
         <h4>No user Found.</h4>
        </div>
      </div>
    </div>
  );
}

export default Search;
