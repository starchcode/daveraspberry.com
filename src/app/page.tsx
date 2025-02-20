export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen text-center'>
        <h1 className='text-4xl'>welcome to daveraspberry.com</h1>
        <p className='text-lg'>this website is under construction...</p>
        <p>this is {process.env.environment} environment: {process.env.vercel_env}.</p>
      </div>

    </>
  );
}
