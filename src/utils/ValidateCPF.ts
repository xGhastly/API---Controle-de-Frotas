import { IValidateCPF } from "../Interfaces/Utils/IValidateCPF";
import prismaClient from "../prisma";

class ValidateCPF implements IValidateCPF {
    async checkCPF(cpf: string) {
        const cpfToCheck = cpf.replace(/[^\d]+/g, '');

        const existingCPF = await prismaClient.driver.findUnique({
            where: {
                cpf: cpfToCheck
            }
        });

        if (existingCPF) {
            throw new Error('CPF do motorista já cadastrado.');
        }

        if (cpfToCheck.length !== 11 || /^(\d)\1{10}$/.test(cpfToCheck)) {
            throw new Error('CPF Inválido: O CPF necessita ter 11 caracteres.');
        }

        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpfToCheck.charAt(i)) * (10 - i);
        }
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        if (resto !== parseInt(cpfToCheck.charAt(9))) {
            throw new Error('CPF Invalido.');
        }

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpfToCheck.charAt(i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        if (resto !== parseInt(cpfToCheck.charAt(10))) {
            throw new Error('CPF Invalido.');
        }
        return cpfToCheck;
    }
}

export { ValidateCPF };

