import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { BaseListStore } from '@/stores/BaseListStore';
import { z } from 'zod';

export function useStore<T, CreateT, UpdateT, ResponseSchema extends z.ZodType>(store: BaseListStore<T, CreateT, UpdateT, ResponseSchema>) {
    return {
        items: store.getItems(),
        total: store.getTotal(),
        page: store.getPage(),
        limit: store.getLimit(),
        isLoading: store.getIsLoading(),
        error: store.getError(),
        setPage: store.setPage.bind(store),
        setLimit: store.setLimit.bind(store),
        fetchItems: store.fetchItems.bind(store),
        createItem: store.createItem.bind(store),
        updateItem: store.updateItem.bind(store),
        deleteItem: store.deleteItem.bind(store),
    };
}

// HOC pro automatické načtení dat při mount komponenty
export function withStore<T, CreateT, UpdateT, ResponseSchema extends z.ZodType>(
    store: BaseListStore<T, CreateT, UpdateT, ResponseSchema>,
) {
    return function <P extends object>(Component: React.ComponentType<P>) {
        return observer(function WithStoreComponent(props: P) {
            React.useEffect(() => {
                store.fetchItems();
            }, [store]);

            return React.createElement(Component, props);
        });
    };
}