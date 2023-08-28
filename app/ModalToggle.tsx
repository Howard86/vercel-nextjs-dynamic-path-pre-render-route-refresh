"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ModalToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const modal = searchParams.get("modal");

    if (modal) {
      router.replace(pathname, { scroll: false });
    } else {
      router.replace(pathname + "?modal=1", { scroll: false });
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      Toggle Modal
    </button>
  );
}
