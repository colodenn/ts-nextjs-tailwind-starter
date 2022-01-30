import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { getSession, signIn } from 'next-auth/react';
import * as React from 'react';
import { useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function Login() {
  const [toggle, setToggle] = useState(true);

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
                  Log in with your faviourite social media account.
                </p>

                <br />
                <button
                  onClick={() => {
                    setToggle(!toggle);
                    signIn('github', {
                      callbackUrl: `/dashboard`,
                    });
                  }}
                  className='mt-2 flex w-full items-center rounded-sm bg-[#292929] px-4 py-2 font-primary  font-medium text-white hover:bg-opacity-90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-1'
                >
                  <span className='mr-4'>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  Sign in with Github
                </button>
              </div>
            ) : (
              <div className='items-center justify-center'>
                <div className='mb-4  flex justify-center'>
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
                  Please hold on while we sign you in.
                </p>
              </div>
            )}
          </form>
        </div>
      </main>
    </Layout>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
