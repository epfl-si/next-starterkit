import { getUser } from "@/services/auth";

export default async function Home() {
  const user = await getUser();
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <pre className="bg-gray-100 p-4 rounded text-gray-800 container mx-auto">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
