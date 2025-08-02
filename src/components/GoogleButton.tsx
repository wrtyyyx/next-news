'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const GoogleButton = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    return (
        <button onClick={() => signIn('google', {callbackUrl})} className=" w-100 google-button cursor-pointer flex items-center justify-center bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200 px-4 py-2">
            <span className="text">Sign in with Google</span>
        </button>
    );
};

export default GoogleButton;