
class AuthService {
  private static instance: AuthService;
  private accessToken: string | null = null;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public setToken(token: string) {
    this.accessToken = token;
  }

  public getToken(): string | null {
    return this.accessToken;
  }

  public async loginWithEmail(email: string, password: string): Promise<void> {
    debugger
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      this.setToken(data.accessToken);
    } catch (error) {
      console.error('Error logging in with email:', error);
    }
  }

  public async refreshAccessToken(): Promise<void> {
    try {
      const response = await fetch('/api/auth/refreshToken');
      const data = await response.json();
      this.setToken(data.accessToken);
    } catch (error) {
      console.error('Error refreshing access token:', error);
    }
  }

  public logout(): void {
    this.accessToken = null;
  }
}

export default AuthService;
