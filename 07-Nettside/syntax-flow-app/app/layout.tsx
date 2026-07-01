import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syntax & Flow | Tverrfaglig Prosjektorgan tilknyttet HiØ",
  description:
    "Syntax & Flow gir studenter fra Høgskolen i Østfold reell arbeidserfaring gjennom tverrfaglige prosjekter innen IT, design og økonomi. Gratis for bedrifter – stor verdi for alle.",
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
    title: "Syntax & Flow | Tverrfaglig Prosjektorgan tilknyttet HiØ",
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
    <html lang="no" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
