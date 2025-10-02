"use client";
import {
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import Link from "next/link";

export default function Assignments() {
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
          <GreenCheckmark />
          <BsPlus className="fs-4" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      {/* Assignments List */}
      <div className="wd-assignments-list">
        <div className="wd-assignment-item position-relative border-bottom pb-3 mb-3">
          <div className="wd-green-line position-absolute" style={{
            left: '20px',
            top: '0',
            bottom: '0',
            width: '3px',
            backgroundColor: '#28a745'
          }}></div>
          <div className="d-flex align-items-start justify-content-between ps-5">
            <div className="flex-grow-1">
              <Link href="/Courses/1234/Assignments/Editor" className="text-decoration-none text-dark">
                <div className="d-flex align-items-center mb-2">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="fw-bold">A1 - ENV + HTML</span>
                </div>
                <div className="ps-4">
                  <div className="text-muted">
                    <span className="text-warning">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
                  </div>
                  <div className="text-muted">
                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
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

        <div className="wd-assignment-item position-relative border-bottom pb-3 mb-3">
          <div className="wd-green-line position-absolute" style={{
            left: '20px',
            top: '0',
            bottom: '0',
            width: '3px',
            backgroundColor: '#28a745'
          }}></div>
          <div className="d-flex align-items-start justify-content-between ps-5">
            <div className="flex-grow-1">
              <Link href="/Courses/1234/Assignments/Editor" className="text-decoration-none text-dark">
                <div className="d-flex align-items-center mb-2">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="fw-bold">A2 - CSS + BOOTSTRAP</span>
                </div>
                <div className="ps-4">
                  <div className="text-muted">
                    <span className="text-warning">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
                  </div>
                  <div className="text-muted">
                    <strong>Due</strong> May 20 at 11:59pm | 100 pts
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

        <div className="wd-assignment-item position-relative border-bottom pb-3 mb-3">
          <div className="wd-green-line position-absolute" style={{
            left: '20px',
            top: '0',
            bottom: '0',
            width: '3px',
            backgroundColor: '#28a745'
          }}></div>
          <div className="d-flex align-items-start justify-content-between ps-5">
            <div className="flex-grow-1">
              <Link href="/Courses/1234/Assignments/Editor" className="text-decoration-none text-dark">
                <div className="d-flex align-items-center mb-2">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="fw-bold">A3 - JAVASCRIPT + REACT</span>
                </div>
                <div className="ps-4">
                  <div className="text-muted">
                    <span className="text-warning">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am
                  </div>
                  <div className="text-muted">
                    <strong>Due</strong> May 27 at 11:59pm | 100 pts
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
      </div>
    </div>
  );
}