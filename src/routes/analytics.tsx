import { Analytics } from '@/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/analytics')({
    component: Analytics,
});