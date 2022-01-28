/* eslint-disable no-console */
import * as React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Seo from '@/components/Seo';
import ContentHeading from '@/components/text/ContentHeading';

export default function StatsPage() {
  return (
    <>
      <Seo />
      <DashboardLayout current='Stats'>
        <ContentHeading text='Stats'>
          Get insight into your usage and usage of your Preview link.
        </ContentHeading>
      </DashboardLayout>
    </>
  );
}
