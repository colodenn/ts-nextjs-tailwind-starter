/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function SidebarListItem({
  icon,
  active,
  text,
  link,
}: {
  link: string;
  icon: any;
  active: boolean;
  text: string;
}) {
  return (
    <Link passHref={true} href={`/dashboard/${link}`}>
      <li
        className={` mt-2 flex cursor-pointer items-center rounded-sm py-[6px] px-2 font-medium hover:bg-[#F5F5F5] hover:text-[#292929] ${
          active ? 'bg-[#F5F5F5] text-[#292929]' : 'text-gray-400 '
        }`}
      >
        <div className='flex'>
          <div className='my-auto mr-4 flex w-6 items-center justify-center'>
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className='text-sm font-medium'>{text}</div>
        </div>
      </li>
    </Link>
  );
}
