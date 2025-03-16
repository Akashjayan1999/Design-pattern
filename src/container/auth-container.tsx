'use client'
import React from 'react';
import useAuthData from '@/components/auth-provider';
import LoginButton from '@/components/login-button';
import LogoutButton from '@/components/logout-button';
import { UserProfile } from '@/models/user-profile';
import { log } from 'console';
import withAuth from '@/hoc/with-auth';
import treeData from '@/utils/tree-data';
import TreeNode from '@/components/tree-node';
import CompoundComponentModal from '@/components/compound-component-modal';
export interface AuthContainerProps {
  isAuthenticated: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
const AuthContainer: React.FC<AuthContainerProps> = ({ isAuthenticated, loginWithEmail, logout }) => {

  const handleLogin = async () => {
   
    if (loginWithEmail) {
      console.log('Login clicked');
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
  const handleLogout = ()=>logout();
  return (
    <div>
      {isAuthenticated ? (
        <>
        <p>Welcome back, user!</p>
        <div>Your tree data:</div>
        <div>
        {treeData.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
        <CompoundComponentModal/>
        <LogoutButton onLogout={handleLogout}/>
        </div> 
        </>
       
      ) : (
        <LoginButton onLogin={handleLogin} />
      )}
    </div>
  );
};

export default withAuth(AuthContainer);