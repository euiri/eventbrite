import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const protect = asyncHandler(async(req, res, next) => {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try{
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      console.log(req.user)
      next()
     
    }catch(error){
      res.status(401)
      throw new Error('Not authorized, invalid token')

    }
  }

  if(!token){
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

