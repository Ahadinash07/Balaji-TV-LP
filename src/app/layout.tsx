import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://balajitvexpert.in"),
  title: "Balaji TV Repair | Expert TV Repair at Your Doorstep in Hyderabad",
  description: "From no display to motherboard issues, get your TV diagnosed and repaired at home with a 90-day warranty.",
  icons: {
    icon: "/image.png",
  },
  openGraph: {
    title: "Balaji TV Repair | Expert TV Repair in Hyderabad",
    description: "From no display to motherboard issues, get your TV diagnosed and repaired at home with a 90-day warranty.",
    url: "https://balajitvexpert.in",
    siteName: "Balaji TV Experts",
    images: [
      {
        url: "/Balaji-Images/Balaji TV Services Storefront.png",
        width: 1200,
        height: 630,
        alt: "Balaji TV Repair Experts",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji TV Repair | Expert TV Repair in Hyderabad",
    description: "From no display to motherboard issues, get your TV diagnosed and repaired at home with a 90-day warranty.",
    images: ["/Balaji-Images/Balaji TV Services Storefront.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5QDKB5M3');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QDKB5M3"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
