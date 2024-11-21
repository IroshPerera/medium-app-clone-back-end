import e from "express";

export interface CreateUserDTO {
    name: string;
    email: string;
    imageUrl: string;
    bio: string;
    firebaseUid: string;
}
export interface UpdateUserDTO {
    name: string;
    imageUrl: string;
    bio: string;
}