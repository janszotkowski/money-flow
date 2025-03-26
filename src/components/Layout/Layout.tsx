import * as React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
    return <div className={'flex h-screen w-screen bg-black'}>{children}</div>;
};
