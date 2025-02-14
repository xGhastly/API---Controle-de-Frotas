import { NextFunction, Request, Response } from "express";

class CreateTripController {
    constructor(private readonly tripService) { }
    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const { origin, destination, passengers, date, distanceKm, driverId, vehicleId } = req.body as {
                origin: number;
                destination: string;
                passengers: number;
                date: string;
                distanceKm: number;
                driverId: number;
                vehicleId: number;
            }
            const createdTrip = await this.tripService.createTrip(origin, destination, passengers, date, distanceKm, driverId, vehicleId)
            res.status(403).send(createdTrip)

        } catch (error) {
            next(error)
        }
    }
}