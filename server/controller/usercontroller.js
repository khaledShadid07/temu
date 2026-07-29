const User = require('../model/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.getEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {return res.status(404).json({ message: 'email is required' }) }
  try {
    const user = await User.findOne({email})
    res.status(200).json(user)

  }
  catch (error) { res.status(500).json({ success: false, message: error.message }) }

}


exports.register = async (req, res) => {

    const { userName, email, password } = req.body
    if ( !email || !password) { return res.status(400).json({ message: 'Missing required fields' }); }

    try {
        const existingUser = await User.findOne({ email: email }).exec();
        if (existingUser) { return res.status(409).json({ message: 'Email already registered' }) }

        const hashedpass = await bcrypt.hash(password, 10)

        const newUser = new User({
            userName,
            email,
            password: hashedpass,
        })

        await newUser.save();

        const token = jwt.sign({ id: newUser._id,role: newUser.role },process.env.JWT_SECRET, { expiresIn: '7d' })

        res.status(201).json({ token, user: newUser })

    }
    catch (error) { res.status(500).json({ success: false, message: error.message }) }

}




exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) { return res.status(400).json({ success: false, message: 'Email and password are required' }); }

    try {

        const userx = await User.findOne({ email });
        if (!userx) { return res.status(400).json({ message: 'Invalid Credentials ⛔ ' }) }

        const ismatch = await bcrypt.compare(password, userx.password)

        if (!ismatch) { return res.status(400).json({ message: 'Invalid Credentials ⛔' }) }

        const token = jwt.sign({ id: userx._id, role: userx.role }, process.env.JWT_SECRET, { expiresIn: '7d' })
        return res.status(200).json({success:true,token, user:userx });

    }
    catch (error) { res.status(500).json({success:false, message: error.message }) }

}
