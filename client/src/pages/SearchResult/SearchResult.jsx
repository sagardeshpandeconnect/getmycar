import React from "react";
import { useLocation } from "react-router-dom";
import HorizontalCard3 from "../../components/HorizontalCard3";

const SearchResult = () => {
  const { state } = useLocation();
  const results = state.results;

  return (
    <div>
      <ul>
        {results.map((car, sid) => {
          return (
            <HorizontalCard3
              key={car.id}
              title={car.attributes.title}
              price={car.attributes.price}
              img={
                "http://localhost:1337" +
                results[sid]?.attributes?.image?.data[0]?.attributes?.url
              }
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
