import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zeyadlabs.com"),

  title: {
    default: "Zeyad Labs | Enterprise Infrastructure",
    template: "%s | Zeyad Labs",
  },

  description:
    "The professional portfolio of Zeyad Almahmoudi, showcasing enterprise infrastructure, Windows Server, Azure, networking, virtualization, technical support, and documented IT projects.",

  keywords: [
    "Zeyad Almahmoudi",
    "Zeyad Labs",
    "IT Support",
    "Systems Administrator",
    "Enterprise Infrastructure",
    "Windows Server",
    "Active Directory",
    "Microsoft Azure",
    "Hyper-V",
    "VMware",
    "Proxmox",
    "Networking",
    "Burnaby",
    "Vancouver",
    "British Columbia",
  ],

  authors: [
    {
      name: "Zeyad Almahmoudi",
      url: "https://zeyadlabs.com",
    },
  ],

  creator: "Zeyad Almahmoudi",
  publisher: "Zeyad Labs",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://zeyadlabs.com",
    siteName: "Zeyad Labs",
    title: "Zeyad Labs | Enterprise Infrastructure",
    description:
      "Enterprise infrastructure, cloud, networking, virtualization, technical support, and documented IT projects by Zeyad Almahmoudi.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zeyad Labs | Enterprise Infrastructure",
    description:
      "Enterprise infrastructure, cloud, networking, virtualization, and technical projects by Zeyad Almahmoudi.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}