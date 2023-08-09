import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ac from "./img/user.png"

function Search({ isSearch, setIsSearch }) {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  let timeoutId = null;

  useEffect(() => {
    setIsSearch(true);
  }, []);

  // Delayed API call using setTimeout
  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    // Clear the previous timer, if any
    clearTimeout(timeoutId);

    if (value) {
      // Set a new timer to trigger the API call after 2 seconds of user input
      timeoutId = setTimeout(() => {
        fetch(`/api/search/users?query=${value}`)
          .then((res) => res.json())
          .then((data) => {
            setUsers(data);
          })
          .catch((error) => {
            console.error("Error during search:", error);
          });
      }, 1000);
    } else {
      setUsers([]);
    }
  };
  return (
    <div className="search">
      <div className="banner_text">
        <p>Serach by Name/Username. </p>
        <form class="d-flex col-md-4" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={handleInputChange}
          />
        </form>
      </div>
      {/* Render the search results */}
      {users.map((user) => (
        <Link
          key={user._id}
          className="search_item my-2"
          to={`/${user.username}`}
        >
          <div className="col-md-6">
            <div className="card">
              <div className="d-flex items px-3">
                <img
                  className="search_user_image"
                  alt="user"
                  src={user.avatar ? user.avatar : ac}
                />

                <div className="mx-3">
                  <h3>{user.name}</h3>
                  <h5>{user.username}</h5>
                  <p>{user.email}</p>
                  <p>{user.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
      {users.length == 0 && (
        <div className="search_item my-2">
          <div className="col-md-6 items">
            <h4>No user Found.</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
