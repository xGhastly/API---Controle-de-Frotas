import { Request, Response, NextFunction } from "express";
import { ICreateVehicleService } from "../../Interfaces/vehicles/ICreateVehicleService";

class CreateVehicleController {
    constructor(private readonly vehicleService: ICreateVehicleService) { }
    async handle(req: Request, res: Response, next: NextFunction) {
        const { brand, model, licensePlate } = req.body as {
            brand: string,
            model: string,
            licensePlate: string,
        }
        try {
            const createdVehicle = await this.vehicleService.addVehicle(brand, model, licensePlate);
            res.status(201).send(createdVehicle)
        } catch (error) {
            next(error)
        }
    }
}

export { CreateVehicleController }