export default function SimpleCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=' border bg-white sm:rounded-sm'>
      <div className='px-4 py-5 sm:p-6'>{children}</div>
    </div>
  );
}
