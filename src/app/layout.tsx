import "./globals.css";
import "../utils/promisePolyFill";
import { ModalProvider } from "../contexts/ModalContext";
import { Analytics } from "@vercel/analytics/react";

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Joshua Duncan's Software Engineering Portfolio",
  keywords: "software, engineer, developer, web, portfolio, resume, career",
  authors: { name: "Joshua Duncan" },
  creator: "Joshua Duncan",
  publisher: "Joshua Duncan",
  description:
    "Explore Joshua Duncan's innovative software engineering portfolio. Discover projects showcasing expertise in coding, design, and technology solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: {
      url: "/opengraphImages/portfolio-opengraph.jpg",
      width: 1903,
      height: 997,
    },
    title: "Joshua Duncan's Software Engineering Portfolio",
    description:
      "Explore Joshua Duncan's innovative software engineering portfolio. Discover projects showcasing expertise in coding, design, and technology solutions.",
    url: "/",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="no-scrollbar m-auto max-w-[4000px] touch-pan-y overflow-x-hidden bg-offBlack">
        <ModalProvider>{children}</ModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
