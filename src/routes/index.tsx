import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Index,
});

function Index(): React.ReactElement {
    return (
        <div>Hello World</div>
    );
}
