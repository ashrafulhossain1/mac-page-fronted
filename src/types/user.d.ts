export type TUser = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    university: string;
    bio: string;
    avatar: string;
};

export type APIResponse<T> = {
    success: boolean;
    message: string;
    data: T;
};
