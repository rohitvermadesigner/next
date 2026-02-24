import styles from "./Header.module.css";
import Navbar from "../Navbar";
import Link from "next/link";

export default function Header() {
  return (
    // <header className="flex items-center justify-between p-4 bg-gray-100">
    //     <Link href="/">
    //         <img src="/logo.webp" alt="Logo" className="w-40" />
    //     </Link>

    <header>
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-2 col-sm-12 col-xs-10">
            <div className="logo-row">
              <div className="logo">
                <Link href="/">
                  <img src="/logo.webp" alt="Logo" className="w-40" />
                </Link>
              </div>
              <span className="menu-icon">
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
