const jwt = require('jsonwebtoken');

const ADMIN_EMAIL = 'admin@codesfortomorrow.com';
const ADMIN_PASSWORD = 'Admin123!@#';

const login = async(req,res)=>{
    try {
        const { email, password } = req.body;

        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.json({ token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {login}