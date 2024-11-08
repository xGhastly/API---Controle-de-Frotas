interface IVerifyPlate {
    plateExists(placa: string): Promise<string>
}

export { IVerifyPlate }