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

    <div className="navbar bg-our-black sticky top-0 z-30 border-black border-b-2">
        <div className="navbar-start">
            <div className={"dropdown"}>
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    Socials
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a href="https://x.com/khabarcqe">Twitter</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a>K'Habracq-é</a>
                        <ul className="p-2">
                            <li><a href="/event">Evenements</a></li>
                            <li><a href="/room">Chambres</a></li>
                            <li><a href="/menu">Menus</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <div className={"flex gap-8"}>
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    <a href="/event">Evenements</a>
                </div>
                <button className="btn btn-ghost">
                    <a href="/room">Chambres</a>
                </button>
                <a href="/" className="btn btn-ghost text-xl">K'Habarcq-é</a>
                <button className="btn btn-ghost">
                    <a href="/menu">Menus</a>
                </button>
            </div>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost">
                <a href="/about">A propos</a>
            </button>
        </div>
    </div>
    {children}
    </body>
    </html>
  );
}
