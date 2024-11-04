import { NextFunction, Request, Response } from "express";
import { ICreateDriverService } from "../../Interfaces/Drivers/ICreateDriverService";

class CreateDriverController {
    constructor(private readonly driverService: ICreateDriverService) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { name, cpf, cnh } = req.body as {
            name: string,
            cpf: string,
            cnh: string,
        };

        try {
            const createdDriver = await this.driverService.addDriver(name, cpf, cnh);

            res.status(201).send(createdDriver)
        } catch (error) {
            next(error);
        }


    }
}

export { CreateDriverController }