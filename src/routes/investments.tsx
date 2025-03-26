import { Investments } from '@/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/investments')({
    component: Investments,
});