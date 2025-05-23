import type { Metadata } from "next";

//Polyfills
import "intersection-observer";

import "@/styles/index.scss";
import { Providers } from "@/providers";

export const metadata: Metadata = {
  title: "Daria Assignment Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" dir="rtl">
      <Providers>
        <body>
          {children}
          <div id="portal"></div>
        </body>
      </Providers>
    </html>
  );
}
