"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Alert, Button } from "react-bootstrap";

interface User {
  _id: string;
  role: string;
}

interface Enrollment {
  user: string;
  course: string;
}

export default function ProtectedRoute({
  children,
  cid,
}: {
  children: ReactNode;
  cid: string;
}) {
  const router = useRouter();
  const [showAccessDenied, setShowAccessDenied] = useState(false);

  const { currentUser } = useSelector(
    (state: { accountReducer: { currentUser: User | null } }) =>
      state.accountReducer
  );

  const { enrollments } = useSelector(
    (state: { enrollmentsReducer: { enrollments: Enrollment[] } }) =>
      state.enrollmentsReducer
  );

  useEffect(() => {
    // If no user logged in, allow access (for now, Ch5 will add full auth)
    if (!currentUser) {
      setShowAccessDenied(false);
      return;
    }

    // Faculty can access any course
    const isFaculty = currentUser.role === "FACULTY";
    if (isFaculty) {
      setShowAccessDenied(false);
      return;
    }

    // Check if student is enrolled
    const isEnrolled = enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === cid
    );

    if (!isEnrolled) {
      setShowAccessDenied(true);
    } else {
      setShowAccessDenied(false);
    }
  }, [currentUser, enrollments, cid]);

  if (showAccessDenied) {
    return (
      <div className="container mt-5">
        <Alert variant="danger">
          <Alert.Heading>Access Denied</Alert.Heading>
          <p>You must be enrolled in this course to access it.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => router.push("/Dashboard")}
              variant="outline-danger"
            >
              Go to Dashboard
            </Button>
          </div>
        </Alert>
      </div>
    );
  }

  return <>{children}</>;
}