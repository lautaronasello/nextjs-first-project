import Link from 'next/link.js';
import UserCard from '../../../components/Users/UserCard.jsx';

const getUserById = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = res.json();
  return data;
};

export default async function PageUser({ params }) {
  const user = await getUserById(params.id);
  console.log(user);
  return (
    <div>
      <UserCard user={user.data} />
      <Link href={'/'}>Volver</Link>
    </div>
  );
}
