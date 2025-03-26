import { Databases, ID, Query, Models } from 'appwrite';
import { APPWRITE_DATABASE_ID } from '@/lib/appwrite';
import { z } from 'zod';

export abstract class BaseService<T, CreateT, UpdateT, ResponseSchema extends z.ZodType> {
    protected constructor(
        protected readonly databases: Databases,
        protected readonly collectionId: string,
        protected readonly responseSchema: ResponseSchema,
    ) { }

    public async list(limit: number, offset: number): Promise<{ documents: T[]; total: number; }> {
        const response = await this.databases.listDocuments(
            APPWRITE_DATABASE_ID,
            this.collectionId,
            [Query.limit(limit), Query.offset(offset)],
        );

        const validatedResponse = this.responseSchema.parse(response);
        return {
            documents: validatedResponse.documents,
            total: validatedResponse.total,
        };
    }

    public async create(data: CreateT): Promise<void> {
        await this.databases.createDocument(
            APPWRITE_DATABASE_ID,
            this.collectionId,
            ID.unique(),
            data as unknown as Models.Document,
        );
    }

    public async update(id: string, data: UpdateT): Promise<void> {
        await this.databases.updateDocument(
            APPWRITE_DATABASE_ID,
            this.collectionId,
            id,
            data as unknown as Partial<Models.Document>,
        );
    }

    public async delete(id: string): Promise<void> {
        await this.databases.deleteDocument(
            APPWRITE_DATABASE_ID,
            this.collectionId,
            id,
        );
    }
};
