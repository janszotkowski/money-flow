import { z } from 'zod';
import { BaseEntitySchema, InvestmentTypeEnum } from './base';

// Base schema
export const InvestmentSchema = BaseEntitySchema.extend({
    name: z.string().min(1),
    type: InvestmentTypeEnum,
    amount: z.number().positive(),
    currency: z.string().length(3),
    platform: z.string().min(1),
    currentValue: z.number().positive(),
    profitLoss: z.number(),
    profitLossPercentage: z.number(),
});

// Create schema
export const CreateInvestmentSchema = z.object({
    name: z.string().min(1),
    type: InvestmentTypeEnum,
    amount: z.number().positive(),
    currency: z.string().length(3),
    platform: z.string().min(1),
    currentValue: z.number().positive(),
    profitLoss: z.number(),
    profitLossPercentage: z.number(),
});

// Update schema
export const UpdateInvestmentSchema = CreateInvestmentSchema.partial();

// Response schemas
export const InvestmentResponseSchema = z.object({
    $id: z.string(),
    $createdAt: z.string(),
    $updatedAt: z.string(),
    ...InvestmentSchema.shape,
});

export const InvestmentListResponseSchema = z.object({
    total: z.number(),
    documents: z.array(InvestmentSchema),
});

// Types
export type Investment = z.infer<typeof InvestmentSchema>;
export type CreateInvestment = z.infer<typeof CreateInvestmentSchema>;
export type UpdateInvestment = z.infer<typeof UpdateInvestmentSchema>;
export type InvestmentResponse = z.infer<typeof InvestmentResponseSchema>;
export type InvestmentListResponse = z.infer<typeof InvestmentListResponseSchema>;