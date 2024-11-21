
import { ResponseUserDTO } from "../user/UserDTO";

export interface CreatePostDTO {
    title: string;
    content: string;
    imageUrl: string;
    userId: string;
}

export interface UpdatePostDTO {
    title: string;
    content: string;
    imageUrl: string;
    userId : string;
}

export interface ResponsePostDTO {
    title: string;
    content: string;
    imageUrl: string;
    user: ResponseUserDTO;
    createdAt: Date;
}