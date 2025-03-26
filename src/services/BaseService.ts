import { Databases, ID, Query, Models } from 'appwrite';
import { APPWRITE_DATABASE_ID } from '@/lib/appwrite';
import { z } from 'zod';
import { notificationService } from './NotificationService';

export abstract class BaseService<T, CreateT, UpdateT, ResponseSchema extends z.ZodType> {
    protected constructor(
        protected readonly databases: Databases,
        protected readonly collectionId: string,
        protected readonly responseSchema: ResponseSchema,
    ) { }

    public async list(limit: number, offset: number): Promise<{ documents: T[]; total: number; }> {
        try {
            const response = await this.databases.listDocuments(
                APPWRITE_DATABASE_ID,
                this.collectionId,
                [Query.limit(limit), Query.offset(offset)],
            );

            const transformedDocs = response.documents.map(doc => {
                const { $id, $createdAt, $updatedAt, ...rest } = doc;
                return {
                    ...rest,
                    id: $id,
                    createdAt: new Date($createdAt),
                    updatedAt: new Date($updatedAt),
                };
            });

            const transformedResponse = {
                documents: transformedDocs,
                total: response.total,
            };

            try {
                const validatedResponse = this.responseSchema.parse(transformedResponse);
                return {
                    documents: validatedResponse.documents,
                    total: validatedResponse.total,
                };
            } catch (validationError) {
                console.error('Zod validation error:', validationError);
                notificationService.error(`Chyba při validaci dat: ${JSON.stringify(validationError)}`);
                throw validationError;
            }
        } catch (error) {
            console.error('Error in list method:', error);
            notificationService.error(`Chyba při načítání dat: ${error instanceof Error ? error.message : JSON.stringify(error)}`);
            throw error;
        }
    }

    public async create(data: CreateT): Promise<void> {
        try {
            await this.databases.createDocument(
                APPWRITE_DATABASE_ID,
                this.collectionId,
                ID.unique(),
                data as unknown as Models.Document,
            );
            notificationService.success('Záznam byl úspěšně vytvořen');
        } catch (error) {
            console.error('Error in create method:', error);
            notificationService.error(`Chyba při vytváření záznamu: ${error instanceof Error ? error.message : JSON.stringify(error)}`);
            throw error;
        }
    }

    public async update(id: string, data: UpdateT): Promise<void> {
        try {
            await this.databases.updateDocument(
                APPWRITE_DATABASE_ID,
                this.collectionId,
                id,
                data as unknown as Partial<Models.Document>,
            );
            notificationService.success('Záznam byl úspěšně aktualizován');
        } catch (error) {
            console.error('Error in update method:', error);
            notificationService.error(`Chyba při aktualizaci záznamu: ${error instanceof Error ? error.message : JSON.stringify(error)}`);
            throw error;
        }
    }

    public async delete(id: string): Promise<void> {
        try {
            await this.databases.deleteDocument(
                APPWRITE_DATABASE_ID,
                this.collectionId,
                id,
            );
            notificationService.success('Záznam byl úspěšně smazán');
        } catch (error) {
            console.error('Error in delete method:', error);
            notificationService.error(`Chyba při mazání záznamu: ${error instanceof Error ? error.message : JSON.stringify(error)}`);
            throw error;
        }
    }
};
