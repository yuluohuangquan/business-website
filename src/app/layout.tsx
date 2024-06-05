import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Layout, FixedPlugin } from "@/components";

const myFont = localFont({
  src: "../style/font/OpenSans-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJS Tailwind Event Landing Page",
  description:
    "Introducing Tailwind Event Landing Page, a dynamic and visually appealing landing page template designed using Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ClerkProvider>
      <html>
        <head>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </head>
        <body className={myFont.className}>
          <Layout>
            {children}
            <FixedPlugin />
          </Layout>
        </body>
      </html>
    </ClerkProvider>
  );
}
