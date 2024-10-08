import { Pacifico } from "next/font/google";
import "./globals.css";

const outfit = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Receitas da Julia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        <main className="tracking-wider leading-8">{children}</main>
      </body>
    </html>
  );
}
