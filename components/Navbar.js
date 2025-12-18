import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-8 font-weight-medium">
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/services">Our Services</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/careers">Careers</Link>
      <Link href="/contact">Contact Us</Link>
    </nav>
  );
}