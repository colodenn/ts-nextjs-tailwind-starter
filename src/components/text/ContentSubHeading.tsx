export default function ContentSubHeading({ text }: { text: string }) {
  return (
    <div className='mb-4'>
      <h3 className='mb-1 font-primary text-base font-bold tracking-wide text-gray-900'>
        {text}
      </h3>
    </div>
  );
}
