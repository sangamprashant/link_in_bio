import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function IconAdd() {
  const [icon, setIcon] = useState("");
  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  // Function to handle the icon upload
  const handleUploadIcon = () => {
    // Make a POST request to the API endpoint with the icon data
    axios
      .post("http://localhost:5000/api/add/icons", { icon })
      .then((response) => {
        // Check if the response contains the "message" field
        if (response.data.message) {
          // If there's a message, show a success notification
          notifyB(response.data.message);
          setIcon("");
        } else {
          // If there's no message, something unexpected happened, show an error notification
          notifyA("Unexpected response from the server");
        }
      })
      .catch((error) => {
        // If there's an error, show an error notification with the error message
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
            notifyA(error.response.data.error);
        } else {
            notifyA("Error uploading icon");
        }
      });
  };

  return (
    <div className="main">
      <p className="valueshow">Icon Input</p>
      <div className="row">
        <div className="col-md-6 p-3">
          <div className="card p-3">
            <p className="valueshow_label">Preview</p>
            <p className="valueshow" style={{ border: "1px solid black" }}>
              <i className={icon}></i>
              {icon ? icon : "Enate the value"}
            </p>
          </div>
        </div>
        <div className="col-md-6 p-3">
          <div className="card p-3">
            <p className="valueshow_label ">Input</p>
            <input
              className="valueshow my-1"
              placeholder="Enter icon value ie:fab fa-linkedin"
              onChange={(e) => {
                setIcon(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="upload_btn">
          <button className="valueshow btn" onClick={handleUploadIcon}>
            Upload
          </button>
        </div>
      </div>
      <div className="input"></div>
    </div>
  );
}

export default IconAdd;
