"use client";

import { Card, Container } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";

export default function Calendar() {
  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white d-flex align-items-center">
          <IoCalendarOutline className="me-2 fs-4" />
          <h4 className="mb-0">Calendar</h4>
        </Card.Header>
        <Card.Body className="p-4">
          <div className="text-center py-5">
            <IoCalendarOutline className="text-muted mb-3" style={{ fontSize: "4rem" }} />
            <h5 className="text-muted">Calendar Coming Soon</h5>
            <p className="text-muted">
              The calendar feature is currently under development. 
              You&apos;ll be able to view your course schedules, assignment due dates, and important events here.
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
