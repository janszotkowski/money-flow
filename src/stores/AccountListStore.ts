import { BaseListStore } from './BaseListStore';
import { Account, CreateAccount, UpdateAccount, AccountListResponseSchema } from '@/types/Account';
import { AccountService } from '@/services/AccountService';

export class AccountListStore extends BaseListStore<Account, CreateAccount, UpdateAccount, typeof AccountListResponseSchema> {
    public constructor() {
        super(new AccountService());
    }
};
