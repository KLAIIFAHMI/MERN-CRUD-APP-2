const express = require("express");
const { Adduser, FindallUsers, FindSingle, Updateuser, deleteuser } = require("../controllers/user.controller");
const router = express.Router();



/* add user */
router.post('/users', Adduser)

/* find all users */
router.get('/users', FindallUsers)

/* find single user */
router.get('/users/:id', FindSingle)

/* add user */
router.put('/users/:id', Updateuser)

/* add user */
router.delete('/users/:id', deleteuser)

module.exports = router;