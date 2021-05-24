export interface UserAuth {
  username: string;
  email: string | null;
  password: string;
}

export const users: UserAuth[] = [];

type UserChangeHandler = (user: UserAuth | null) => void;

class AuthService {
  private handler: UserChangeHandler | null = null;

  set changeHandler(handler: UserChangeHandler | null) {
    this.handler = handler;
  }

  get storedUser(): UserAuth | null {
    const auth = localStorage.getItem('authentication');

    if (!auth) {
      return null;
    }

    return JSON.parse(auth);
  }

  private setCurrentUser(user: UserAuth | null) {
    if (user) {
      localStorage.setItem('authentication', JSON.stringify(user));
    } else {
      localStorage.removeItem('authentication');
    }
    this.handler?.(user);
  }

  login(user: UserAuth) {
    this.setCurrentUser(user);
  }

  logout() {
    this.setCurrentUser(null);
  }

  register(user: UserAuth) {
    users.push(user);
    this.setCurrentUser(user);
  }
}

const authService = new AuthService();
export default authService;