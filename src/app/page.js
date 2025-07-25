// app/page.jsx (or pages/index.js for older Next.js versions)
import Image from "next/image";
import LoginButton from "./Components/LoginButton.jsx";
import UserInfo from "./Components/UserInfo.jsx";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route.js";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="min-h-screen  flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to Our Next.js App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is the home page built with Next.js and styled using Tailwind
          CSS.
        </p>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>

        <LoginButton></LoginButton>
        <p className="font-bold">FORM CLIENT COMPONENTS</p>
        <UserInfo />
        {JSON.stringify(session)}
      </div>
    </main>
  );
}
