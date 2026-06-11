enum UserRole {
    Admin = "Admin",
    User = "user",
}

export interface User {
    _id?: string;
    name: string;
    password: string;
    email?: string;
    role?: UserRole;
}