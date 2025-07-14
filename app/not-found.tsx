import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='text-lg text-gray-500 mb-8'>
        The page you are looking for does not exist.
      </p>
      <Link
        href='/Dashboard'
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        <span className='flex gap-2'>
          Go to dashboard <HomeIcon className='w-6' />
        </span>
      </Link>
    </div>
  );
}
