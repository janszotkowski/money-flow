import { z } from 'zod';
import { BaseEntitySchema, AccountTypeEnum } from './base';

// Base schema
export const AccountSchema = BaseEntitySchema.extend({
    name: z.string().min(1),
    type: AccountTypeEnum,
    balance: z.number(),
    currency: z.string().length(3),
    bankName: z.string().min(1),
    accountNumber: z.string().min(1),
});

// Create schema
export const CreateAccountSchema = z.object({
    name: z.string().min(1),
    type: AccountTypeEnum,
    balance: z.number(),
    currency: z.string().length(3),
    bankName: z.string().min(1),
    accountNumber: z.string().min(1),
});

// Update schema
export const UpdateAccountSchema = CreateAccountSchema.partial();

// Response schemas
export const AccountResponseSchema = z.object({
    $id: z.string(),
    $createdAt: z.string(),
    $updatedAt: z.string(),
    ...AccountSchema.shape,
});

export const AccountListResponseSchema = z.object({
    total: z.number(),
    documents: z.array(AccountSchema),
});

// Types
export type Account = z.infer<typeof AccountSchema>;
export type CreateAccount = z.infer<typeof CreateAccountSchema>;
export type UpdateAccount = z.infer<typeof UpdateAccountSchema>;
export type AccountResponse = z.infer<typeof AccountResponseSchema>;
export type AccountListResponse = z.infer<typeof AccountListResponseSchema>;