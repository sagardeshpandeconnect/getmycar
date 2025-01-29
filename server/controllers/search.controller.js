// const NewCar = require("../models/newCar.model");

// const getSearchedCars = async (req, res) => {
//   try {
//     const { title } = req.query;

//     const aggregator = [
//       {
//         $search: {
//           index: "getmycar",
//           autocomplete: {
//             query: title,
//             path: "title",
//             fuzzy: {
//               maxEdits: 2,
//             },
//           },
//         },
//       },
//       {
//         $project: {
//           // _id: 0,
//           title: 1,
//           brand: 1,
//           brandSlug: 1,
//           titleSlug: 1,
//           image: 1,
//           specifications: 1,
//           comparisonSlug: 1,
//         },
//       },
//     ];

//     const searchedCar = await NewCar.aggregate(aggregator);
//     res.status(200).json(searchedCar);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// module.exports = {
//   getSearchedCars,
// };

const NewCar = require("../models/newCar.model");

const getSearchedCars = async (req, res) => {
  try {
    const { title } = req.query;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    // Use $regex for pattern matching
    const searchedCar = await NewCar.find(
      { title: { $regex: title, $options: "i" } } // Case-insensitive search
    );

    res.status(200).json(searchedCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getSearchedCars,
};
