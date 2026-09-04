const jwt = require('jsonwebtoken')
require('dotenv').config()
 

exports.auth = (req, res, next) => {
  const token = req.header('authorization');
  if (!token) { return res.status(401).json({ message: "No token access denied you should Login" }) }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.id
    req.role = decoded.role
    next();


  }

  catch (error) { res.status(401).json({ message: 'Invalid or expired token you should Login' }) }


}


exports.adminAuth =(req,res,next)=>{
const token = req.header('authorization');
if(!token){return res.status(401).json({message:"No token access denied you should Login"})}

try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded.id 
    req.role=decoded.role
    if(req.role !=='admin'){return res.status(403).json({message:'Access denied. Admin privileges required.'})}
    next();
}

catch(error){res.status(401).json({message:'Invalid or expired token you should Login'})}

};
