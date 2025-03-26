import { Accounts } from '@/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/accounts')({
    component: Accounts,
});