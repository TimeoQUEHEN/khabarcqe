import type { Metadata } from "next";
import {Geist, Geist_Mono} from "next/font/google";
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
  title: "KHabarcqé",
  description: "Restauration, Hébergement et divertissement dans un chalereux environnement !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
    >
    <header className="navbar bg-our-black sticky top-0 z-30 border-black border-b-2">
        <div className={"navbar-start"}></div>
        <div className="navbar-center">
            <div className={"flex gap-8"}>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <a href="">Evenements</a>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-xl">K'Habarcq-é</a>
                <button className="btn btn-ghost">
                    <a href="/menu">Menus</a>
                </button>
            </div>
        </div>
        <div className="navbar-end"></div>
    </header>
    {children}
    </body>
    </html>
  );
}
