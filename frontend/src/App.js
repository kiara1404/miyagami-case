import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios("http://localhost:5000/api");
      const data = response.data.photos.photo;
      setBackendData(data);
    }
    getData()


  }, [])

  return (
    <div className="App">
      <h1> TEST </h1>
      <section className="container">
        {(typeof backendData === 'undefined') ? (
          <p>Loading photo's</p>
        ) :
        backendData.map((photo, i) => (
          <div key={i}>
            <img
              // https://www.fdivckr.com/services/api/misc.urls.html
              
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}
              alt={`${photo.title}`
              }
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
