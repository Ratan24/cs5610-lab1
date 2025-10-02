"use client";
import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div id="wd-assignments-header" className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <InputGroup style={{ width: "300px" }}>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <FormControl placeholder="Search for Assignment" />
          </InputGroup>
          <div>
            <Button variant="secondary">
              <BsPlus /> Group
            </Button>
            <Button variant="danger" className="ms-2">
              <BsPlus /> Assignment
            </Button>
            <Button variant="secondary" className="ms-2">
              <FaEllipsisV />
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-assignment-item p-3 ps-1">
              <Link
                href="/Courses/1234/Assignments/Editor"
                className="text-decoration-none text-dark"
              >
                <BsGripVertical className="me-2 fs-3" />
                A1 - ENV + HTML
                <br />
                <small className="text-muted">
                  Multiple Modules | <strong>Not available until</strong> May 6
                  at 12:00am |
                  <strong> Due</strong> May 13 at 11:59pm | 100 pts
                </small>
              </Link>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-item p-3 ps-1">
              <Link
                href="/Courses/1234/Assignments/Editor"
                className="text-decoration-none text-dark"
              >
                <BsGripVertical className="me-2 fs-3" />
                A2 - CSS + BOOTSTRAP
                <br />
                <small className="text-muted">
                  Multiple Modules | <strong>Not available until</strong> May
                  13 at 12:00am |
                  <strong> Due</strong> May 20 at 11:59pm | 100 pts
                </small>
              </Link>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-item p-3 ps-1">
              <Link
                href="/Courses/1234/Assignments/Editor"
                className="text-decoration-none text-dark"
              >
                <BsGripVertical className="me-2 fs-3" />
                A3 - JAVASCRIPT + REACT
                <br />
                <small className="text-muted">
                  Multiple Modules | <strong>Not available until</strong> May
                  20 at 12:00am |
                  <strong> Due</strong> May 27 at 11:59pm | 100 pts
                </small>
              </Link>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}