"use client";

import { useSearchParams } from "next/navigation";

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  return (
    <>
      {children}
      {searchParams.get("modal") && (
        <div className="fixed right-0 bottom-0 w-40 h-20 border shadow-xl flex items-center justify-center">
          <h1>Modal Open</h1>
        </div>
      )}
    </>
  );
}
