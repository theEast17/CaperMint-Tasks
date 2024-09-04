/* eslint-disable no-undef */
import express from "express";
import connectDb from "./database.js";
import cookieParser from "cookie-parser";
import session from 'express-session'
import passport from 'passport'
import { cookieExtractor, sanitizeUser } from './src/middlewares/isAuth.js'
import { Strategy as JwtStrategy } from 'passport-jwt';
import UserRoutes from './src/routes/userRoutes.js'
import UserSchema from "./src/models/userModel.js";
import productRoutes from "./src/routes/productRoutes.js";

const app = express()
const port = process.env.PORT || 8080;
connectDb()
app.use(express.json())


app.use(session({
    secret: process.env.SESSION_SECRET_KEY || 'poorv',
    resave: false,
    saveUninitialized: false,
}))

app.use(passport.authenticate('session'))

app.use(cookieParser())



const SECRET_KEY = process.env.SECRET_KEY1 || 'poorv'


passport.use('jwt', new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: SECRET_KEY
}, async (jwt_payload, done) => {
    try {
        const user = await UserSchema.findById(jwt_payload.id);
        if (user) {
            return done(null, sanitizeUser(user));
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}));


passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, { id: user.id, token: user.token });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

app.use('/users', UserRoutes)
app.use('/api', productRoutes);


app.listen(port, () => {
    console.log('server started ' + port)
})