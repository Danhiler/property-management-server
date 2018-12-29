import PropertyModel from "../mongoServer/propertiesModel";


class propertyService {

    static async getProperties(userId: string) {
        try {
            return await PropertyModel.find({userId: userId})
        }
        catch (err) {
            return err
        }
    }

    static async createProperty(property) {
        try {
            await PropertyModel.create({...property})
            return await this.getProperties(property.userId)
        }
        catch (err) {
            console.log(err)
            return err
        }
    }

    static async deleteProperty(propertyId) {
        try {
            return await PropertyModel.delete({propertyId:propertyId})
            // return await this.getProperties(property.userId)
        }
        catch (err) {
            console.log(err)
            return err
        }
    }


}

export default propertyService;
