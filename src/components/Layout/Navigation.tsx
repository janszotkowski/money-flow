import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter, useMatches } from '@tanstack/react-router';
import { Home, CreditCard, LineChart, Receipt, BarChart } from 'lucide-react';
import * as React from 'react';

type NavigationItem = {
    path: string;
    label: string;
    icon: React.ReactNode;
};

const navigationItems: NavigationItem[] = [
    { path: '/', label: 'Dashboard', icon: <Home size={20} /> },
    { path: '/accounts', label: 'Účty', icon: <CreditCard size={20} /> },
    { path: '/investments', label: 'Investice', icon: <LineChart size={20} /> },
    { path: '/transactions', label: 'Transakce', icon: <Receipt size={20} /> },
    { path: '/analytics', label: 'Analýzy', icon: <BarChart size={20} /> },
] as const;

export const Navigation: React.FC = (): React.ReactElement => {
    const router = useRouter();
    const matches = useMatches();
    const currentPath = matches[matches.length - 1].pathname;

    return (
        <nav className={'fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-zinc-900 to-black border-r border-zinc-800 p-8'}>
            <div className={'mb-12'}>
                <h1 className={'text-2xl font-light tracking-tight'}>Money Flow</h1>
            </div>
            <div className={'space-y-2'}>
                {navigationItems.map((item) => (
                    <Button
                        key={item.path}
                        variant={currentPath === item.path ? 'default' : 'ghost'}
                        className={cn(
                            'w-full justify-start gap-4 h-12',
                            currentPath === item.path && 'bg-blue-500 hover:bg-blue-600',
                        )}
                        onClick={() => router.navigate({ to: item.path })}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Button>
                ))}
            </div>
        </nav>
    );
};
