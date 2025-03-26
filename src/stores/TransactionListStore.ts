import { BaseListStore } from './BaseListStore';
import { Transaction, CreateTransaction, UpdateTransaction, TransactionListResponseSchema } from '@/types/Transaction';
import { TransactionService } from '@/services/TransactionService';

export class TransactionListStore extends BaseListStore<Transaction, CreateTransaction, UpdateTransaction, typeof TransactionListResponseSchema> {
    public constructor() {
        super(new TransactionService());
    }
};
