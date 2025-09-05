import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (amount: number): void => {
        if (amount > 0) {
            this.increaseBalance(amount)
            console.log(`Empréstimo de R$${amount} concedido! Saldo atual: R$${this.getBalance()}`)
        }
    }
}
