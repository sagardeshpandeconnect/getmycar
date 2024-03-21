const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const brandRoute = require("./routes/brands");
const newCarRoute = require("./routes/newcars");
const featuredCarRoute = require("./routes/featuredcars");
const searchedCarRoute = require("./routes/search");
const bodyTypeRoute = require("./routes/bodytypes");
const fuelTypeRoute = require("./routes/fueltypes");
const transmissionRoute = require("./routes/transmissions");
const comparisonRoute = require("./routes/comparison");

// !CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// !ROUTES
app.use("/brands", brandRoute);
app.use("/newcars", newCarRoute);
app.use("/featured", featuredCarRoute);
app.use("/search", searchedCarRoute);
app.use("/bodytype", bodyTypeRoute);
app.use("/fueltype", fuelTypeRoute);
app.use("/transmission", transmissionRoute);
app.use("/comparison", comparisonRoute);

// !MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
