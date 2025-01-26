// const User = require('../model/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// const registerUser = async(req, res) =>{

//     const{username, password,} = req.body;
//     if(!username || !password){
//         return res.status(400).json({
//             error: "Insert the username and password"
//         });
//         try{
//             const existingUser = await User.findOne({where: (username)})
//             if (existingUser){
//                 return res.status(400).json({
//                     error: "Username already exists"
//                 })
//             }
//             const saltRounds = 10;
//             const hashPassword = await bcrypt.hash()
//             const  newUser = await User.create({username,password,hash})
//             res.status(201).json({message: "Registeration success........"})
//         }

//         catch(error){

//             res.status(500).json({message: "Registeration success........"})
//             console.log(error)
//         }
//     }
// }

// const loginUser = async(req, res)=>{
//     const {username, password} = req.body;
//     if(!username || !password){
//         return res.status(400).json({
//             error: "Insert the username and password"
//         });
// }
// try{
//     const user = await User.findOne({where: {username}})

//     if(!user){
//         return res.status(400).json({
//             error: "Username not found"
//         })
//     }
//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//         return res.status(400).json({
//             error: "Password didn't match"
//         })
//     }



//     const token = jwt.sign(
//         {id: user.id, username: user.username},
//         'hdgfhwfkhwefiugewvhfwdjvbsjbcvksdjb',
//         {expiresIn : '24h'}
//     )

//     res.status(200).json({message: "Login Successful........"},
//         token
//     )
// }
// catch (error){
// res.status(500).json({message: "Registeration success........"})
//             console.log(error)
// }

// }



// const User = require('../model/User')

// const getUser = async(req, res)=>{

//     try{
//         const tests = await User.findAll();
//         res.status(200).json(tests);

//     }
//     catch(error){
//         res.status(500).json({error: "Failed to Load"})
//     }
// }

// const createUser = async(req, res)=>{
    
//     try{
        
// const {username, password} = req.body;

// //Hash the password
// const newtest = await User.create({username, password})

// res.status(200).json(newtest);
//     }
//     catch(error){
//         res.status(500).json({error: "Failed to Load"})
//         console.log(error)
//     }

// }

// const updateUser = async(req, res)=>{
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         await user.update(req.body);
//         res.json(user);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// }

// const deleteUser = async(req, res)=>{
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         await user.destroy();
//         res.json({ message: 'User deleted' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }


// module.exports = {createUser, getUser, deleteUser, updateUser}
const User = require('../models/userModel'); // Ensure this path is correct

exports.getAllUsers = async (req, res) => {
    // Your logic to get all users here
};

exports.createUser = async (req, res) => {
    // Your logic to create a user here
};