import express from 'express'
import { createUser, fetchUserbyId, fetchUserByIdAndUpdate, loginUser } from '../controllers/userController.js'
import { isAuth } from '../middlewares/isAuth.js'

const UserRoutes = express.Router()

UserRoutes.post('/register', createUser)
UserRoutes.post('/login', loginUser);
UserRoutes.get('/profile', isAuth(), fetchUserbyId)
UserRoutes.patch('/update', isAuth(), fetchUserByIdAndUpdate)

export default UserRoutes