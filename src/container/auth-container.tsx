
import React from 'react';
import useAuthData from '@/components/auth-provider';
import LoginButton from '@/components/login-button';
import LogoutButton from '@/components/logout-button';
import { UserProfile } from '@/models/user-profile';
const AuthContainer: React.FC = () => {
  const authData = useAuthData();
  const isAuthenticated = authData?.isAuthenticated;

  const logout = authData?.logout;
  const loginWithEmail= authData?.loginWithEmail
  const handleLogin = async () => {
    if (loginWithEmail) {
      await loginWithEmail('user@example.com', 'password');
      const userProfile = UserProfile.Builder
      .setName('user')
      .setEmail('user@example.com')
      .setAge(30)
      .setAddress('123 Main St, Anytown, USA')
      .build();
     console.log(userProfile.toString());
    }
  };
  const handleLogout = logout ? logout : () => console.warn('Logout function is not available');
  return (
    <div>
      {isAuthenticated ? (
        <>
        <p>Welcome back, user!</p>
        <LogoutButton onLogout={handleLogout}/>
        </>
      ) : (
        <LoginButton onLogin={handleLogin} />
      )}
    </div>
  );
};

export default AuthContainer;