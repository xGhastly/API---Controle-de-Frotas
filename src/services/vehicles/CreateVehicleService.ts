
import { IVerifyPlate } from "../../Interfaces/Utils/IVerifyPlate";
import { ICreateVehicleService } from "../../Interfaces/vehicles/ICreateVehicleService";
import prismaClient from "../../prisma";

class CreateVehicleService implements ICreateVehicleService {
    constructor(private readonly verifyPlate: IVerifyPlate) { }
    async addVehicle(brand: string, model: string, licensePlate: string) {
        const verifiedPlate = await this.verifyPlate.plateExists(licensePlate);
        const vehicle = await prismaClient.vehicle.create({
            data: {
                licensePlate: verifiedPlate,
                brand: brand,
                model: model,
            }
        })

        return vehicle
    }

}

export { CreateVehicleService }