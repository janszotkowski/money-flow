import { makeAutoObservable } from 'mobx';
import { BaseService } from '@/services/BaseService';
import { z } from 'zod';

export abstract class BaseListStore<T, CreateT, UpdateT, ResponseSchema extends z.ZodType> {
    protected items: T[] = [];
    protected total: number = 0;
    protected page: number = 1;
    protected limit: number = 10;
    protected isLoading: boolean = false;
    protected error: string | null = null;

    protected constructor(protected readonly service: BaseService<T, CreateT, UpdateT, ResponseSchema>) {
        makeAutoObservable(this);
    }

    public async fetchItems(): Promise<void> {
        try {
            this.setLoading(true);
            this.setError(null);

            const { documents, total } = await this.service.list(
                this.getLimit(),
                (this.getPage() - 1) * this.getLimit(),
            );

            this.setItems(documents, total);
        } catch (error) {
            this.handleError(error);
        } finally {
            this.setLoading(false);
        }
    }

    public async createItem(data: CreateT): Promise<void> {
        try {
            this.setLoading(true);
            this.setError(null);

            await this.service.create(data);
            await this.fetchItems();
        } catch (error) {
            this.handleError(error);
        } finally {
            this.setLoading(false);
        }
    }

    public async updateItem(id: string, data: UpdateT): Promise<void> {
        try {
            this.setLoading(true);
            this.setError(null);

            await this.service.update(id, data);
            await this.fetchItems();
        } catch (error) {
            this.handleError(error);
        } finally {
            this.setLoading(false);
        }
    }

    public async deleteItem(id: string): Promise<void> {
        try {
            this.setLoading(true);
            this.setError(null);

            await this.service.delete(id);
            await this.fetchItems();
        } catch (error) {
            this.handleError(error);
        } finally {
            this.setLoading(false);
        }
    }

    public setPage(page: number): void {
        this.page = page;
    }

    public setLimit(limit: number): void {
        this.limit = limit;
    }

    public setError(error: string | null): void {
        this.error = error;
    }

    protected setLoading(loading: boolean): void {
        this.isLoading = loading;
    }

    protected setItems(items: T[], total: number): void {
        this.items = items;
        this.total = total;
    }

    protected handleError(error: unknown): void {
        this.setError(error instanceof Error ? error.message : 'Nastala neočekávaná chyba');
    }

    // Getters
    public getItems(): T[] {
        return this.items;
    }

    public getTotal(): number {
        return this.total;
    }

    public getPage(): number {
        return this.page;
    }

    public getLimit(): number {
        return this.limit;
    }

    public getIsLoading(): boolean {
        return this.isLoading;
    }

    public getError(): string | null {
        return this.error;
    }
};
