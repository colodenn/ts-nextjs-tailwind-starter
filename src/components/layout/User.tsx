/* eslint-disable no-console */
import { faAngleUp, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

import NextImage from '../NextImage';

export default function User() {
  const { data } = useSession();
  return (
    <Popover className='relative'>
      <Popover.Panel className='absolute bottom-12 z-10 w-full rounded-sm border-[1px] border-gray-100 bg-white  shadow-sm'>
        <div className='grid-cols grid  '>
          <div
            className='cursor-pointer text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900'
            onClick={() =>
              signOut({
                callbackUrl: `/`,
              })
            }
          >
            <button className='font-base flex cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900'>
              <span className='mr-2'>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              Logout
            </button>
          </div>
        </div>
      </Popover.Panel>
      <Popover.Button>
        <div className='flex cursor-pointer items-center rounded-sm px-2 py-2 hover:bg-gray-100'>
          <div>
            <NextImage
              imgClassName='rounded-full'
              alt='avatar'
              useSkeleton={true}
              width={42}
              height={42}
              src={
                data?.user?.image ||
                'https://www.gravatar.com/avatar/146151613d19443af3017d3e3ad89de8?s=160&d=identicon&r=PG'
              }
            />
          </div>
          <div className='ml-2'>
            <p className='block truncate text-left text-sm font-medium text-gray-900'>
              {data?.user?.name}
            </p>
            <p className='block truncate text-left text-sm font-normal text-neutral-500'>
              Administrator
            </p>
          </div>
          <div className='ml-6 text-neutral-500'>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
      </Popover.Button>
    </Popover>
  );
}
