import React from 'react';
import Button from './ui/button';

interface LogoutButtonProps {
  onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return <Button onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
