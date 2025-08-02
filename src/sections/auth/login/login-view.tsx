'use client';

import { userLogin } from '@/services/auth/login';
import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginView = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit } = useForm();

    const onSubmit =  async (data: any) => {
        setError(null);
        setLoading(true);
        try {
            await fetch('/api/auth/login', {
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });
        } catch (error) {
            setError('Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center ">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <h3 className="text-sm font-medium text-gray-600 mb-4">Please enter your credentials</h3>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: true })}
                        className="mt-1 block w-full border-gray-300 rounded-md h-9 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: true })}
                        className="mt-1 block w-full border-gray-300 h-9 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginView;