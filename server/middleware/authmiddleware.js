const jwt = require('jsonwebtoken')
require('dotenv').config()
 

exports.auth = (req, res, next) => {
  const token = req.header('authorization');
  if (!token) { return res.status(401).json({ message: "No token access denied" }) }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log("decoded token", decoded)
    req.user = decoded.id
    req.role = decoded.role
    next();


  }

  catch (error) { res.status(401).json({ message: 'Invalid or expired token' }) }


}


