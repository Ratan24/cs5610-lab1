"use client";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Courses", icon: LiaBookSolid },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
  ];
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroup.Item className="bg-black border-0 text-center" as="a"
        href="https://www.northeastern.edu/" target="_blank">
        <Image src="/images/NEU.png" width={75} height={75} alt="NEU Logo"/>
      </ListGroup.Item>

      <Link href="/Account"
        className={`list-group-item text-center border-0 bg-black text-white text-decoration-none
        ${pathname.includes("/Account") && "bg-white text-danger"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("/Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>

      {links.map((link) => (
        <Link key={link.path} href={link.path}
          className={`list-group-item text-center border-0 bg-black text-white text-decoration-none
          ${pathname.includes(link.path) && "bg-white text-danger"}`}>
          <link.icon className={`fs-1 ${pathname.includes(link.path) ? "text-danger" : "text-white"}`} />
          <br />
          {link.label}
        </Link>
      ))}
    </ListGroup>
  );
}