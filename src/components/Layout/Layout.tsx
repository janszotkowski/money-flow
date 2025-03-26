import * as React from 'react';
import { Outlet } from '@tanstack/react-router';
import { Navigation } from './Navigation';

export const Layout: React.FC = (): React.ReactElement => {
    return (
        <div className={'min-h-screen bg-black text-white'}>
            <Navigation />
            <main className={'ml-64 p-8'}>
                <Outlet />
            </main>
        </div>
    );
};
