"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
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
        {currentUser && currentUser.role === "ADMIN" && (
          <ListGroupItem
            active={pathname.includes("/Account/Users")}
            className="border-0"
          >
            <Link href="/Account/Users" className="text-decoration-none text-dark">
              Users
            </Link>
          </ListGroupItem>
        )}
      </ListGroup>
    </div>
  );
}
