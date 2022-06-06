import './Search.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Search() {
    const [query, setQuery] = useState()



  return (
    <div className="Search">
        <form>
            <div>
                  <input type="text" placeholder="Type something you want to see"></input>
                  <button type="submit">Search photo's</button>
            </div>

        </form>

    </div>
  );
}

export default Search;
