import { cardo } from "./ui/fonts";
import "./globals.css";

export const metadata = {
  title: "Josh Duncan's Portfolio",
  description: "Josh Duncan's professional software engineering portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cardo.className}>{children}</body>
    </html>
  );
}
