const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser')
const Users = require('../Models/User');
require('dotenv').config()

const signup = async (req) => {
    const { name, email, password, role } = req;
    let existingUser
    try {
        existingUser = await Users.findOne({ email: email });
        if (existingUser)  throw "User already exists! Login instead"
            // return res.status(400).json({ message: "User already exists! Login instead" });

    } catch (err) {
        console.log(err)
    } 
    

    const hashedPassword = bcrypt.hashSync(password)

    const user = new Users({
        name,
        email,
        password: hashedPassword,
        role
    });
    try {
        user.save();
    }
    catch (err) {
        console.log(err)
    }

    return user
}

const login = async (  req, res) => {
    const {email, password} = req.body;

    let existingUser;
    let token
    // const existingUser
    try{
       existingUser  = await Users.findOne({email: email})
       if(!existingUser) {
        throw new Error("User not found. Signup Please!")
    }
       
        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if(!isPasswordCorrect) {
            throw new Error("Invalid Email / Password")
       }
        token = jwt.sign({id: existingUser._id}, process.env.JWT_KEY, {
            expiresIn: "35s"
        });
        
       res.cookie(String(existingUser._id), token, {
            path: '/',
            expires: new Date(Date.now() + 1000 * 30),
            httpOnly: true,
            // sameSite: 'lax'
        });
        return {message: "Successfully Logged In", user: existingUser, token}
    }catch(err) {
        return new Error(err);
    }
    
    
   
}

















module.exports = {
    signup,
    login,
}