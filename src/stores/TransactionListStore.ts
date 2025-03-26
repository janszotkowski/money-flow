import { BaseListStore } from './BaseListStore';
import { Transaction, CreateTransaction, UpdateTransaction, TransactionListResponseSchema } from '@/types/Transaction';
import { TransactionService } from '@/services/TransactionService';
import { computed, makeObservable } from 'mobx';

export class TransactionListStore extends BaseListStore<Transaction, CreateTransaction, UpdateTransaction, typeof TransactionListResponseSchema> {
    public constructor() {
        super(new TransactionService());
        makeObservable(this, {
            totalIncome: computed,
            totalExpenses: computed,
            balance: computed,
        });
    }

    public get totalIncome(): number {
        return this.items
            .filter(transaction => transaction.type === 'income')
            .reduce((sum, transaction) => sum + transaction.amount, 0);
    }

    public get totalExpenses(): number {
        return this.items
            .filter(transaction => transaction.type === 'expense')
            .reduce((sum, transaction) => sum + transaction.amount, 0);
    }

    public get balance(): number {
        return this.totalIncome - this.totalExpenses;
    }
}