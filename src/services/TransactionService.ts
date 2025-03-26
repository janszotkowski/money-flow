import { databases } from '@/lib/appwrite';
import { BaseService } from './BaseService';
import { Transaction, CreateTransaction, UpdateTransaction, TransactionListResponseSchema } from '@/types/Transaction';

export class TransactionService extends BaseService<Transaction, CreateTransaction, UpdateTransaction, typeof TransactionListResponseSchema> {
    public constructor() {
        super(databases, process.env.APPWRITE_COLLECTION_ID_TRANSACTIONS!, TransactionListResponseSchema);
    }
};
