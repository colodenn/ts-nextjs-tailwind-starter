/* eslint-disable no-console */
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

import IconButton from '@/components/buttons/IconButton';
import SimpleCard from '@/components/cards/SimpleCard';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Seo from '@/components/Seo';
import ContentHeading from '@/components/text/ContentHeading';

export default function HomePage() {
  return (
    <>
      <Seo />
      <DashboardLayout current='Settings'>
        <ContentHeading text='Settings'>
          Edit your profile information, which is displayed with your Cal link.
        </ContentHeading>
        <section className='mt-8 max-w-4xl'>
          <SimpleCard>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              View and manage your invoice details
            </h3>
            <div className='mt-2 max-w-xl text-sm text-gray-500'>
              <p>View and edit billing data or cancel subscription.</p>
            </div>
            <div className='mt-5'>
              <IconButton
                icon={faExternalLinkAlt}
                text='Zum Rechnungsportal gehen'
                onClick={() => console.log('test')}
              />
            </div>
          </SimpleCard>
        </section>
      </DashboardLayout>
    </>
  );
}
