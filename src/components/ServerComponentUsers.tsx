// Define User interface
interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

const ServerComponentUsers = async () => {
  const usersPromise = fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=2"
  ).then((res) => res.json() as Promise<User[]>);

  await new Promise((resolve) => setTimeout(resolve, 7000));

  // Parallel data fetching
  const [users] = await Promise.all([usersPromise]);
  return (
    <div>
      Random id: {crypto.randomUUID().split("-")[0]}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-2">Users</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded-md">
              <h5 className="font-medium">{user.name}</h5>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">{user.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerComponentUsers;
