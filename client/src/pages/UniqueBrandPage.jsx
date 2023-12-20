import React from "react";
import { useLocation, useParams } from "react-router-dom";
import HorizontalCard3 from "../components/HorizontalCard3";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { add } from "../comparisonStore/compareSlice";

const UniqueBrandPage = () => {
  // const urlbrand = useLocation().pathname;
  // console.log(urlbrand);

  const brandSlug = useParams().brandSlug;
  // console.log(urlbrand);

  // console.log(useParams());

  // const location = useLocation();

  // console.log(location);

  // `http://localhost:1337/api/cars?[filters][brands][id][$eq]=${id}&populate=*`
  const { data, loading, error } = useFetch(
    `http://localhost:3001/newcars/${brandSlug}`
  );
  // console.log(data);
  const dispatch = useDispatch();
  const addToCompare = (car) => {
    dispatch(add(car));
  };

  return (
    <div>
      <ul>
        {error
          ? "Something went wrong!"
          : loading
          ? "loading.........."
          : data?.map((car, sid) => {
              return (
                <HorizontalCard3
                  key={car._id}
                  // title={car.attributes.title}
                  titleSlug={car.titleSlug}
                  brandSlug={car.brandSlug}
                  title={car.title}
                  id={car._id}
                  // id={data[sid].id}
                  price={car.specifications.price}
                  // price={car.attributes.price}
                  // img={
                  //   "http://localhost:1337" +
                  //   data[sid]?.attributes?.image?.data[0]?.attributes?.url
                  // }
                  img={car.image}
                  clickHandler={() => addToCompare(car)}
                  buttonPlaceholder="Add to Compare"
                />
              );
            })}
      </ul>
    </div>
  );
};

export default UniqueBrandPage;
