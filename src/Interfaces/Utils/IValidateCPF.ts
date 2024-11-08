interface IValidateCPF {
    checkCPF(cpf: string): Promise<string>;
}

export { IValidateCPF };