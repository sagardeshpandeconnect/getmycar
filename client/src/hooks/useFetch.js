// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, [url]);

//   return [data];
// };

// export default useFetch;

import { useEffect, useState } from "react";

/**
 * Custom hook that handles fetching data from an API.
 * @param {string} url - The URL of the API endpoint to fetch data from.
 * @returns {object} - An object with the fetched data, loading status, and error status.
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    /**
     * Fetches data from the API.
     */

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error("Failed to fetch the data");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
