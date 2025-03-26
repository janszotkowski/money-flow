import { InvestmentListStore } from './InvestmentListStore';
import { TransactionListStore } from './TransactionListStore';
import { AccountListStore } from './AccountListStore';

export const investmentStore = new InvestmentListStore();
export const transactionStore = new TransactionListStore();
export const accountStore = new AccountListStore();
