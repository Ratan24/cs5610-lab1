"use client";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-3" />

      <textarea id="wd-description" className="form-control mb-3">
        The assignment is available online Submit a link to the landing page of your Web
        application running on Netlify. The landing page should include the following:
        Your full name and section Links to each of the lab assignments Link to the
        Kanbas application Links to all relevant source code repositories.
      </textarea>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-points">Points</label>
        </Col>
        <Col md={9}>
          <input id="wd-points" value={100} className="form-control" />
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
          <input id="wd-assign-to" value="Everyone" className="form-control" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-due-date">Due</label>
        </Col>
        <Col md={9}>
          <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-available-from">Available from</label>
        </Col>
        <Col md={9}>
          <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-available-until">Until</label>
        </Col>
        <Col md={9}>
          <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
        </Col>
      </Row>

      <hr />

      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}