"use client";

import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as client from "../../../client";
import { updateAssignment, setAssignments } from "../reducer";

interface Assignment {
  _id: string;
  name: string;
  description: string;
  course: string;
  points?: number;
  dueDate?: string;
  availableFromDate?: string;
  availableUntilDate?: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams() as { cid: string; aid: string };
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    (state: { assignmentsReducer: { assignments: Assignment[] } }) =>
      state.assignmentsReducer
  );
  
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState<number>(100);
  const [dueDate, setDueDate] = useState("");
  const [availableFromDate, setAvailableFromDate] = useState("");
  const [availableUntilDate, setAvailableUntilDate] = useState("");

  useEffect(() => {
    const fetchAssignment = async () => {
      // First check Redux state
      let foundAssignment = assignments.find((a: Assignment) => a._id === aid) as Assignment;
      
      // If not found, fetch from server
      if (!foundAssignment) {
        foundAssignment = await client.findAssignmentById(aid);
      }
      
      if (foundAssignment) {
        setAssignment(foundAssignment);
        setName(foundAssignment.name || "");
        setDescription(foundAssignment.description || "");
        setPoints(foundAssignment.points || 100);
        setDueDate(foundAssignment.dueDate || "");
        setAvailableFromDate(foundAssignment.availableFromDate || "");
        setAvailableUntilDate(foundAssignment.availableUntilDate || "");
      }
    };
    
    fetchAssignment();
  }, [aid, assignments]);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  const onSave = async () => {
    const updatedAssignment: Assignment = {
      ...assignment,
      name,
      description,
      points,
      dueDate,
      availableFromDate,
      availableUntilDate,
    };
    
    await client.updateAssignment(updatedAssignment);
    dispatch(updateAssignment(updatedAssignment));
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input 
        id="wd-name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3" 
      />

      <textarea 
        id="wd-description" 
        className="form-control mb-3" 
        rows={5} 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-points">Points</label>
        </Col>
        <Col md={9}>
          <input 
            id="wd-points" 
            type="number"
            value={points || ""} 
            onChange={(e) => setPoints(parseInt(e.target.value) || 0)}
            className="form-control" 
          />
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
            <option value="Points">Points</option>
            <option value="Letter Grade">Letter Grade</option>
            <option value="Pass/Fail">Pass/Fail</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
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
        <Col md={6}>
          <input 
            type="date" 
            id="wd-due-date" 
            value={dueDate || ""} 
            onChange={(e) => setDueDate(e.target.value)}
            className="form-control" 
          />
        </Col>
        <Col md={3}>
          <input type="time" id="wd-due-time" defaultValue="23:59" className="form-control" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-available-from">Available from</label>
        </Col>
        <Col md={6}>
          <input 
            type="date" 
            id="wd-available-from" 
            value={availableFromDate || ""} 
            onChange={(e) => setAvailableFromDate(e.target.value)}
            className="form-control" 
          />
        </Col>
        <Col md={3}>
          <input type="time" id="wd-available-from-time" defaultValue="00:00" className="form-control" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-available-until">Until</label>
        </Col>
        <Col md={6}>
          <input 
            type="date" 
            id="wd-available-until" 
            value={availableUntilDate || ""} 
            onChange={(e) => setAvailableUntilDate(e.target.value)}
            className="form-control" 
          />
        </Col>
        <Col md={3}>
          <input type="time" id="wd-available-until-time" defaultValue="23:59" className="form-control" />
        </Col>
      </Row>

      <hr />

      <div className="d-flex justify-content-end">
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="secondary" className="me-2">Cancel</Button>
        </Link>
        <Button variant="danger" onClick={onSave}>Save</Button>
      </div>
    </div>
  );
}