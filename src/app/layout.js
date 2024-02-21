import { cardo } from "./ui/fonts";
import "./globals.css";

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
      url: "/open-graph-preview.png",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`main no-scrollbar ${cardo.className}`}>{children}</body>
    </html>
  );
}
