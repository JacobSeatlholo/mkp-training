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
  title: "MKP Training | Precision Striking. Elite Conditioning. Championship Mindset.",
  description:
    "Michael K. Pienaar — professional fighter and elite coach at Iron Tiger Gym, Cape Town. Private striking, MMA coaching, and fight camp preparation.",
  keywords: [
    "MKP Training",
    "Michael K Pienaar",
    "Iron Tiger Gym",
    "Cape Town MMA",
    "striking coach",
    "fight training",
    "MMA Cape Town",
    "combat sports",
  ],
  authors: [{ name: "Michael K. Pienaar" }],
  icons: {
    icon: "/mkp-logo.svg",
  },
  openGraph: {
    title: "MKP Training | Precision Striking. Elite Conditioning.",
    description:
      "Train with Michael K. Pienaar — professional fighter and elite coach at Iron Tiger Gym, Cape Town.",
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
