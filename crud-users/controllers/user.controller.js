const Users = require('../models/users.model')
const ValidateUser = require("../validation/users.valdiation");




const Adduser = async (req, res) => {
    const { errors, isValid } = ValidateUser(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
          if (exist) {
            errors.Email = "User Exist";
            res.status(404).json(errors);
          } else {
            await Users.create(req.body);
            res.status(201).json({ message: "User added with success" });
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };


const FindallUsers = async (req, res) => {
    try {

        const data = await Users.find();
        res.status(200).json(data)

    } catch (error) {
        console.log(error.message)

    }

}


const FindSingle = async (req, res) => {
    try {

        const data = await Users.findOne({ _id: req.params.id });
        res.status(200).json(data)

    } catch (error) {
        console.log(error.message)

    }
}

const Updateuser = async (req, res) => {
    const { errors, isValid } = ValidateUser(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        const data = await Users.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true }
        );
        res.status(201).json(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

const deleteuser = async (req, res) => {

    try {

        const data = await Users.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: data.Firstname + " " + "User deleted" });

    } catch (error) {
        console.log(error.message)

    }

}

module.exports = {
    Adduser,
    FindallUsers,
    FindSingle,
    Updateuser,
    deleteuser
}