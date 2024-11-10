import React from 'react';
import Button from './ui/button';

interface LoginButtonProps {
  onLogin: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onLogin }) => {
  return <Button onClick={onLogin}>Login</Button>;
};

export default LoginButton;
