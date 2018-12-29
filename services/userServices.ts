import UserModel from "../mongoServer/usersModel";



class UserService {
    static async login(phone: string) {
        try {
            return await UserModel.find({phone: phone})
            }
        catch (err) {
            return err
        }
    }
    static async signup(user: string) {
        try {
            return await UserModel.create(user)
        }
        catch (err) {
            return err
        }
    }
    // static async deleteUser(ID: string) {
    //     //return db.deleteElement("groups",ID);
    //     try {
    //         await UserModel.deleteOne({_id: ID})
    //         return await UserModel.find()
    //     }
    //     catch (err) {
    //         return err
    //     }
    // }
    //
    // static async createUser(contract) {
    //     //if(db.groups.find) check if group name already exsist
    //     try {
    //         await UserModel.create({...contract})
    //         return await UserModel.find()
    //     }
    //     catch (err) {
    //         console.log(err)
    //         return err
    //     }
    // }


}

export default UserService;
