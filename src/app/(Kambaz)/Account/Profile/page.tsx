"use client";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel>Username</FormLabel>
              <FormControl id="wd-username" defaultValue="alice" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormControl
                id="wd-password"
                type="password"
                defaultValue="123"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel>First Name</FormLabel>
              <FormControl id="wd-first-name" defaultValue="Alice" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Last Name</FormLabel>
              <FormControl id="wd-last-name" defaultValue="Wonderland" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl id="wd-dob" type="date" defaultValue="2000-01-01" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormControl
                id="wd-email"
                type="email"
                defaultValue="alice@wonderland.com"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="mb-3">
          <FormLabel>Role</FormLabel>
          <FormSelect id="wd-role" defaultValue="FACULTY">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </FormSelect>
        </FormGroup>
        <div className="d-flex justify-content-end">
          <Link href="/Account/Signin">
            <Button variant="danger">Sign out</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}