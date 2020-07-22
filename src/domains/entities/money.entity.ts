import { BigNumber } from 'bignumber.js';

export class MoneyEntity {

    constructor(
        private readonly _amount: BigNumber
    ) { }

    static ZERO() {
        return new MoneyEntity(new BigNumber(0));
    }

    static of(value: number) {
        return new MoneyEntity(new BigNumber(value));
    } 

    get amount() {
        return this._amount;
    }

    static add(a: MoneyEntity, b: MoneyEntity) {
        return new MoneyEntity(a.amount.plus(b.amount));
    }

    negated() {
        return new MoneyEntity(this.amount.negated());
    }

    isPositiveOrZero() {
		return this.amount.comparedTo(0) >= 0;
	}
}