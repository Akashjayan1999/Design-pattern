import React from 'react';
import useAuthData from '@/components/auth-provider';
import { AuthContainerProps } from '@/container/auth-container';
const withAuth = (WrappedComponent: React.FC<AuthContainerProps>) => {
  return (props: any) => {
    const authData = useAuthData();
    const isAuthenticated = authData?.isAuthenticated;
   
    return (
      <WrappedComponent
        {...props}
        isAuthenticated={isAuthenticated}
        loginWithEmail={authData?.loginWithEmail}
        logout={authData?.logout}
      />
    );
  };
};

export default withAuth;