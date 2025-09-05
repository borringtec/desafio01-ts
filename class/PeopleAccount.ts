import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (amount: number): void => {
        if (amount > 0) {
            this.increaseBalance(amount + 10)
            console.log(`Depósito especial de R$${amount} (+10 bônus) realizado! Saldo atual: R$${this.getBalance()}`)
        }
    }
}
