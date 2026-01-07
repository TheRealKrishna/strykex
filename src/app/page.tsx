import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/dashboard";
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"></div>
  );
}
