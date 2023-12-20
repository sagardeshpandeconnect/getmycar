import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:1337/api/cars?filters[title][$contains]=${query}`
      );
      console.log(response.data.data);
      console.log(response.data.data[0].attributes.title);
      setResults(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {Array.isArray(results) && (
        <ul>
          {results.map((car, index) => {
            return <li key={car.id}>{car?.attributes.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
