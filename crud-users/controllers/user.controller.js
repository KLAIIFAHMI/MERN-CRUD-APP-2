const Users = require('../models/users.model')


const Adduser = async (req, res) => {
    try {
        await Users.create(req.body)
        res.status(200).json({ message: req.body.Firstname + " " + req.body.Lastname + " " + 'added with succes' })

    } catch (error) {
        console.log(error.message)
    }

}


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

    try {

        const data = await Users.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).json(data)

    } catch (error) {
        console.log(error.message)

    }
}

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