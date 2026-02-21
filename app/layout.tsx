import { Lato } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Sanchit Bishwakarma",
    template: "%s | Sanchit Bishwakarma",
  },
  description:
    "Developer portfolio — projects, contributions, YouTube channel, and platforms.",
  keywords: [
    "Sanchit Bishwakarma",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "GitHub Projects",
    "Open Source",
  ],
  authors: [{ name: "Sanchit Bishwakarma" }],
  robots: "index, follow",
  openGraph: {
    title: "Sanchit Bishwakarma",
    description:
      "Developer portfolio — projects, contributions, YouTube channel, and platforms.",
    type: "website",
    url: "https://sanchitbishwakarma.com.np",
    images: [
      {
        url: "/sanchit-bishwakarma-profile.jpg",
        width: 800,
        height: 800,
        alt: "Sanchit Bishwakarma",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lato.variable}>
      <body>{children}</body>
    </html>
  );
}
