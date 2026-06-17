import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syntax & Flow | Studentdrevet Konsulentselskap",
  description:
    "Syntax & Flow gir nyutdannede studenter fra Høgskolen i Østfold reell arbeidserfaring gjennom tverrfaglige prosjekter innen IT, design og økonomi. Gratis for bedrifter – stor verdi for alle.",
  keywords: [
    "studentbedrift",
    "praksis",
    "HiØ",
    "Høgskolen i Østfold",
    "IT-konsulent",
    "design",
    "økonomi",
    "NAV",
    "Østfold",
  ],
  openGraph: {
    title: "Syntax & Flow | Studentdrevet Konsulentselskap",
    description:
      "Vi gir nyutdannede reell arbeidserfaring og næringslivet en risikofri test-run av morgendagens talenter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
