"use client";

import { FormControl, InputGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "next/navigation";
import GreenCheckmark from "../Modules/GreenCheckmark";
import Link from "next/link";
import * as db from "../../../Database";

interface Assignment {
  _id: string;
  name: string;
  description: string;
  course: string;
  points: number;
  dueDate: string;
  availableFromDate: string;
  availableUntilDate: string;
}

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
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
                      <span className="fw-bold">{assignment.name}</span>
                    </div>
                    <div className="ps-4">
                      <div className="text-muted">
                        <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableFromDate}
                      </div>
                      <div className="text-muted">
                        <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="d-flex align-items-center gap-2">
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