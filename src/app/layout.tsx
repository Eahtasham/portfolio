import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eahtasham.xyz"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.bio,
  keywords: [
    "Eahtasham Ummam",
    "Eahtasham",
    "Ummam",
    "Software Engineer",
    "AI Automation Builder",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Java Developer",
    "AI Chatbot Developer",
    "Software Engineer Kolkata",
    "Web Developer India",
    "OneScript",
    "Samvidhaan AI",
    "PrepWise AI",
  ],
  authors: [{ name: profile.name, url: "https://eahtasham.xyz" }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
    url: "https://eahtasham.xyz",
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "profile",
    firstName: "Eahtasham",
    lastName: "Ummam",
    username: "Eahtasham",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — Software Engineer & AI Automation Builder`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
    creator: "@Eahtasham_",
    images: ["/images/og-image.png"],
  },
  verification: {
    google: "google-site-verification-id", // placeholder for GSC verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
