import React from "react";
import { useParams } from "react-router-dom";

const ManageYourListings = () => {
  const { userId } = useParams();
  console.log(userId);
  return <div>ManageYourListings</div>;
};

export default ManageYourListings;
