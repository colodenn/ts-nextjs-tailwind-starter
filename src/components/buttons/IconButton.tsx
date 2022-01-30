/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconButton({
  icon,
  text,
  onClick,
  color,
}: {
  icon: any;
  text: string;
  onClick?: any;
  color?: string;
}) {
  return (
    <button
      onClick={() => onClick()}
      className={
        color == 'danger'
          ? ' flex items-center rounded-sm bg-[#b61e1e] px-4 py-2 font-primary text-sm font-medium text-white hover:bg-opacity-90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-1'
          : ' flex items-center rounded-sm bg-[#292929] px-4 py-2 font-primary text-sm font-medium text-white hover:bg-opacity-90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-1'
      }
    >
      <div className='mr-4'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>{text}</div>
    </button>
  );
}
