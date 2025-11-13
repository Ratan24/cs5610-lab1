"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const section = pathParts[pathParts.length - 1];
  
  return (
    <span>
      {section && ` > ${section}`}
    </span>
  );
}