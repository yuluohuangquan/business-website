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
  title: "WBG 万博集 | 工业五金阀门与RPA自动化解决方案",
  description: "万博集(WBG)专注于提供优质工业五金阀门产品与影刀RPA自动化解决方案，为企业提供专业的工业设备和流程自动化服务。| WBG specializes in industrial hardware valves and YingDao RPA automation solutions, providing professional industrial equipment and process automation services.",
  keywords: "万博集, WBG, 工业五金, 阀门, 影刀RPA, 自动化解决方案, 工业设备, 流程自动化, industrial valves, hardware, RPA solutions, automation",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "WBG 万博集 | 工业五金阀门与RPA自动化解决方案",
    description: "专业提供工业五金阀门产品与影刀RPA自动化解决方案 | Industrial Valves & RPA Solutions",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
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
