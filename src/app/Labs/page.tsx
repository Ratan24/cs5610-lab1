import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Ratan Pyla</h1>
      <h3>CS5610 Section: CS5610.19730.202610</h3>
      <h2>Labs</h2>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
      <hr />
      <p>
        Please check out <Link href="https://github.com/Ratan24/cs5610-lab1/tree/a3" target="_blank" rel="noopener noreferrer" id="wd-github">
          My GitHub Repository
        </Link>
      </p>
    </div>
  );
}