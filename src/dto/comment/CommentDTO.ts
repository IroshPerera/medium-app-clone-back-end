import { ResponsePostDTO } from "dto/post/PostDTO";
import { ResponseUserDTO } from "dto/user/UserDTO";

export interface CreateCommentDTO {
    comment: string;
    userId: string;
    postId: string;
}

export interface ResponseCommentDTO {
    id: string;
    comment: string;
    user:ResponseUserDTO;
    post: ResponsePostDTO;
    createdAt: Date;
}