export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    deposit = (amount: number): void => {
        if (this.validateStatus() && amount > 0) {
            this.balance += amount
            console.log(`Depósito de R$${amount} realizado com sucesso! Saldo atual: R$${this.balance}`)
        }
    }

    withdraw = (amount: number): void => {
        if (this.validateStatus() && this.balance >= amount) {
            this.balance -= amount
            console.log(`Saque de R$${amount} realizado com sucesso! Saldo atual: R$${this.balance}`)
        } else {
            console.log("Saldo insuficiente ou conta inválida.")
        }
    }

    getBalance = (): number => {
        return this.balance
    }

    protected increaseBalance = (amount: number): void => {
        this.balance += amount
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return true
        }
        throw new Error('Conta inválida')
    }
}
