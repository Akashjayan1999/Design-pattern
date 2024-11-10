import React from 'react'
interface LoginButtonProps {
    onClick: () => void;
    children: React.ReactNode;
  }
const Button = ({onClick,children}:LoginButtonProps) => {
  return (
    <button onClick={onClick}>{children}</button>
    
  )
}

export default Button
