import { databases } from '@/lib/appwrite';
import { BaseService } from './BaseService';
import { Investment, CreateInvestment, UpdateInvestment, InvestmentListResponseSchema } from '@/types/Investment';

export class InvestmentService extends BaseService<Investment, CreateInvestment, UpdateInvestment, typeof InvestmentListResponseSchema> {
    public constructor() {
        super(databases, 'investments', InvestmentListResponseSchema);
    }
};
