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
import { useState, useEffect } from "react";
import { setCurrentUser } from "../reducer";
import * as client from "../client";
import { RootState } from "../../store";

interface User {
  _id?: string;
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
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    if (currentUser) {
      setProfile(currentUser);
    }
  }, [currentUser]);

  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/Account/Signin");
  };

  if (!currentUser) {
    router.push("/Account/Signin");
    return null;
  }

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <FormGroup>
                <FormLabel>Username</FormLabel>
                <FormControl 
                  id="wd-username" 
                  value={profile.username || ""}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl
                  id="wd-password"
                  type="password"
                  value={profile.password || ""}
                  onChange={(e) => setProfile({ ...profile, password: e.target.value })}
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
                  value={profile.firstName || ""}
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <FormControl 
                  id="wd-last-name" 
                  value={profile.lastName || ""}
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
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
                  value={profile.dob || ""}
                  onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl
                  id="wd-email"
                  type="email"
                  value={profile.email || ""}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="mb-3">
            <FormLabel>Role</FormLabel>
            <FormSelect 
              id="wd-role" 
              value={profile.role || ""}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </FormSelect>
          </FormGroup>
          <div>
            <Button onClick={updateProfile} className="btn btn-primary w-100 mb-2">
              Update
            </Button>
            <Button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
              Sign out
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
}