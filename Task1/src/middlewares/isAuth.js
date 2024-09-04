/* eslint-disable no-undef */
import jwt from 'jsonwebtoken'


const SECRET_KEY = process.env.SECRET_KEY1 || 'poorv';
export const isAuth = () => (req, res, next) => {
   
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized access. No token provided.' });
    }

    const token = authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized access. No token provided.' });
    }

    // Verify the token
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized access. Invalid token.' });
        }
        req.user = decoded; 
        next(); 
    });
};

export const sanitizeUser = (user) => {
    return { id: user.id, email: user.email };
};

export const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    return token;
};
