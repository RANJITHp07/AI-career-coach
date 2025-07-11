import React, { ReactNode } from 'react';

type AuthLayoutProps = {
    children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return <div className='container flex justify-center py-24'>
        <div className="grid-background" />
        {children}
    </div>;
};

export default AuthLayout;
