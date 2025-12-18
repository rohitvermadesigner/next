import styles from "./Header.module.css";
import Navbar from "../Navbar";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-100">
            <Link href="/">
                <img src="/logo.webp" alt="Logo" className="w-40" />
            </Link>
            <Navbar />
        </header>
    );
}