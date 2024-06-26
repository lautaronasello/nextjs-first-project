'use client';

import { useEffect, useState } from 'react';

export default function Users({ users }) {
  const [idHover, setIdHover] = useState(null);
  const [isOnCard, setIsOnCard] = useState(false);

  const handleMouseEnter = (userId) => {
    setIdHover(userId);
    setIsOnCard(true);
  };

  const handleMouseLeave = () => {
    setIdHover(null);
    setIsOnCard(false);
  };

  return (
    <ul className=''>
      {users.map((user) => (
        <li
          key={user.id}
          className={`relative ease-in duration-150 top-0 bg-slate-400 mb-2 p-4 rounded-md flex justify-between cursor-pointer hover:shadow-lg hover:scale-125 ${
            idHover !== user.id && isOnCard ? 'blur-md' : ''
          }`}
          onClick={() => {
            alert('hizo click!');
          }}
          onMouseEnter={() => handleMouseEnter(user.id)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            src={user.avatar}
            alt='user avatar'
            className='rounded-full w-20'
          />
          <div>
            <h5 className='font-bold'>
              {user.id} - {user.first_name} {user.last_name}
            </h5>
            <p className='text-slate-50'>email: {user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
