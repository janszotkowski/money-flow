import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { cn } from '@/lib/utils';

type LoadingProps = React.HTMLAttributes<HTMLDivElement> & {
    fullscreen?: boolean;
    text?: string;
};

export const Loading: React.FC<LoadingProps> = ({
    fullscreen = false,
    text = 'Načítání...',
    className,
    ...props
}): React.ReactElement => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center bg-black/70 text-white p-8',
                fullscreen && 'fixed inset-0 z-50',
                className,
            )}
            {...props}
        >
            <Loader2 className={'h-8 w-8 animate-spin mb-2'} />
            {text && <p className={'text-sm'}>{text}</p>}
        </div>
    );
};