import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function Login() {
  const router = useRouter();
  return (
    <Layout>
      <Seo templateTitle='Login' />
      <main className='align-center dotted mx-auto flex h-screen w-full justify-center text-[#292929]  '>
        <div className=' mt-48 '>
          <h1 className='mb-8 text-center font-secondary text-3xl md:text-4xl'>
            preview.ai
          </h1>
          <form className='w-96 rounded-sm  bg-white p-8 shadow'>
            <h1 className='mb-8 text-center text-3xl md:text-4xl'>Login</h1>
            <p className='font-primary'>
              Enter your email address to sign in or create a new account.
              We&apos;ll send you a login link.
            </p>
            <input
              className='mt-4 w-full rounded-sm focus:border-[#292929] focus:ring-[#292929]'
              type='email'
              placeholder='user@ertappen.com'
            />{' '}
            <br />
            <button
              onClick={() => router.push('/dashboard')}
              className='mt-2 w-full rounded-sm bg-[#292929] py-2 font-medium text-white hover:bg-gray-800'
            >
              Send Magic Link
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}
