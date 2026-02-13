import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <Image src="/next-logo.png" alt="Next.js Logo" width={200} height={200} />
    </div>
  );
}
