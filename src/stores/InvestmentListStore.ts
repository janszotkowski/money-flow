import { BaseListStore } from './BaseListStore';
import { Investment, CreateInvestment, UpdateInvestment, InvestmentListResponseSchema } from '@/types/Investment';
import { InvestmentService } from '@/services/InvestmentService';
import { computed, makeObservable } from 'mobx';

export class InvestmentListStore extends BaseListStore<Investment, CreateInvestment, UpdateInvestment, typeof InvestmentListResponseSchema> {
    public constructor() {
        super(new InvestmentService());
        makeObservable(this, {
            totalValue: computed,
            totalProfit: computed,
            profitPercentage: computed,
        });
    }

    public get totalValue(): number {
        return this.items.reduce((sum, investment) => sum + investment.currentValue, 0);
    }

    public get totalProfit(): number {
        return this.items.reduce((sum, investment) => sum + investment.profitLoss, 0);
    }

    public get profitPercentage(): number {
        const totalInitial = this.items.reduce((sum, investment) => sum + (investment.currentValue - investment.profitLoss), 0);
        return totalInitial > 0 ? (this.totalProfit / totalInitial) * 100 : 0;
    }
}
