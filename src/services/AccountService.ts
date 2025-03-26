import { databases } from '@/lib/appwrite';
import { BaseService } from './BaseService';
import { Account, CreateAccount, UpdateAccount, AccountListResponseSchema } from '@/types/Account';

export class AccountService extends BaseService<Account, CreateAccount, UpdateAccount, typeof AccountListResponseSchema> {
    public constructor() {
        super(databases, process.env.APPWRITE_COLLECTION_ID_ACCOUNTS!, AccountListResponseSchema);
    }
};
