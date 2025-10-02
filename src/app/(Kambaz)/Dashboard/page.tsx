"use client";
import { Card, Col, Row, Button, CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/reactjs.jpg" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/2345/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/nodejs.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 Node.js</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Backend Development
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/3456/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/mongodb.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 MongoDB</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Database Management
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/4567/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/expressjs.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 Express.js</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Web Frameworks
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/angular.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Angular</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Frontend Frameworks
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/6789/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/vuejs.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6789 Vue.js</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Frontend Frameworks
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/7890/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/nextjs.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7890 Next.js</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Full Stack Frameworks
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/reactjs.jpg" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/2345/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/nodejs.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 Node.js</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Backend Development
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/3456/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/mongodb.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 MongoDB</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Database Management
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/4567/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/expressjs.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 Express.js</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Web Frameworks
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" style={{ height: "400px" }}>
              <Link href="/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/angular.png" height="160px" />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Angular</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden flex-grow-1" style={{ height: "100px" }}>
                    Frontend Frameworks
                  </CardText>
                  <Button variant="primary" className="mt-auto">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}