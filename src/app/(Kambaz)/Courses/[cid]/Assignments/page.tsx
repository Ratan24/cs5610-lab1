"use client";

import { FormControl, InputGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import Link from "next/link";

interface Assignment {
  _id: string;
  name: string;  // Changed from title
  description: string;
  course: string;
  points: number;
  dueDate: string;
  availableFromDate: string;  // Changed from availableFrom
  availableUntilDate: string;  // Changed from availableUntil
  editing?: boolean;
}

export default function Assignments() {
  const { cid } = useParams() as { cid: string };
  const [assignmentName, setAssignmentName] = useState("");  // Changed from assignmentTitle
  const { assignments } = useSelector(
    (state: { assignmentsReducer: { assignments: Assignment[] } }) =>
      state.assignmentsReducer
  );
  const dispatch = useDispatch();

  return (
    <div id="wd-assignments">
      {/* Add Assignment Controls */}
      <AssignmentControls
        assignmentName={assignmentName}
        setAssignmentName={setAssignmentName}
        addAssignment={() => {
          dispatch(addAssignment({ 
            name: assignmentName,  // Changed from title
            course: cid,
            points: 100,
            dueDate: new Date().toISOString().split('T')[0],
          }));
          setAssignmentName("");
        }}
      />

      {/* Search Bar */}
      <div className="mb-3">
        <InputGroup style={{ width: "300px" }}>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <FormControl placeholder="Search for Assignments" />
        </InputGroup>
      </div>

      {/* Assignments Header */}
      <div className="d-flex align-items-center justify-content-between bg-secondary p-3 mb-3">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <span className="fw-bold">ASSIGNMENTS</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span>40% of Total</span>
          <GreenCheckmark />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      {/* Assignments List */}
      <div className="wd-assignments-list">
        {assignments
          .filter((assignment: Assignment) => assignment.course === cid)
          .map((assignment: Assignment) => (
            <div key={assignment._id} className="wd-assignment-item position-relative border-bottom pb-3 mb-3">
              <div className="wd-green-line position-absolute" style={{
                left: '20px',
                top: '0',
                bottom: '0',
                width: '3px',
                backgroundColor: '#28a745'
              }}></div>
              <div className="d-flex align-items-start justify-content-between ps-5">
                <div className="flex-grow-1">
                  <Link 
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link text-decoration-none text-dark"
                  >
                    <div className="d-flex align-items-center mb-2">
                      <BsGripVertical className="me-2 fs-3" />
                      {!assignment.editing && (
                        <span className="fw-bold">{assignment.name}</span>
                      )}
                      {assignment.editing && (
                        <FormControl
                          className="w-50 d-inline-block"
                          onClick={(e) => e.preventDefault()}
                          onChange={(e) =>
                            dispatch(updateAssignment({ ...assignment, name: e.target.value }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              dispatch(updateAssignment({ ...assignment, editing: false }));
                            }
                          }}
                          value={assignment.name}
                        />
                      )}
                    </div>
                    <div className="ps-4">
                      <div className="text-muted">
                        <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableFromDate || 'N/A'}
                      </div>
                      <div className="text-muted">
                        <strong>Due</strong> {assignment.dueDate || 'N/A'} | {assignment.points} pts
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <AssignmentControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))}
                    editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))}
                  />
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}