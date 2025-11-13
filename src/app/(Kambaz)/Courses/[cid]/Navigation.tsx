"use client";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <ListGroup className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item
          key={link}
          active={pathname.includes(link)}
          className="border-0"
        >
          <Link
            href={`/Courses/${cid}/${link}`}
            className="text-decoration-none text-dark"
          >
            {link}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}