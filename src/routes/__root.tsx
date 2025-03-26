import { Layout, Navigation } from '@/components';
import { NotFound } from '@/pages';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
    component: () => (
        <Layout>
            <Navigation />
            <Outlet />
        </Layout>
    ),
    notFoundComponent: () => <NotFound />,
});
