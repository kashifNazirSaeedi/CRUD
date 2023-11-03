import express from 'express';
import { creatUser,getUser, getUsers,deleteUser,updateUser } from '../Controller/users.js';

const router = express.Router(); 

// GetUsers Method
router.get('/',getUsers);

//PostMethod
router.post('/',creatUser);

//Get Method
router.get('/:id',getUser )

//Delete Method
router.delete('/:id',deleteUser)

//patch Method
router.patch('/:id',updateUser)
   
    
export default router;


