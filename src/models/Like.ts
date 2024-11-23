import mongoose, { Document, Schema } from 'mongoose';
import User from './User';
import Post from './Post';

interface Like extends Document {
    user: User;
    post: Post;
    createdAt: Date;
}

const LikeSchema: Schema = new Schema({
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

const Like = mongoose.model<Like>('Like', LikeSchema);

export default Like;