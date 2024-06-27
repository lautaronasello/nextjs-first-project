import Link from 'next/link.js';

export default function UserCard({
  user,
  idHover = false,
  isOnCard = false,
  params,
}) {
  return (
    <div
      key={user.id}
      className='bg-slate-400 mb-2 p-4 rounded-md hover:shadow-lg min-w-full'
    >
      <div className='flex gap-4'>
        <img
          src={user.avatar}
          alt='user avatar'
          className='rounded-full w-20'
        />
        <div>
          <h5 className='font-bold text-black'>
            {user.id} - {user.first_name} {user.last_name}
          </h5>
          <p className='text-slate-50'>email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}
