const router = require('express').Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Register User
router.post('/create', async(req, res) => {

    const { firstName, lastName, cellphone, email, password } = req.body;

    //Validation fields
    let array = [firstName, lastName, cellphone, email, password];
    let nameFields = ['firstName', 'lastName', 'cellphone', 'email', 'password'];
    for(let pos in array){
        if(!array[pos]){
            return res.status(400).json({message: `The '${nameFields[pos]}' field is required`});
        }
    }

    //Create hash
    let salt = await bcrypt.genSalt(12);
    let passHash = await bcrypt.hash(password, salt);

    let user = {
        firstName,
        lastName,
        cellphone,
        email,
        password: passHash,
    };

    let findUser = await User.findOne({email: email}, '-password');
    if(findUser){
        return res.status(500).json({error: 'The user already exist'});
    }

    try {

        await User.create(user);

        console.log(`User ${firstName} has been successfully registered`);
        res.status(201).json(
           user = {
                firstName,
                lastName,
                cellphone,
                email
            }
        );
        
    } catch (error) {
        res.status(400).json({error: `${error}`});
    }

});

//Get users list
router.get('/list', async(req, res) => {

    let usersList = await User.find({},'-password');
    res.status(200).json(usersList);

});

//Login
router.post('/auth', async(req, res) => {
    const { email, password } = req.body;

    const userFind = await User.findOne({email: email});
    if(!userFind){
        return res.status(404).json({error: 'User not found'});
    }

    const checkPass = await bcrypt.compare(password, userFind.password);
    if(!checkPass){
        return res.status(500).json({erro: 'Passwords do not match'});
    }
    
    let { firstName, lastName, cellphone } = userFind;

    try {
        
        const secret = process.env.SECRET;

        const token = jwt.sign({ id: userFind._id }, secret);

        const user = {
            firstName,
            lastName,
            cellphone,
            email,
            token
        };

        res.status(200).json({ user: user });

    } catch (error) {
        res.status(500).json({error: error});
    }
    res.status(200).json({user});
});

module.exports = router;