import { BaseListStore } from './BaseListStore';
import { Account, CreateAccount, UpdateAccount, AccountListResponseSchema } from '@/types/Account';
import { AccountService } from '@/services/AccountService';
import { computed, makeObservable } from 'mobx';

export class AccountListStore extends BaseListStore<Account, CreateAccount, UpdateAccount, typeof AccountListResponseSchema> {
    public constructor() {
        super(new AccountService());
        makeObservable(this, {
            totalBalance: computed,
            totalDebt: computed,
            totalSavings: computed,
        });
    }

    public get totalBalance(): number {
        return this.items.reduce((sum, account) => sum + account.balance, 0);
    }

    public get totalDebt(): number {
        return this.items
            .filter(account => account.type === 'credit')
            .reduce((sum, account) => sum + account.balance, 0);
    }

    public get totalSavings(): number {
        return this.items
            .filter(account => account.type === 'savings')
            .reduce((sum, account) => sum + account.balance, 0);
    }
}
