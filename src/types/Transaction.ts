import { z } from 'zod';
import { BaseEntitySchema, TransactionTypeEnum, TransactionCategoryEnum } from './base';

// Base schema
export const TransactionSchema = BaseEntitySchema.extend({
    type: TransactionTypeEnum,
    amount: z.number().positive(),
    description: z.string().min(1),
    date: z.date(),
    category: TransactionCategoryEnum,
    accountId: z.string().uuid(),
});

// Create schema
export const CreateTransactionSchema = z.object({
    type: TransactionTypeEnum,
    amount: z.number().positive(),
    description: z.string().min(1),
    date: z.date(),
    category: TransactionCategoryEnum,
    accountId: z.string().uuid(),
});

// Update schema
export const UpdateTransactionSchema = CreateTransactionSchema.partial();

// Response schemas
export const TransactionResponseSchema = z.object({
    $id: z.string(),
    $createdAt: z.string(),
    $updatedAt: z.string(),
    ...TransactionSchema.shape,
});

export const TransactionListResponseSchema = z.object({
    total: z.number(),
    documents: z.array(TransactionSchema),
});

// Types
export type Transaction = z.infer<typeof TransactionSchema>;
export type CreateTransaction = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransaction = z.infer<typeof UpdateTransactionSchema>;
export type TransactionResponse = z.infer<typeof TransactionResponseSchema>;
export type TransactionListResponse = z.infer<typeof TransactionListResponseSchema>;