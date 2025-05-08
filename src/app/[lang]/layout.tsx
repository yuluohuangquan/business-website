"use client"
import { ReactNode } from 'react';
import { Navbar, Footer } from "@/components";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <>
     <Navbar />
     <div className='min-h-[calc(100vh-320px)] pt-[60px]'>
      {children}
     </div>
     <Footer />
  </>;
}