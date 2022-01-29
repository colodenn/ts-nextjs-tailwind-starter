import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HoverCard({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <>
      {hover && (
        <div className='absolute -mt-80 w-72 rounded-sm border-[1px] bg-white p-4 shadow'>
          <div className='flex items-center'>
            <div className='mr-2'>
              {' '}
              <FontAwesomeIcon icon={faVideo} />
            </div>
            <div>Prinzessa | Youtube</div>
          </div>
          <div className='mt-2 rounded-sm'>
            <Image
              src='https://www.asfinag.at/media/2xgepfi5/p1090216_13004_office.jpg'
              width={250}
              height={150}
              alt=''
              className='rounded-sm'
            />
          </div>
          <div>
            <p className='text-sm'>
              Hover over the hyperlinks here to see how it looks. Click on video
              & audio links to get the immersive preivew. Works on any website,
              blog & e-commerce store.
            </p>
          </div>
        </div>
      )}

      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className='cursor-pointer '
      >
        <Link passHref={true} href={link}>
          <div className=' underline'>{text}</div>
        </Link>
      </div>
    </>
  );
}
