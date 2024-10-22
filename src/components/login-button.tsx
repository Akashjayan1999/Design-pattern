
import useAuthData from "./auth-provider";

const LoginButton = () => {
  const authData = useAuthData();
 const loginWithEmail= authData?.loginWithEmail
  const handleLogin = async () => {
    if (loginWithEmail) {
      await loginWithEmail('user@example.com', 'password');
    }
  };

  return <button onClick={handleLogin}>Login</button>;
};


export default LoginButton;
