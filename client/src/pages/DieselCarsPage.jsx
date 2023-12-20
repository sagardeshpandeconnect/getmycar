import React from "react";
import { useLocation, useParams } from "react-router-dom";

const DieselCarsPage = () => {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Diesel cars page</h1>
    </div>
  );
};

export default DieselCarsPage;
