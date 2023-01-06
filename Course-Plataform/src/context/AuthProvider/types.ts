export interface IAuthContext {
    login({ username, email, password }: ILoginRequest): Promise<void>;
    logout(): void;
    isAuthenticated: boolean;
    user: IUser | null;
}

export interface ILoginRequest {
    email?: string;
    username?: string;
    password: string;
}

export interface IUser {
    email?: string;
    username?: string;
    token: string
}