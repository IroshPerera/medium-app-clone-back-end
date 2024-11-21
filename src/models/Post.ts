import mongoose, { Document, Schema } from 'mongoose';
import User from './User';

interface Post extends Document {
    title: string;
    content: string;
    imageUrl: string;
    createdAt: Date;
    user: mongoose.Schema.Types.ObjectId | User; 
}

const PostSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',  
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model<Post>('Post', PostSchema);
export default Post;
