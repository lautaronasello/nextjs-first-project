'use client';

import Link from 'next/link.js';
import { useState } from 'react';
import { FcEmptyTrash, FcFullTrash } from 'react-icons/fc';
import UserCard from './UserCard.jsx';
import TrashUserBtn from './TrashUserBtn.jsx';

export default function Users({ users }) {
  const [idHover, setIdHover] = useState(null);
  const [isOnCard, setIsOnCard] = useState(false);
  const [listUsers, setListUsers] = useState(users);
  const handleMouseEnter = (userId) => {
    setIdHover(userId);
    setIsOnCard(true);
  };
  // let ComponentTrash = <FcEmptyTrash />;
  const handleMouseLeave = () => {
    setIdHover(null);
    setIsOnCard(false);
  };

  return (
    <div className='max-h-screen  '>
      <div className='flex flex-col justify-center gap-2 py-5 '>
        {listUsers.map((user) => (
          <div
            className='flex flex-row justify-center items-center ease-in duration-200  hover:scale-125 gap-1'
            onMouseEnter={() => handleMouseEnter(user.id)}
            onMouseLeave={handleMouseLeave}
            key={user.id}
          >
            <Link
              href={`/users/${user.id}`}
              className={`flex justify-between mx-2 ease-in duration-200 min-w-full ${
                idHover !== user.id && isOnCard ? 'blur-md ' : ''
              }`}
            >
              <UserCard user={user} idHover={idHover} isOnCard={isOnCard} />
            </Link>
            <TrashUserBtn
              user={user}
              idHover={idHover}
              setListUsers={setListUsers}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
