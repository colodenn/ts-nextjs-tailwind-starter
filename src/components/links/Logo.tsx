import Link from 'next/link';

export default function Logo() {
  return (
    <Link passHref={true} href='/dashboard'>
      <h3 className='cursor-pointer p-2 font-secondary text-2xl'>preview.ai</h3>
    </Link>
  );
}
