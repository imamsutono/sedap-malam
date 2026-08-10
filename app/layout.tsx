import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Sedap Malam Pasuruan — Inspirasi Tanpa Batas Ekonomi Kreatif",
  description:
    "Ekosistem kreatif digital Kabupaten Pasuruan. Satu harum, beragam karya: musik, seni pertunjukan, literasi, kriya, kuliner, dan lainnya.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
