import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Layout } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';

const myFont = localFont({
  src: "../style/font/OpenSans-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJS Tailwind Event Landing Page",
  description:
    "Introducing Tailwind Event Landing Page, a dynamic and visually appealing landing page template designed using Tailwind CSS and Material Tailwind.",
};

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string }
}) {
  const messages = await getMessages();

  return (
    <html lang={lang}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${myFont.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
