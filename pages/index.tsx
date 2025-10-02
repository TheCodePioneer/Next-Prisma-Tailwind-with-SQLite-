import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<{id:number, name:string, email:string}[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">
        Next.js + Prisma + Tailwind
      </h1>

      <ul className="bg-white shadow rounded p-4">
        {users.map((user) => (
          <li key={user.id} className="text-gray-800">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
