import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import "./globals.css";

const font = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']})

export const metadata: Metadata = {
  title: "NextJS Drupal",
  description: "Headless Drupal with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
