export default function ContentHeading({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h1 className='mb-1 font-secondary text-xl font-bold tracking-wide text-gray-900'>
        {text}
      </h1>
      <p className='mr-4 text-sm text-neutral-500'>{children}</p>
    </div>
  );
}
