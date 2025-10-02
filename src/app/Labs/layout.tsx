"use client";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TOC from "./TOC";

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="d-flex">
      <div style={{ width: "150px" }}>
        <TOC />
      </div>
      <div className="flex-fill p-3">{children}</div>
    </div>
  );
}