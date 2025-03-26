import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export const NotFound: React.FC = (): React.ReactElement => {
    return (
        <div className={'min-h-screen bg-black text-white flex flex-col items-center justify-center p-8'}>
            <div className={'text-9xl font-light tracking-tight mb-4'}>404</div>
            <div className={'text-2xl font-light mb-8'}>Stránka nebyla nalezena</div>
            <p className={'text-zinc-400 mb-8 text-center max-w-md'}>
                Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
            </p>
            <Button className={'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'}>
                <Home className={'h-4 w-4 mr-2'} />
                Zpět na hlavní stránku
            </Button>
        </div>
    );
};
