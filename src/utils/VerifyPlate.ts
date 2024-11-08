import { IVerifyPlate } from "../Interfaces/Utils/IVerifyPlate";
import prismaClient from "../prisma";

class VerifyPlate implements IVerifyPlate {
    async plateExists(placa: string) {
        const vehicle = await prismaClient.vehicle.findUnique({
            where: {
                licensePlate: placa
            }
        })
        if (vehicle) {
            throw new Error('Veículo ja cadastrado.')
        }
        return placa;
    }
}

export { VerifyPlate }