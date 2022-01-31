import {
  faChartBar,
  faCog,
  faHome,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

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
  return (
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
  );
}
