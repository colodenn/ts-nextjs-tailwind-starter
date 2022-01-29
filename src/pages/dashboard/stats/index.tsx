/* eslint-disable no-console */
import * as React from 'react';

import SimpleCard from '@/components/cards/SimpleCard';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Seo from '@/components/Seo';
import LineChart from '@/components/stats/LineChart';
import ContentHeading from '@/components/text/ContentHeading';
import ContentSubHeading from '@/components/text/ContentSubHeading';

export default function StatsPage() {
  return (
    <>
      <Seo />
      <DashboardLayout current='Stats'>
        <ContentHeading text='Stats'>
          Get insight into your usage and usage of your Preview link.
        </ContentHeading>
        <section className='mt-8 max-w-4xl'>
          <ContentSubHeading text='Visitor Count' />
          <SimpleCard>
            <div className='h-[300px] w-full'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Visitor Count{' '}
              </h3>
              <LineChart />
            </div>
          </SimpleCard>
        </section>
      </DashboardLayout>
    </>
  );
}
