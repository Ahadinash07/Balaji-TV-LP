import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balaji TV Repair | Expert TV Repair at Your Doorstep in Hyderabad",
  description: "From no display to motherboard issues, get your TV diagnosed and repaired at home with a 90-day warranty.",
  icons: {
    icon: "/image.png",
  },
  openGraph: {
    title: "Balaji TV Repair | Expert TV Repair in Hyderabad",
    description: "From no display to motherboard issues, get your TV diagnosed and repaired at home with a 90-day warranty.",
    url: "https://balajitvexperts.com",
    siteName: "Balaji TV Experts",
    images: [
      {
        url: "/Images/IMG_0840.JPG",
        width: 1200,
        height: 630,
        alt: "Balaji TV Repair Experts",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased">
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
