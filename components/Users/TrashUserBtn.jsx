import { useState } from 'react';
import { FcEmptyTrash, FcFullTrash } from 'react-icons/fc';
import { CgSpinner } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';

export default function TrashUserBtn({
  user,
  idHover,
  setListUsers,
  handleMouseLeave,
}) {
  const [ComponentTrash, setComponentTrash] = useState(<FcEmptyTrash />);
  const [Loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const deleteUser = async (id) => {
    setLoading(true);
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: 'delete',
    });
    setLoading(false);

    setSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSuccess(false);

    setListUsers((prevState) => {
      return prevState.filter((user) => user.id !== id);
    });

    handleMouseLeave();
  };

  return (
    <div className='flex justify-end'>
      <div>
        <button
          className={`transition duration-200 ${
            success ? 'bg-green-600 bg-opacity-60' : 'bg-slate-300 bg-opacity-5'
          } rounded-md  
             ${
               idHover === user.id
                 ? 'opacity-100  ease-in text-2xl'
                 : 'opacity-0  ease-out'
             }
            px-2 py-1 align-top hover:scale-110  hover:rounded-md`}
          onClick={() => deleteUser(user.id)}
          onMouseEnter={() => setComponentTrash(<FcFullTrash />)}
          onMouseLeave={() => setComponentTrash(<FcEmptyTrash />)}
        >
          {Loading ? (
            <CgSpinner className='animate-spin text-slate-300 transition ease-in duration-300' />
          ) : success ? (
            <FaCheck className='text-green-300 ' />
          ) : (
            ComponentTrash
          )}
        </button>
      </div>
    </div>
  );
}
