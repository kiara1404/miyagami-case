import './Search.css';
import React, { useState } from 'react';
import axios from 'axios'

function Search() {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        console.log('A query was submitted: ' + query);
        e.preventDefault();
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    }



    const sendQuery = async () => {
        await axios.post("http://localhost:5000/api/search", {
            query: query
        });
        console.log('test', query)
    };
    sendQuery();




    return (
        <div className="Search">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input
                        type="text"
                        name="search"
                        placeholder="Type something you want to see"
                        onChange={(e) => handleChange(e)}
                        value={query}
                    />
                    <button type="submit">Search photo's</button>
                </div>
                {query && <h2>Results for: {query}</h2>}

            </form>

        </div>
    );
}

export default Search;
