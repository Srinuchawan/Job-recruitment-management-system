const jwt=require('jsonwebtoken');module.exports=u=>jwt.sign({id:u._id.toString(),role:u.role},process.env.JWT_SECRET,{expiresIn:'7d'});
