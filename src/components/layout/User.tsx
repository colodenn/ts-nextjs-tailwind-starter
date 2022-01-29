/* eslint-disable no-console */
import { faAngleUp, faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from '@headlessui/react';

import IconButton from '../buttons/IconButton';
import NextImage from '../NextImage';
export default function User() {
  return (
    <Popover className='relative'>
      <Popover.Panel className='absolute bottom-16 z-10 w-full rounded-md bg-gray-50 p-4'>
        <div className='grid-cols grid'>
          <IconButton
            text='Logout'
            icon={faDoorClosed}
            onClick={() => console.log('logout')}
          />
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
              src='https://www.gravatar.com/avatar/146151613d19443af3017d3e3ad89de8?s=160&d=identicon&r=PG'
            />
          </div>
          <div className='ml-2'>
            <p className='block truncate text-sm font-medium text-gray-900'>
              colodenn
            </p>
            <p className='block truncate text-sm font-normal text-neutral-500'>
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
