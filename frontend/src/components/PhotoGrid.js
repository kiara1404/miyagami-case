import './PhotoGrid.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PhotoGrid() {

  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/api");
      const data = response.data.photos.photo;
      setBackendData(data);
    }
    getData()


  }, [])

  return (

    <div className="PhotoGrid">
      <section className="container">

        {backendData.map((photo, i) => (
          <div key={i}>
            <img

              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
              alt={`${photo.title}`
              }
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default PhotoGrid;
