import Image from "next/image";
import { TopStatusBar } from "@/components/layout/TopStatusBar";
import { UserPanel } from "@/components/homepage/UserPanel";
import { MainMenuGrid } from "@/components/homepage/MainMenuGrid";

export default function Homepage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black text-white">
      <Image
        src="/homescreen-bg.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <TopStatusBar />
        <div className="flex flex-col items-center gap-6">
          <UserPanel />
          <MainMenuGrid />
        </div>
      </div>
    </main>
  );
}
