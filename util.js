import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, config.JWT_SECRET, {
        expiresIn: '48h'
    })
}


// Middleware if user is Auth
// const isAuth = (req, res, next => {

//     const token = req.headers.authorization;
//     if(token) {
//         const onlyToken = token.slice(7, token.length);
//         jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
//             if(err) {
//                 return res.status(401).send({msg : 'Invalid Token'})
//             } 
//             req.user = token;
//             next();
//             return
//         })
//     }

//     return res.status(401).send({msg : 'Token is not supplied'})
// })

// Middleware check role of user
// const isAdmin = (req, res, next => {

//     if(req.user && req.user.isAdmin) {
//         return next
//     }

//     return res.status(403).send({msg : 'Permission denied'})
// })

// export { getToken, isAuth, isAdmin }
export {getToken}