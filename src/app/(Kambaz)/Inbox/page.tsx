"use client";

import { Card, Container } from "react-bootstrap";
import { FaInbox } from "react-icons/fa6";

export default function Inbox() {
  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white d-flex align-items-center">
          <FaInbox className="me-2 fs-4" />
          <h4 className="mb-0">Inbox</h4>
        </Card.Header>
        <Card.Body className="p-4">
          <div className="text-center py-5">
            <FaInbox className="text-muted mb-3" style={{ fontSize: "4rem" }} />
            <h5 className="text-muted">Inbox Coming Soon</h5>
            <p className="text-muted">
              The inbox feature is currently under development. 
              You will be able to receive notifications, messages, and updates from your courses here.
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
