import { z } from 'zod';

// Enums
export const TransactionTypeEnum = z.enum(['income', 'expense']);
export const TransactionCategoryEnum = z.enum(['food', 'transport', 'entertainment', 'bills', 'other']);
export const AccountTypeEnum = z.enum(['checking', 'savings', 'credit', 'investment']);
export const InvestmentTypeEnum = z.enum(['stocks', 'crypto', 'metals', 'other']);

// Base schema
export const BaseEntitySchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

// Types
export type TransactionType = z.infer<typeof TransactionTypeEnum>;
export type TransactionCategory = z.infer<typeof TransactionCategoryEnum>;
export type AccountType = z.infer<typeof AccountTypeEnum>;
export type InvestmentType = z.infer<typeof InvestmentTypeEnum>;