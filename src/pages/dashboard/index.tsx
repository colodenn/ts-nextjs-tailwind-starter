/* eslint-disable no-console */
import { faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Tab } from '@headlessui/react';
import * as React from 'react';
import { Fragment, useState } from 'react';
import { useAlert } from 'react-alert';
import ScaleLoader from 'react-spinners/ScaleLoader';

import IconButton from '@/components/buttons/IconButton';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MainModal from '@/components/modals/MainModal';
import Seo from '@/components/Seo';
import ContentHeading from '@/components/text/ContentHeading';
import ContentSubHeading from '@/components/text/ContentSubHeading';
export default function HomePage() {
  const alert = useAlert();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Seo />
      <DashboardLayout current='Home'>
        <ContentHeading text='Dashboard'>
          Erstellen Sie teilbare Ereignisse, die andere Personen buchen können.
        </ContentHeading>
        <section className='mt-8'>
          <ContentSubHeading text='Alerts' />

          <IconButton
            icon={faBell}
            onClick={() => alert.show('Use Alert!')}
            text='Use Alert!'
          />
        </section>
        <section className='mt-8'>
          <ContentSubHeading text='Modal' />

          <IconButton
            icon={faPlus}
            onClick={() => setOpen(true)}
            text='Open Modal'
          />
        </section>
        <section className='mt-8'>
          <ContentSubHeading text='Tabs' />

          <Tab.Group>
            <Tab.List className='-mb-[1px] flex space-x-2  sm:space-x-5'>
              <Tab
                className={({ selected }) =>
                  selected
                    ? 'group text-md inline-flex items-center border-b-2 border-neutral-900 py-4 px-2 font-medium text-neutral-900'
                    : 'group text-md inline-flex items-center border-b-2 border-transparent py-4 px-2 font-medium text-neutral-900'
                }
              >
                Alert
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? 'group text-md inline-flex items-center border-b-2 border-neutral-900 py-4 px-2 font-medium text-neutral-900'
                    : 'group text-md inline-flex items-center border-b-2 border-transparent py-4 px-2 font-medium text-neutral-900'
                }
              >
                Modal
              </Tab>
            </Tab.List>
            <hr className='bg-[#E1E1E1]  ' />
            <Tab.Panels className='mt-4'>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
        <section className='mt-8'>
          <ContentSubHeading text='Loading' />
          <ScaleLoader
            color='#292929'
            loading={true}
            height={35}
            width={4}
            radius={2}
            margin={2}
          />
        </section>
      </DashboardLayout>

      <MainModal open={open} setOpen={setOpen} />
    </>
  );
}
