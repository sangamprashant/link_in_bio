import React from 'react'

function Offer() {

  const offers = [
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
    // Add more service data objects here...
  ];
  return (
    <div className="container">
      <div className="row">
        {offers.map((offer) => (
          <div className="col-md-4 p-3" key={offer.id}>
            <div className=" offers">
              <div className="offers_logo">
                <img src={offer.logo}  />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offer
