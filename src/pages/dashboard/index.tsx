/* eslint-disable no-console */
import { useToast } from '@chakra-ui/react';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Fragment, useState } from 'react';
import useSWR from 'swr';

import IconButton from '@/components/buttons/IconButton';
import SimpleCard from '@/components/cards/SimpleCard';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MainModal from '@/components/modals/MainModal';
import Seo from '@/components/Seo';
import ContentHeading from '@/components/text/ContentHeading';
import ContentSubHeading from '@/components/text/ContentSubHeading';
export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetcher = (a: any) => fetch(a).then((res) => res.json());
  const [open, setOpen] = useState(false);
  const { data } = useSWR('/api/visitorCount', fetcher);
  const toast = useToast();

  return (
    <>
      <Seo />
      <DashboardLayout current='Home'>
        <ContentHeading text='Dashboard'>
          Erstellen Sie teilbare Ereignisse, die andere Personen buchen können.
        </ContentHeading>
        <section className='mt-8 max-w-4xl'>
          <ContentSubHeading text='Plan & Usage' />

          <SimpleCard>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Plan & Usage{' '}
              <span className='ml-1 rounded-full bg-[#292929] px-2 py-1 text-xs text-white'>
                Admin
              </span>
            </h3>
            <div className='mt-2 max-w-xl text-sm text-gray-500'>
              <p>2,500 previews/mo</p>
              <p>1 Domain</p>
            </div>
            <div className='mt-4'>
              <div className='align-center -mb-6  flex h-6 w-full items-center justify-center rounded-sm bg-[#bbbbbb] text-center text-sm font-medium text-white'>
                <div className='align-center  text-center'>
                  {data?.name?._count?.userId}/ 2,500 previews
                </div>
              </div>
              {data ? (
                <div
                  className='flex h-6 items-center  justify-center rounded-sm bg-[#292929]'
                  style={{ width: data.name._count.userId / 2500 }}
                ></div>
              ) : (
                <div className='flex h-6 w-1/2 items-center  justify-center rounded-sm bg-[#292929]'></div>
              )}
            </div>
            <div className='mt-5'>
              <IconButton
                icon={faExternalLinkAlt}
                text='Change Plan'
                onClick={() => console.log('test')}
              />
            </div>
          </SimpleCard>
        </section>
        <section className='mt-8 max-w-4xl'>
          <ContentSubHeading text='Add Script to your website' />

          <SimpleCard>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Add Script to your website
            </h3>
            <div className='mt-2 max-w-xl text-sm text-gray-500'>
              <p>
                Copy & paste this code into the{' '}
                <span className='rounded bg-gray-200 px-1 '>
                  {'<'}body{'>'}
                </span>{' '}
                tag of every webpage you want link preview to appear.
              </p>
            </div>

            <div className='mt-5'>
              <div className='font-base w-full rounded-sm bg-gray-200 p-4 text-sm'>
                <p>
                  {
                    "<script src='https://js.linkz.ai/?key=61eb154ac2d47e00691d2b1b'></script>"
                  }
                </p>
              </div>
            </div>
            <div className='mt-5'>
              <IconButton
                icon={faClipboard}
                text='Copy'
                onClick={() =>
                  toast({
                    description: 'Text copied to clipboard.',
                    status: 'info',
                    duration: 9000,
                    position: 'bottom-right',
                    isClosable: true,
                  })
                }
              />
            </div>
          </SimpleCard>
        </section>
      </DashboardLayout>

      <MainModal open={open} setOpen={setOpen} />
    </>
  );
}
