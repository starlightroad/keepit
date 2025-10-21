import type { Metadata } from "next";

import "../../public/styles/globals.css";

import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";

import { APP_NAME, APP_SLOGAN } from "@/lib/constants";

import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_SLOGAN,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="iris">
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
