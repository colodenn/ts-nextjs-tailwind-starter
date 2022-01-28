export default function SettingsTabs() {
  return (
    <>
      <nav className='-mb-px flex space-x-2 sm:space-x-5' aria-label='Tabs'>
        <a
          className='group inline-flex items-center border-b-2 border-neutral-900 py-4 px-1 text-sm font-medium text-neutral-900'
          aria-current='page'
          href='/settings/profile'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
            className='-ml-0.5 mr-2 hidden h-5 w-5 text-neutral-900 sm:inline-block'
          >
            <path
              fillRule='evenodd'
              d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span>Profil</span>
        </a>
        <a
          className='group inline-flex items-center border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
          href='/settings/security'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
            className='-ml-0.5 mr-2 hidden h-5 w-5 text-gray-400 group-hover:text-gray-500 sm:inline-block'
          >
            <path
              fillRule='evenodd'
              d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span>Sicherheit</span>
        </a>
        <a
          className='group inline-flex items-center border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
          href='/settings/teams'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
            className='-ml-0.5 mr-2 hidden h-5 w-5 text-gray-400 group-hover:text-gray-500 sm:inline-block'
          >
            <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
          </svg>
          <span>Teams</span>
        </a>
        <a
          className='group inline-flex items-center border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
          href='/settings/billing'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
            className='-ml-0.5 mr-2 hidden h-5 w-5 text-gray-400 group-hover:text-gray-500 sm:inline-block'
          >
            <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z'></path>
            <path
              fillRule='evenodd'
              d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span>Abrechnung</span>
        </a>
      </nav>
      <hr className='h-[1px] w-full bg-black' />
    </>
  );
}
