import { Layout } from '@/components';
import { NotFound } from '@/pages';
import { createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
    component: () => (
        <Layout />
    ),
    notFoundComponent: () => <NotFound />,
});
