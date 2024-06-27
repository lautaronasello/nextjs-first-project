import Users from '../components/Users/Users.jsx';

const fetchUsers = async () => {
  const res = await fetch('https://reqres.in/api/users?per_page=5');
  const data = await res.json();
  return data.data;
};

export default async function HomePage() {
  let users = await fetchUsers();
  return (
    <div>
      <Users users={users} />
    </div>
  );
}
