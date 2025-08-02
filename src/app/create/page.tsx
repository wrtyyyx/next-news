import CreateView from '@/sections/create/create-view';
import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import  authOptions  from '@/config/auth';
export  const metadata = {
  title: 'Create News',
  description: 'Create a new news article',
};
const page = async () => {
  const session = await getServerSession(authOptions)

   if (!session?.user || session.user.role !== 'admin') {
    return redirect('/') 
  }
  return (
    <CreateView />
  );
};

export default page;