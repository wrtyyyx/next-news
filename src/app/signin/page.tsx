import GoogleButton from '@/components/GoogleButton';
import SignInView from '@/sections/signin/signin-view';
import { Sign } from 'crypto';
import React from 'react';

export const metadata = {
    title: 'Sign In',
    description: 'User sign in page',
};
export default  async function SignInPage() {
    return (
        <div>
            <SignInView />
        </div>
    );
};

