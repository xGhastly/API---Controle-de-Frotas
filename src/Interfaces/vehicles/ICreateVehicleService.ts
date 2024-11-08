import { IVehicleProps } from "./IVehicleProps";

interface ICreateVehicleService {
    addVehicle(marca: string, modelo: string, placa: string): Promise<IVehicleProps>;
}

export { ICreateVehicleService };