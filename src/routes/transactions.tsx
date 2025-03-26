import { Transactions } from '@/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/transactions')({
    component: Transactions,
});