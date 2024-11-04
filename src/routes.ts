import { Router, Request, Response, NextFunction } from 'express';
import { CreateDriverService } from './services/Drivers/CreateDriverService';
import { ValidateCPF } from './utils/validateCPF';
import { CreateDriverController } from './controllers/Drivers/CreateDriverController';

const router = Router();

router.post('/driver/create', async (req: Request, res: Response, next: NextFunction) => {
    const driverService = new CreateDriverService(new ValidateCPF())
    return new CreateDriverController(driverService).handle(req, res, next)

})

export default router;

