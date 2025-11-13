"use client";

import { FaTrash, FaPencil } from "react-icons/fa6";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
  editAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
  editAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="d-flex align-items-center gap-2">
      <FaPencil
        onClick={() => editAssignment(assignmentId)}
        className="text-primary"
        style={{ cursor: "pointer" }}
      />
      <FaTrash
        onClick={() => deleteAssignment(assignmentId)}
        className="text-danger"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}