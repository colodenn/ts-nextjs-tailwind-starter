/* eslint-disable no-console */
import { faClipboard, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useAlert } from 'react-alert';

import IconButton from '@/components/buttons/IconButton';
import SimpleDivider from '@/components/divider/SimpleDivider';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Seo from '@/components/Seo';
import SettingsTabs from '@/components/tabs/SettingsTabs';
import ContentHeading from '@/components/text/ContentHeading';
function copyText(entryText: string) {
  navigator.clipboard.writeText(entryText);
}

export default function HomePage() {
  const [blur, setBlur] = React.useState(true);
  const [key] = React.useState('api_f2j913kfsl0138fsm');
  const alert = useAlert();
  return (
    <>
      <Seo />
      <DashboardLayout current='Settings'>
        <ContentHeading text='Security'>
          Get your api key to manage your account.
        </ContentHeading>
        <section className='mt-6'>
          <SettingsTabs current='Security' />
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
                    API Key
                  </label>
                  <div
                    id='first-name'
                    className='mt-1  flex w-full max-w-xs items-center justify-between rounded-sm border border-gray-300 bg-white px-3 py-2  shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-neutral-800 sm:text-sm'
                  >
                    <span className={blur ? 'blur' : ''}>{key}</span>
                    <div
                      className='cursor-pointer text-gray-400'
                      onClick={() => setBlur(!blur)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                  </div>
                </div>
              </div>
              <IconButton
                icon={faClipboard}
                text='Copy'
                onClick={() => {
                  alert.show('Copied to clipboard');
                  copyText(key);
                }}
              />
            </div>
          </div>
          <div className='mt-6'>
            <SimpleDivider />
          </div>
        </section>
      </DashboardLayout>
    </>
  );
}
