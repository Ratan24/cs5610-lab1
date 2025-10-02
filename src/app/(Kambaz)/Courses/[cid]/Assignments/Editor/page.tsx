"use client";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="d-flex justify-content-end align-items-center mb-3">
        <Button variant="success" className="me-2">
          <FaCheckCircle className="me-2" />
          Published
        </Button>
        <Button variant="secondary">
          <FaEllipsisV />
        </Button>
      </div>
      <hr />
      <FormGroup>
        <FormLabel>Assignment Name</FormLabel>
        <FormControl
          id="wd-assignment-name"
          defaultValue="A1 - ENV + HTML"
        />
      </FormGroup>
      <br />
      <FormGroup>
        <FormControl
          as="textarea"
          id="wd-assignment-description"
          rows={5}
          defaultValue="The assignment is available online. Submit a link to the landing page of your web application."
        />
      </FormGroup>
      <br />
      <Row className="mb-3">
        <Col md={4} className="d-flex justify-content-end">
          <FormLabel>Points</FormLabel>
        </Col>
        <Col md={8}>
          <FormControl id="wd-points" type="number" defaultValue={100} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={4} className="d-flex justify-content-end">
          <FormLabel>Assign</FormLabel>
        </Col>
        <Col md={8}>
          <div className="border p-3 rounded">
            <FormGroup>
              <FormLabel>
                <strong>Assign to</strong>
              </FormLabel>
              <FormControl id="wd-assign-to" defaultValue="Everyone" />
            </FormGroup>
            <br />
            <FormGroup>
              <FormLabel>
                <strong>Due</strong>
              </FormLabel>
              <FormControl id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </FormGroup>
            <br />
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>
                    <strong>Available from</strong>
                  </FormLabel>
                  <FormControl
                    id="wd-available-from"
                    type="date"
                    defaultValue="2024-05-06"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>
                    <strong>Until</strong>
                  </FormLabel>
                  <FormControl
                    id="wd-until"
                    type="date"
                    defaultValue="2024-05-20"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <hr />
      <div className="d-flex justify-content-end">
        <Link href="/Courses/1234/Assignments">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
        </Link>
        <Link href="/Courses/1234/Assignments">
          <Button variant="danger">Save</Button>
        </Link>
      </div>
    </div>
  );
}