"use client";

import Link from "next/link";
import { Card, Row, Col, Button } from "react-bootstrap";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id}>
              <Card className="h-100" style={{ height: "400px" }}>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column"
                >
                  <Card.Img variant="top" src="/images/reactjs.jpg" height="160px" />
                  <Card.Body className="d-flex flex-column flex-grow-1">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden flex-grow-1"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary" className="mt-auto">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}