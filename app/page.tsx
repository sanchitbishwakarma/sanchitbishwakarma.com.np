import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanchit Bishwakarma",
  description:
    "Developer portfolio — projects, contributions, YouTube channel, and platforms.",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans min-h-screen text-9xl font-bold">
      <span>Welcome Sanchit</span>
    </div>
  );
}
