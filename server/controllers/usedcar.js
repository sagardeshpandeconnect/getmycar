const UsedCar = require("../models/UsedCar");

const getAllUsedCars = async (req, res) => {
    // const userId = req.params.userId;
  
    // console.log(req.path);
    try {
      const allUsedCars = await UsedCar.find({ userId: req.params.userId });
      res.status(200).json(allUsedCars);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  const pushUsedCarDataToDb = async (req, res)=>{
     // Convert price and kmDriven to numbers
     req.body.price = Number(req.body.price);
     req.body.kmDriven = Number(req.body.kmDriven);
    try {
      const newUsedCar = new UsedCar(req.body);
      await newUsedCar.save();
      res.status(201).send('Form submitted successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  module.exports = {
    getAllUsedCars, pushUsedCarDataToDb
  };