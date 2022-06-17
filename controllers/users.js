const { v4: uuidv4} = require('uuid'); // To create a unique user id; call uuidv4(); which will generate a user id ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

//user object has no users currently in array.
let users = [];

const getUsers = (req, res) => {
    res.status(200).json(users);
    // res.send(users);
}

const createUser = (req, res, next) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user, id: userId};
    users.push(userWithId);
    // also a compressed more minimized code => users.push({...users, id: uuidv4()})
    res.send(`User with the name ${user.firstName} has been added to the database!`);
}
const getAUser = (req, res, next) => {
    const {id} = req.params;
    //to send user data for specific id back to user we need to search our database that has same specific id
    //What are we searching for? From all users 'user' if the user.id in database is equal to the specific 'id' requested
    //Send that users data back corresponding to that id and put it in a variable foundUser.
    const foundUser = users.find((user) => user.id == id); 

    res.send(foundUser);
}

const deleteUser = (req, res, next) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);
}

const updateUser = (req, res, next) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;

    const user = users.find((user)=> user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
   
    res.send(`User with the id ${id} has been updated`);

}

module.exports = {createUser, getUsers, getAUser, deleteUser, updateUser};