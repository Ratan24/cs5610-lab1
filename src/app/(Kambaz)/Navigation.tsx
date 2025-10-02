"use client";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { FaFlask } from "react-icons/fa";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard, exact: true },
    { label: "Courses", path: "/Dashboard", icon: LiaBookSolid, exact: false },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline, exact: true },
    { label: "Inbox", path: "/Inbox", icon: FaInbox, exact: true },
    { label: "Labs", path: "/Labs", icon: FaFlask, exact: true },
  ];

  const isActive = (link: any) => {
    if (link.exact) {
      return pathname === link.path;
    } else {
      return pathname.includes(link.path);
    }
  };

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-flex flex-column bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      {/* Logo Section */}
      <ListGroup.Item className="bg-black border-0 text-center py-4">
        <div className="d-flex flex-column align-items-center">
          <div 
            className="bg-danger text-white rounded d-flex align-items-center justify-content-center mb-2"
            style={{ width: "60px", height: "60px", fontSize: "2rem", fontWeight: "bold" }}
          >
            N
          </div>
          <div className="text-white" style={{ fontSize: "0.7rem", lineHeight: "1.2" }}>
            THE VERITAS<br />VIRTUS
          </div>
        </div>
      </ListGroup.Item>

      {/* Account Link */}
      <Link href="/Account"
        className={`list-group-item text-center border-0 bg-black text-decoration-none py-3
        ${pathname === "/Account" ? "text-white" : "text-danger"}`}>
        <FaRegCircleUser className={`fs-1 mb-1 ${pathname === "/Account" ? "text-white" : "text-danger"}`} />
        <div style={{ fontSize: "0.8rem" }}>Account</div>
      </Link>

      {/* Other Navigation Links */}
      {links.map((link) => (
        <Link key={link.label} href={link.path}
          className={`list-group-item text-center border-0 bg-black text-decoration-none py-3
          ${isActive(link) ? "text-white" : "text-danger"}`}>
          <link.icon className={`fs-1 mb-1 ${isActive(link) ? "text-white" : "text-danger"}`} />
          <div style={{ fontSize: "0.8rem" }}>{link.label}</div>
        </Link>
      ))}
    </ListGroup>
  );
}