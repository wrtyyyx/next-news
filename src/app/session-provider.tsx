import React from 'react';

const SessionProvider = ({ children } : { children: React.ReactNode }) => {
    return (
        <SessionProvider>
          {children}
        </SessionProvider>
    );
};

export default SessionProvider;