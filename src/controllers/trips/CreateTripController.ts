import { NextFunction, Request, Response } from "express";

class CreateTripController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const { origin, destination, passengers, date, distanceKm, driverId, vehicleId } = req.body as {
            origin: number;
            destination: string;
            passengers: number;
            date: string;
            distanceKm: number;
            driverId: number;
            vehicleId: number;
        }
    }
}