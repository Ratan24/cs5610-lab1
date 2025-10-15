"use client";

import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((assignment: any) => assignment._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue={assignment.title} className="form-control mb-3" />

      <textarea id="wd-description" className="form-control mb-3" rows={5} defaultValue={assignment.description} />

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-points">Points</label>
        </Col>
        <Col md={9}>
          <input id="wd-points" defaultValue={assignment.points} className="form-control" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-group">Assignment Group</label>
        </Col>
        <Col md={9}>
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-display-grade-as">Display Grade as</label>
        </Col>
        <Col md={9}>
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
          </select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </Col>
        <Col md={9}>
          <div className="border rounded p-3">
            <select id="wd-submission-type" className="form-select mb-3">
              <option value="Online">Online</option>
            </select>
            <label>Online Entry Options</label>
            <div>
              <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
              <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
              <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
              <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
              <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-assign-to">Assign to</label>
        </Col>
        <Col md={9}>
          <input id="wd-assign-to" defaultValue="Everyone" className="form-control" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-due-date">Due</label>
        </Col>
        <Col md={9}>
          <input type="date" id="wd-due-date" defaultValue={assignment.dueDate} className="form-control" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-available-from">Available from</label>
        </Col>
        <Col md={9}>
          <input type="date" id="wd-available-from" defaultValue={assignment.availableFromDate} className="form-control" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-available-until">Until</label>
        </Col>
        <Col md={9}>
          <input type="date" id="wd-available-until" defaultValue={assignment.availableUntilDate} className="form-control" />
        </Col>
      </Row>

      <hr />

      <div className="d-flex justify-content-end">
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="secondary" className="me-2">Cancel</Button>
        </Link>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="danger">Save</Button>
        </Link>
      </div>
    </div>
  );
}