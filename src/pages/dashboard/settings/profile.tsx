/* eslint-disable no-console */
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import * as React from 'react';
import { useState } from 'react';

import SimpleDivider from '@/components/divider/SimpleDivider';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DeleteModal from '@/components/modals/DeleteModal';
import Seo from '@/components/Seo';
import SettingsTabs from '@/components/tabs/SettingsTabs';
import ContentHeading from '@/components/text/ContentHeading';

export default function HomePage() {
  const { data } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Seo />
      <DashboardLayout current='Settings'>
        <ContentHeading text='Profile'>
          Edit your profile information.
        </ContentHeading>
        <section className='mt-6'>
          <SettingsTabs current='Profile' />
        </section>
        <section className='mt-8 max-w-4xl'>
          <div className='flex w-full flex-col lg:flex-row'>
            <div className='flex-grow space-y-6'>
              <div className='block space-x-4 sm:flex'>
                <div className='col-span-6 w-full sm:col-span-3'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    E-Mail
                  </label>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    disabled={true}
                    value={String(data?.user?.email)}
                    className='mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-neutral-800 sm:text-sm'
                  />
                </div>
                <div className='col-span-6 w-full sm:col-span-3'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    disabled={true}
                    value={String(data?.user?.name)}
                    className='mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-neutral-800 sm:text-sm'
                  />
                </div>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-700'
                >
                  Country
                </label>
                <select
                  id='country'
                  name='country'
                  disabled={true}
                  autoComplete='country-name'
                  className='mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-neutral-800 sm:text-sm'
                >
                  <option className='rounded-none hover:bg-[#292929] hover:text-white '>
                    English
                  </option>
                  <option className='hover:bg-[#292929] hover:text-white'>
                    German
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <SimpleDivider />
            <div className='mt-6'>
              <button
                className='relative inline-flex items-center rounded-sm border-2 border-red-700 bg-transparent px-3 py-2 text-sm font-medium  text-red-700 hover:bg-red-100 hover:text-red-700 focus:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1'
                onClick={() => setOpen(true)}
              >
                <span className='mr-2'>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                Delete Account
              </button>
            </div>
          </div>
        </section>
      </DashboardLayout>
      <DeleteModal open={open} setOpen={setOpen} />
    </>
  );
}
