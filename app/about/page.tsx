import type { Metadata } from "next";
import './about.css';

export const metadata : Metadata = {
  title: 'About -Excellence Auditing & Business Consultants',
  description: 'Learn more about our application and team.',
};

export default function About() {
  return (
    <div className="about">
      <h1>Welcome to the About Page</h1>
      <p>This is the about page of the application.</p>
    </div>
  );
}