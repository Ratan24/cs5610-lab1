"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  return (
    <div id="wd-account-navigation" style={{ width: 150 }}>
      <ListGroup className="wd list-group fs-5 rounded-0">
        {!currentUser && (
          <>
            <ListGroupItem
              active={pathname.includes("/Account/Signin")}
              className="border-0"
            >
              <Link href="/Account/Signin" className="text-decoration-none text-dark">
                Signin
              </Link>
            </ListGroupItem>
            <ListGroupItem
              active={pathname.includes("/Account/Signup")}
              className="border-0"
            >
              <Link href="/Account/Signup" className="text-decoration-none text-dark">
                Signup
              </Link>
            </ListGroupItem>
          </>
        )}
        {currentUser && (
          <ListGroupItem
            active={pathname.includes("/Account/Profile")}
            className="border-0"
          >
            <Link href="/Account/Profile" className="text-decoration-none text-dark">
              Profile
            </Link>
          </ListGroupItem>
        )}
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
