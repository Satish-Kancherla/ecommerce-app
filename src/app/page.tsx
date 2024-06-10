import Link from "next/link";

export default function Home() {
  return (
    <main className=" p-2 flex items-center justify-center gap-4 h-screen ">
      <button className="bg-red-500 p-2 rounded-lg text-md font-semibold">
        <Link href={"/login"}>Login</Link>
      </button>
      <button className="bg-blue-500 p-2 rounded-lg text-md font-semibold">
      <Link href={"/signin"}>Signup</Link>
      </button>
    </main>
  );
}
