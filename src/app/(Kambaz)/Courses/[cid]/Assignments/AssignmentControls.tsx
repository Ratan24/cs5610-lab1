"use client";

import { Button, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControls({
  assignmentName,  // Changed from assignmentTitle
  setAssignmentName,  // Changed from setAssignmentTitle
  addAssignment,
}: {
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  addAssignment: () => void;
}) {
  return (
    <div id="wd-assignment-controls" className="mb-3">
      <FormControl
        value={assignmentName}
        onChange={(e) => setAssignmentName(e.target.value)}
        placeholder="New Assignment Name"
        className="mb-2 w-50"
        id="wd-assignment-name-input"
      />
      <Button
        variant="danger"
        size="lg"
        id="wd-add-assignment-btn"
        onClick={addAssignment}
      >
        <FaPlus className="me-2" />
        Assignment
      </Button>
    </div>
  );
}