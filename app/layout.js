import { Jost } from "next/font/google";
import "./globals.css";

const font = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight:["100","200","300","400" , "500", "600", "700" , "800", "900"],
});

export const metadata = {
  title: "Deepseek Ai App",
  description: "This is a deepseek ai app clone project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
