const User = require("../models/User");

const registerUser = async (req, res)=>{
    const { email, name } = req.body;
    try {
        let user = await User.findOne({ email });

        if (!user) {
          user = new User({ email, name });
          await user.save();
        }
      
        res.status(200).json(user);
        res.status(201).send('Form submitted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
  }

  const getUserInfo = async (req, res) => {
    // const userId = req.params.userId;
  
    // console.log(req.path);
    try {
      const userInfo = await User.find({ userId: req.params.userId });
      res.status(200).json(userInfo);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  module.exports = {
    registerUser, getUserInfo
  };