import { BaseListStore } from './BaseListStore';
import { Investment, CreateInvestment, UpdateInvestment, InvestmentListResponseSchema } from '@/types/Investment';
import { InvestmentService } from '@/services/InvestmentService';

export class InvestmentListStore extends BaseListStore<Investment, CreateInvestment, UpdateInvestment, typeof InvestmentListResponseSchema> {
    public constructor() {
        super(new InvestmentService());
    }
};
