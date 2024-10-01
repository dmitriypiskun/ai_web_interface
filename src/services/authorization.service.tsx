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
  static async login(data: LoginParams): Promise<User | null> {
    try {
      const response = new Promise<{ user: User }>((resolve) => {
        resolve(loginData);
      });

      const result = await response;

      if (!result) {
        throw new Error("User not found");
      }

      return result?.user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
