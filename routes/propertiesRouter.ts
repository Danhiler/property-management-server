import {Router} from 'express';
import propertyService from '../services/propertyServices';
// import GroupModel from "../mongoServer/GroupsModel";


const propertiesRouter = Router();

propertiesRouter.get('/', async (req, res) => {
    const userId = req.query.userId;
    const properties = await propertyService.getProperties(userId)
    res.json(properties)
});
propertiesRouter.post('/', async (req, res) => {
    const property = req.body;
    const properties = await propertyService.createProperty(property)
    res.json(properties)
});
propertiesRouter.delete('/', async (req, res) => {
    const propertyId = req.query.propertyId;
    const properties = await propertyService.deleteProperty(propertyId)
    res.json(properties)
});


export default propertiesRouter;
