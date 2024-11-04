import { IDriverProps } from "./IDriverProps";

interface ICreateDriverService {
    addDriver(name: string, cpf: string, cnh: string): Promise<IDriverProps>
}

export { ICreateDriverService }