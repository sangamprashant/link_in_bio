import React from "react";

function Service() {
  // Array of service data objects
  const services = [
    {
      id: 1,
      logo: "https://th.bing.com/th/id/R.d6b67cdca66dfa0fdaada8cf124e09b7?rik=y%2bWXb3kfm%2b%2bEqQ&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2017%2f01%2f3D-Cool-Image.jpg&ehk=lBoPoC6TaCEURIOydqHsuOFxknEfbEoB4nF6V5Wj10s%3d&risl=&pid=ImgRaw&r=0",
      title: "Service 1",
      description: "Description of Service 1",
    },
    {
      id: 2,
      logo: "https://th.bing.com/th/id/R.d6b67cdca66dfa0fdaada8cf124e09b7?rik=y%2bWXb3kfm%2b%2bEqQ&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2017%2f01%2f3D-Cool-Image.jpg&ehk=lBoPoC6TaCEURIOydqHsuOFxknEfbEoB4nF6V5Wj10s%3d&risl=&pid=ImgRaw&r=0",
      title: "Service 2",
      description: "Description of Service 2",
    },
    {
        id: 2,
        logo: "https://th.bing.com/th/id/R.d6b67cdca66dfa0fdaada8cf124e09b7?rik=y%2bWXb3kfm%2b%2bEqQ&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2017%2f01%2f3D-Cool-Image.jpg&ehk=lBoPoC6TaCEURIOydqHsuOFxknEfbEoB4nF6V5Wj10s%3d&risl=&pid=ImgRaw&r=0",
        title: "Service 3",
        description: "Description of Service 3",
      },
      {
        id: 2,
        logo: "https://th.bing.com/th/id/R.d6b67cdca66dfa0fdaada8cf124e09b7?rik=y%2bWXb3kfm%2b%2bEqQ&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2017%2f01%2f3D-Cool-Image.jpg&ehk=lBoPoC6TaCEURIOydqHsuOFxknEfbEoB4nF6V5Wj10s%3d&risl=&pid=ImgRaw&r=0",
        title: "Service 4",
        description: "Description of Service 4",
      },
    // Add more service data objects here...
  ];

  return (
    <div className="container">
      <div className="row">
        {services.map((service) => (
          <div className="col-md-3 p-3" key={service.id}>
            <div className="d-flex service">
              <div className="service_logo">
                <img src={service.logo} alt={`Service ${service.id}`} />
              </div>
              <div className="service_text">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
