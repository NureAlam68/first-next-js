import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "About us page",
};

const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav className="my-6">
        <ul className="flex space-x-4">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default AboutLayout;
