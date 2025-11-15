import Domain from "@/components/Domain";
import HomePage from "@/components/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-red-600 text-7xl">
      <h1>Welcome to the Home Page</h1>
            <HomePage />

      <Domain />
    </div>
  );
}
