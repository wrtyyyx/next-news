
import  authConfig  from '@/config/auth';
import { getServerSession } from 'next-auth/next';
import React from 'react';

const ProfileView = async () => {
    const session = await getServerSession(authConfig);
    return (
        <div>
            <h1 className="text-2xl font-bold">Profile Info of {session?.user?.name}</h1>
            <p className="mt-2">Email: {session?.user?.email}</p>
            {session?.user?.image && (
                <img src={session.user.image} alt="Profile Picture" className="mt-2 w-24 h-24 rounded-full" />
            )}
            <p className="mt-2">Welcome to your profile page!</p>
        </div>
    );
};

export default ProfileView;