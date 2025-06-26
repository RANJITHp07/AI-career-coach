import React, { ReactNode } from 'react';

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return <div className='container'>{children}</div>;
};

export default MainLayout;
