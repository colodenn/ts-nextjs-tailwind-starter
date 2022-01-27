import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function Login() {
  const [toggle, setToggle] = useState(true);
  // const router = useRouter();
  return (
    <Layout>
      <Seo templateTitle='Login' />
      <main className='align-center dotted mx-auto flex h-screen w-full justify-center text-[#292929]  '>
        <div className=' mt-48 '>
          <Link passHref={true} href='/'>
            <h1 className=' mb-8 cursor-pointer text-center font-secondary text-3xl md:text-4xl'>
              preview.ai
            </h1>
          </Link>
          <form className='w-96 rounded-sm  bg-white p-8 shadow'>
            {toggle ? (
              <div>
                <h1 className='mb-8 text-center text-3xl md:text-4xl'>Login</h1>
                <p className='font-primary'>
                  Enter your email address to sign in or create a new account.
                  We&apos;ll send you a login link.
                </p>
                <input
                  required={true}
                  className='mt-4 w-full rounded-sm focus:border-[#292929] focus:ring-[#292929]'
                  type='email'
                  placeholder='user@ertappen.com'
                />{' '}
                <br />
                <button
                  onClick={() => setToggle(!toggle)}
                  className='mt-2 w-full rounded-sm bg-[#292929] py-2 font-medium text-white hover:bg-gray-800'
                >
                  Send Magic Link
                </button>
              </div>
            ) : (
              <div className='items-center justify-center'>
                <div className='mb-6 flex justify-center'>
                  <ScaleLoader
                    color='#292929'
                    loading={true}
                    height={35}
                    width={4}
                    radius={2}
                    margin={2}
                  />
                </div>
                <p className='text-center'>
                  Check your email for a login link.
                </p>
              </div>
            )}
          </form>
        </div>
      </main>
    </Layout>
  );
}
