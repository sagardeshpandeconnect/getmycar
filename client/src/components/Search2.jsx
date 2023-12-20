import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search2 = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:1337/api/cars?filters[title][$contains]=${query}&populate=*`
      );
      navigate("/search-results", { state: { results: response.data.data } });
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
    </div>
  );
};

export default Search2;
