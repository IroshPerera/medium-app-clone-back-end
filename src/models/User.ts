import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
    name: string;
    email: string;
    imageUrl: string;
    createdAt: Date;    
    firebaseUid?: string;
    followers: User[];
    following: User[];
    bio?: string;
    
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: String,
    },
    firebaseUid: {
        type: String,
    },

    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    bio: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model<User>('User', UserSchema);

export default User;
