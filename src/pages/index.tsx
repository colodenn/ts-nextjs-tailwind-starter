import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import * as React from 'react';

import IconButton from '@/components/buttons/IconButton';
import Layout from '@/components/layout/Layout';
import Logo from '@/components/links/Logo';
import Seo from '@/components/Seo';

export default function HomePage() {
  const router = useRouter();
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <header className='container mx-auto flex w-full  p-8'>
        <div className='flex w-full items-center justify-between'>
          <div>
            <Logo />
          </div>
          <div>
            <IconButton
              text='Login'
              onClick={() => router.push('/auth/login')}
              icon={faLock}
            />
          </div>
        </div>
      </header>
    </Layout>
  );
}
