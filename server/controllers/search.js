const NewCar = require("../models/NewCar");

const getSearchedCars = async (req, res) => {
  try {
    const { title } = req.query;

    const aggregator = [
      {
        $search: {
          index: "carwale",
          autocomplete: {
            query: title,
            path: "title",
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
      {
        $project: {
          // _id: 0,
          title: 1,
          brand: 1,
          brandSlug: 1,
          titleSlug: 1,
          image: 1,
          specifications: 1,
          comparisonSlug: 1,
        },
      },
    ];

    const searchedCar = await NewCar.aggregate(aggregator);
    res.status(200).json(searchedCar);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getSearchedCars,
};
