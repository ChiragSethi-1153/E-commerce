
const { userService } = require('../Services');
require('dotenv').config();

const signup = async (req, res, next) => {
    try{
        const response = await userService.signup(req.body);
        return res.status(201).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }   
}

const login = async (req, res, next) => {

    try{
        const response = await userService.login(req, res);

        return res.status(200).json({response})
    } catch(err){
        // console.log(err)
       return res.status(500).json({error: err.message});
    }
    
}


// const verifyToken = (req, res, next) => {

//     const cookies = req.headers.cookie;
//     const token = cookies.split("=")[1];

//     console.log(token)

//     if(!token) {
//         res.status(404).json({message: "No token Found"})
//     }
//     jwt.verify(String(token),JWT_KEY, (err, user) => {
//         if(err) {
//           return  res.status(400).json({meassage: "Invalid Token"})
//         }
//         console.log(user.id);
//         req.id = user.id
//     });
//     next();

// };

// const getUser = async (req,res,next) => {
//     const userId = req.id;
//     let user;
//     try{
//         user = await User.findById(userId, "-password")
//     }catch(err){
//         return new Error(err)
//     }
//     if(!user) {
//         return res.status(404).json({message: "User Not Found"}) 
//     }
//     return res.status(200).json({user})
// }

// const refreshToken = (req, res, next) => {
//     const cookies = req.headers.cookie;
//     const prevToken = cookies.split('=')[1];

// if(!prevToken) {
//     return res.status(400).json({message: "Couldn't find token"})
// }
// jwt.verify(String(prevToken), JWT_KEY, (err,user) => {
//     if(err){
//         console.log(err);
//         return res.status(403).json({message: 'Authentication failed'});
//     }
//     res.clearCookie(`${user.id}`);
//     req.cookies[`${user.id}`] = "";

//     const token =jwt.sign({id: user.id}, JWT_KEY, {
//         expiresIn: "35s"
//     })

//     res.cookie(String(user.id), token, {
//         path: '/',
//         expires: new Date(Date.now() + 1000 * 30),
//         httpOnly: true,
//         sameSite: 'lax'
//     });

//     req.id = user.id;
//     next();
// });
// }


module.exports =  {
    signup,
    login,
    // verifyToken,
    // getUser,
    // refreshToken
}