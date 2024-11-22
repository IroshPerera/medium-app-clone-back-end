import mongoose, { Document, Schema } from 'mongoose';
import User from './User';
import Post from './Post';

interface Comment extends Document {
    comment: string;
    user: User;
    post: Post;
    createdAt: Date;
}

const CommentSchema: Schema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Comment = mongoose.model<Comment>('Comment', CommentSchema);

export default Comment;