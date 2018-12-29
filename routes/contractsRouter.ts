import {Router} from 'express';
import contractsService from "../services/contractsServices";
import propertyService from "../services/propertyServices";
import propertiesRouter from "./propertiesRouter";


const contractsRouter = Router();

contractsRouter.get('/', async (req, res) => {
    const userId = req.query.userId;
    const contracts = await contractsService.getContracts(userId)
    res.json(contracts)
});
contractsRouter.post('/', async (req, res) => {
    const contract = req.body;
    const contracts = await contractsService.createContract(contract)
    res.json(contracts)
});

export default contractsRouter;
