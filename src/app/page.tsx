'use client';

import { useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';

export default function Portfolio() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const language = 'en';
    router.push(`/${language}`);
  }, []);
  return (
    <>
    </>
  );
}
