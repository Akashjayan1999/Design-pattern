"use client";
import useAuthData from '@/components/auth-provider';
import LoginButton from '@/components/login-button';

export default function HomePage() {
  const authData = useAuthData();
  const isAuthenticated = authData?.isAuthenticated;
  const logout = authData?.logout;
  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome back, user!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
