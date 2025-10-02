"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  const links = [
    { name: "Signin", href: "/Account/Signin" },
    { name: "Signup", href: "/Account/Signup" },
    { name: "Profile", href: "/Account/Profile" },
  ];

  return (
    <div id="wd-account-navigation" style={{ width: 150 }}>
      <ListGroup className="wd list-group fs-5 rounded-0">
        {links.map((link) => (
          <ListGroupItem
            key={link.href}
            active={pathname.includes(link.href)}
            className="border-0"
          >
            <Link href={link.href} className="text-decoration-none text-dark">
              {link.name}
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}