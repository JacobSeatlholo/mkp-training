import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MKP Training — Muay Thai coaching in Cape Town",
  description:
    "Muay Thai, kickboxing and HIIT coaching with Michael Keegan Pienaar — private sessions and group classes out of Iron Tiger, Cape Town.",
  keywords: [
    "MKP Training",
    "Michael Keegan Pienaar",
    "Iron Tiger Gym",
    "Cape Town",
    "Muay Thai",
    "kickboxing",
    "HIIT",
    "striking coach",
    "fight training",
    "MMA Cape Town",
    "combat sports",
  ],
  authors: [{ name: "Michael Keegan Pienaar" }],
  icons: {
    icon: "/logo-white.svg",
  },
  openGraph: {
    title: "MKP Training — Muay Thai coaching in Cape Town",
    description:
      "Muay Thai, kickboxing and HIIT coaching with Michael Keegan Pienaar — private sessions and group classes out of Iron Tiger, Cape Town.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
