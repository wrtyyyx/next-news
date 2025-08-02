export type User = {
    _id?: string;
    email: string;
    name: string;
    passwordHash: string;
    role: 'user' | 'admin';
};