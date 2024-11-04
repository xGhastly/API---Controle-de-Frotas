import { ICreateDriverService } from "../../Interfaces/Drivers/ICreateDriverService"
import prismaClient from "../../prisma"

class CreateDriverService implements ICreateDriverService {
    constructor(private readonly checkCPF: IValidateCPF) { }

    async addDriver(name: string, cpf: string, cnh: string) {
        const validatedCPF = await this.checkCPF.checkCPF(cpf)
        const createdDriver = await prismaClient.driver.create({
            data: {
                name: name,
                cpf: validatedCPF,
                cnh: cnh,
            }
        })
        return createdDriver
    }
}

export { CreateDriverService }