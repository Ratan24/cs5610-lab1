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
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";

interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  dob?: string;
  email: string;
  role: "USER" | "ADMIN" | "FACULTY" | "STUDENT";
}

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: { accountReducer: { currentUser: User | null } }) =>
      state.accountReducer
  );

  const signout = () => {
    dispatch(setCurrentUser(null));
    router.push("/Account/Signin");
  };

  if (!currentUser) {
    router.push("/Account/Signin");
    return null;
  }

  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel>Username</FormLabel>
              <FormControl 
                id="wd-username" 
                value={currentUser.username}
                readOnly 
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormControl
                id="wd-password"
                type="password"
                value={currentUser.password}
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel>First Name</FormLabel>
              <FormControl 
                id="wd-first-name" 
                value={currentUser.firstName}
                readOnly
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Last Name</FormLabel>
              <FormControl 
                id="wd-last-name" 
                value={currentUser.lastName}
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl 
                id="wd-dob" 
                type="date" 
                value={currentUser.dob || "2000-01-01"}
                readOnly
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormControl
                id="wd-email"
                type="email"
                value={currentUser.email}
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="mb-3">
          <FormLabel>Role</FormLabel>
          <FormSelect 
            id="wd-role" 
            value={currentUser.role}
            disabled
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </FormSelect>
        </FormGroup>
        <div className="d-flex justify-content-end">
          <Button variant="danger" onClick={signout}>
            Sign out
          </Button>
        </div>
      </Form>
    </div>
  );
}