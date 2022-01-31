import { useMediaQuery } from '@chakra-ui/react';
import {
  faChartBar,
  faCog,
  faHome,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { useEffect, useState } from 'react';

import User from '@/components/layout/User';
import Logo from '@/components/links/Logo';

import SidebarListItem from '../list/SidebarListItem';

export default function DashboardLayout({
  children,
  current,
}: {
  children: React.ReactNode;
  current?: string;
}) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && isLargerThan800 ? (
        <div className='flex h-screen w-full overflow-hidden'>
          <div className='flex w-64 flex-col justify-between border-r-[1px] border-gray-300 p-2'>
            <div>
              <div>
                <Logo />
              </div>
              <div>
                <ul className='w-full'>
                  <SidebarListItem
                    icon={faHome}
                    text='Home'
                    link=''
                    active={'Home' === current}
                  />

                  <SidebarListItem
                    link='stats'
                    icon={faChartBar}
                    text='Stats'
                    active={'Stats' === current}
                  />

                  <SidebarListItem
                    link='settings/profile'
                    icon={faCog}
                    text='Settings'
                    active={'Settings' === current}
                  />
                  <SidebarListItem
                    link='components'
                    icon={faPuzzlePiece}
                    text='Components'
                    active={'Components' === current}
                  />
                </ul>
              </div>
            </div>
            <User />
          </div>
          <div className='h-full w-full overflow-y-scroll bg-[#F5F5F5] p-8'>
            {children}
          </div>
        </div>
      ) : (
        <div className=' flex-col overflow-hidden'>
          <div className='flex h-16 items-center justify-between border-b-[1px] p-2'>
            <Logo />
            <User />
          </div>
          <div className='mobile-height w-full overflow-y-scroll bg-[#F5F5F5] p-4'>
            {children}
          </div>
          <div className='border-t-[1px]'>
            <ul className='flex items-center justify-between px-2'>
              <SidebarListItem
                icon={faHome}
                text=''
                link=''
                active={'Home' === current}
              />

              <SidebarListItem
                link='stats'
                icon={faChartBar}
                text=''
                active={'Stats' === current}
              />

              <SidebarListItem
                link='settings/profile'
                icon={faCog}
                text=''
                active={'Settings' === current}
              />
              <SidebarListItem
                link='components'
                icon={faPuzzlePiece}
                text=''
                active={'Components' === current}
              />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
