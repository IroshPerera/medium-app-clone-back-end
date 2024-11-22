import User from '../models/User';
import { CreateUserDTO, UpdateUserDTO } from '../dto/user/UserDTO';
import { CustomError } from '../utils/CustomError';

//create function
export const signUp = async (userDTO: CreateUserDTO) => {
    try {
        const existingUser = await User.findOne({ email: userDTO.email });

        if (existingUser) {
            throw new CustomError('Sorry! Unable to create user. User already exists', 409);
        }

        const user = new User({ ...userDTO });
        await user.save();
        return user;
    } catch (error:any) {
        throw new CustomError(error.message, error.statusCode);
    }
};

//update function
export const update = async (id: string, userDTO: UpdateUserDTO) => {
    try {
        const user = await User.findById(id);

        if (!user) {
            throw new CustomError('Sorry! Unable to find requested user', 404);
        }

        user.name = userDTO.name;
        user.imageUrl = userDTO.imageUrl;
        user.bio = userDTO.bio;

        await user.save();
        return user;
    } catch (error:any) {
        throw new CustomError(error.message, error.statusCode);
    }
};

//find by id function
export const findById = async (id: string) => {
    try {
        const user = await User.findById(id);

        if (!user) {
            throw new CustomError('Sorry! Unable to find requested user', 404);
        }

        return user;
    } catch (error:any) {
        throw new CustomError(error.message, error.statusCode);
    }
}

//find all function
export const findAll = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error:any) {
        throw new CustomError(error.message, error.statusCode);
    }
}

//follow function
export const follow = async (userId: string, followerId: string) => {
    try {
        const user = await User.findById(userId);
        const follower = await User.findById(followerId);

        if (!user || !follower) {
            throw new CustomError('Sorry! Unable to find requested user', 404);
        }

        //check if user is already following the follower
        const isFollowing = user.followers.find((follower) => follower.toString() === followerId);
        
        if (isFollowing) {
            throw new CustomError('Sorry! You are already following this user', 409);
        }
        
        user.followers.push(follower);
        follower.following.push(user);

        await user.save();
        await follower.save();

        return user;
    }
    catch (error:any) {
        throw new CustomError(error.message, error.statusCode);
    }
}

//unfollow function
export const unfollow = async (userId: string, unFollowerId: string) => {
    try {
        const user = await User.findById(userId);
        const unFollower = await User.findById(unFollowerId);

        if (!user || !unFollower) {
            throw new CustomError('Sorry! Unable to find requested user', 404);
        }



        user.followers = user.followers.filter((follower) => follower.toString() !== unFollowerId);
        unFollower.following = unFollower.following.filter((following) => following.toString() !== userId);

        await user.save();
        await unFollower.save();

        return user;
    }
    catch (error:any) {
        throw new CustomError(error.message, error.statusCode);
    }
}