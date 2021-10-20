const Post= require("../models/eventSchema");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.post= async (req, res) => {
  try {

    const { title, date, img, description, number } = req.body;
    const newpost = new Post({ title, date, img, description, number, owner:req.userId});

    const post = await newpost.save();
   

    res.status(200).json({ post});
  } catch (error) {
    res.status(500).json({ message:  `something went wrong ${error} ` });
  }
};

exports.getPost= async (req, res) => {
  try {
  const posts= await Post.find({}).populate('owner')
   res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message:  `something went wrong ${error} ` });
  }
};