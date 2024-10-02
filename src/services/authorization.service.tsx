import { loginData } from "./mock.data";

export interface LoginParams {
  email: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role?: string | null;
  createdAt: string;
}

export class AuthorizationService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async login(data: LoginParams): Promise<User | null> {
    try {
      const response = await new Promise<{ user: User }>((resolve) => {
        resolve(loginData);
      });

      if (!response) {
        throw new Error("User not found");
      }

      return response?.user;
    } catch {
      throw new Error("Incorrect email or password");
    }
  }
}
