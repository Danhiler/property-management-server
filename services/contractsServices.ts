import ContractsModel from "../mongoServer/contractsModel";
class contractService {
    static async getContracts(userId: string) {
        try {
            return await ContractsModel.find({userId: userId})
        }
        catch (err) {
            return err
        }
    }

    static async createContract(contract) {
        try {
            await ContractsModel.create({...contract})
            return await this.getContracts(contract.userId)
        }
        catch (err) {
            console.log(err)
            return err
        }
    }

}

export default contractService;
