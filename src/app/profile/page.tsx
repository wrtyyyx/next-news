import ProfileView from '@/sections/profile/profile-view';
import React from 'react';

export const metadata = {
    title: 'Profile',
    description: 'User profile page',
};
const page = () => {
    return (
        <div>
            <ProfileView />
        </div>
    );
};

export default page;