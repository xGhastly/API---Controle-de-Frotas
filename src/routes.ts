import { Router, Request, Response, NextFunction } from 'express';
import { CreateDriverService } from './services/Drivers/CreateDriverService';
import { CreateDriverController } from './controllers/Drivers/CreateDriverController';
import { ValidateCPF } from './utils/ValidateCPF';
import { CreateVehicleService } from './services/vehicles/CreateVehicleService';
import { VerifyPlate } from './utils/VerifyPlate';
import { CreateVehicleController } from './controllers/vehicles/CreateVehicleController';

const router = Router();

router.post('/driver/create', async (req: Request, res: Response, next: NextFunction) => {
    const driverService = new CreateDriverService(new ValidateCPF);
    return new CreateDriverController(driverService).handle(req, res, next);

});

router.post('/vehicle/create', async (req: Request, res: Response, next: NextFunction) => {
    const vehicleService = new CreateVehicleService(new VerifyPlate());
    return new CreateVehicleController(vehicleService).handle(req, res, next);
})

export default router;

