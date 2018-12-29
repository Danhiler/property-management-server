import{Router} from 'express';
import userServices from '../services/userServices'

const usersRouter = Router();
usersRouter.get('/', async (req,res)=>{ //login
   const user = await userServices.login(req.query.phone)
   res.json(user)
});
usersRouter.post('/', async (req,res)=>{ //sighup
    const user = await userServices.signup(req.body)
    res.json(user)
});
//
// usersRouter.delete('/:userIndex', async (req,res)=>{
//     const deleteUserIndex = req.params.userIndex;
//
//     const newUserList = await userServices.deleteUser(deleteUserIndex)
//     res.json(newUserList)
// });
//
// usersRouter.post('/', async (req,res)=>{ //create new User
//    const newUserList = await userServices.createUser(req.body)
//    res.json(newUserList)
// });
//
// usersRouter.put('/', async (req,res)=>{ //update existing User
//    const newUserList = await userServices.updateUser(req.body)
//     res.json(newUserList)
// });


export default usersRouter;
