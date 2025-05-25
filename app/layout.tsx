import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import type { RootLayoutProps } from "@/app/types";
import Logo from "@/public/logo.svg";
import Link from "next/link";

const alberSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${alberSans.className} ${montserratAlternates.variable}`}
      >
        <header>
          <nav className="flex justify-between px-[20px] py-[13.5px] lg:px-[40px] max-w-[1512px] w-full mx-auto">
            <Link href={"/"} prefetch={true}>
              <img src={Logo.src} alt="logo" />
            </Link>
            <ul className="flex gap-[40px]">
              <li>
                <Link href={"/3d-models"}>3d Models</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
