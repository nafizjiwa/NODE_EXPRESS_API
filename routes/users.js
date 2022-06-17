const express = require('express');
const {createUser, getUsers, getAUser, deleteUser, updateUser} = require('../controllers/users.js');

const router = express.Router();

//all routes in here are starting with `/users`
    router.get('/', getUsers);

//add users to our database which initially is the array users
//sending information from the front end (Eg. Data values in the forms which a user inputs to create new user) to the server
    router.post('/', createUser);

//to retrieve from //users/id the value of 'id' or get a user by that 'id'
//this value is stored in the => req.params
//it returns an object with the parameters of one item 'id' or {id: 'users_id'}
//so to get the value of the id we retrieve from req.params object
//like so: const id = req.params.id or const {id} = req.params
    router.get('/:id', getAUser);

//To delete a user from database
//Use this route to delete users specified in the query parameter /:id
//So first get the id form request.params and set to a variable: const {id} = req.params;
//Then remove this element from the array oject of users using filter() function which keeps what is returned as true or removes the elements for what is returned false.
    router.delete('/:id', deleteUser);

    router.patch('/:id', updateUser);



module.exports = router;
