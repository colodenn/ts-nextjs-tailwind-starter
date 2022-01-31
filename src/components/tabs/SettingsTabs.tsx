import Link from 'next/link';

import SimpleDivider from '../divider/SimpleDivider';

export default function SettingsTabs({ current }: { current: string }) {
  return (
    <>
      <nav className='-mb-px flex space-x-2 sm:space-x-5' aria-label='Tabs'>
        <Link
          passHref={true}
          aria-current='page'
          href='/dashboard/settings/profile'
        >
          <div
            className={
              current == 'Profile'
                ? 'group inline-flex cursor-pointer items-center border-b-2 border-neutral-900 py-4 px-1 text-sm font-medium text-neutral-900'
                : 'group inline-flex cursor-pointer items-center border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
              className={
                current == 'Profile'
                  ? '-ml-0.5 mr-2 hidden h-5 w-5 text-neutral-900 sm:inline-block'
                  : '-ml-0.5 mr-2 hidden h-5 w-5 text-gray-400 group-hover:text-gray-500 sm:inline-block'
              }
            >
              <path
                fillRule='evenodd'
                d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span>Profile</span>
          </div>
        </Link>
        <Link passHref={true} href='/dashboard/settings/security'>
          <div
            className={
              current == 'Security'
                ? 'group inline-flex cursor-pointer items-center border-b-2 border-neutral-900 py-4 px-1 text-sm font-medium text-neutral-900'
                : 'group inline-flex cursor-pointer items-center border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
              className={
                current == 'Security'
                  ? '-ml-0.5 mr-2 hidden h-5 w-5 text-neutral-900 sm:inline-block'
                  : '-ml-0.5 mr-2 hidden h-5 w-5 text-gray-400 group-hover:text-gray-500 sm:inline-block'
              }
            >
              <path
                fillRule='evenodd'
                d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span>Security</span>
          </div>
        </Link>

        <Link passHref={true} href='/dashboard/settings/billing'>
          <div
            className={
              current == 'Billing'
                ? 'group inline-flex cursor-pointer items-center border-b-2 border-neutral-900 py-4 px-1 text-sm font-medium text-neutral-900'
                : 'group inline-flex cursor-pointer items-center border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
              className={
                current == 'Billing'
                  ? '-ml-0.5 mr-2 hidden h-5 w-5 text-neutral-900 sm:inline-block'
                  : '-ml-0.5 mr-2 hidden h-5 w-5 text-gray-400 group-hover:text-gray-500 sm:inline-block'
              }
            >
              <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z'></path>
              <path
                fillRule='evenodd'
                d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span>Billing</span>
          </div>
        </Link>
      </nav>
      <SimpleDivider />
    </>
  );
}
