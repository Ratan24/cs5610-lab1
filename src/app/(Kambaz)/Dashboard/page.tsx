"use client";

import Link from "next/link";
import { Card, Row, Col, Button, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEnrollments, enrollInCourse, unenrollFromCourse } from "./enrollmentsReducer";
import { setCourses, addNewCourse, deleteCourse, updateCourse, Course } from "../Courses/reducer";
import * as client from "../Courses/client";
import { RootState } from "../store";

interface User {
  _id: string;
  role: string;
}

interface Enrollment {
  user: string;
  course: string;
}

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const [showAllCourses, setShowAllCourses] = useState(true);

  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

  const dispatch = useDispatch();

  const isFaculty = currentUser?.role === "FACULTY";

  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const enrollments = await client.findEnrollmentsForCurrentUser();
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    if (currentUser) {
      fetchEnrollments();
    }
  }, [currentUser]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
      if (c._id === course._id) {
        return course;
      } else {
        return c;
      }
    })));
  };

  // Check if user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const onEnroll = async (courseId: string) => {
    if (!currentUser) return;
    try {
      const enrollment = await client.enrollInCourse(courseId);
      dispatch(setEnrollments([...enrollments, enrollment]));
    } catch (error) {
      console.error(error);
    }
  };

  const onUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    try {
      await client.unenrollFromCourse(courseId);
      dispatch(setEnrollments(
        enrollments.filter(
          (enrollment) =>
            !(enrollment.user === currentUser._id && enrollment.course === courseId)
        )
      ));
    } catch (error) {
      console.error(error);
    }
  };

  // Filter courses based on showAllCourses toggle
  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((c) => isEnrolled(c._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Only FACULTY sees course creation */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <Button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </Button>
            <Button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={onUpdateCourse}
            >
              Update
            </Button>
          </h5>
          <br />

          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            className="mb-2"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            placeholder="Course Description"
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
        {/* Only STUDENT sees Enrollments toggle */}
        {!isFaculty && currentUser && (
          <Button
            variant="primary"
            className="float-end"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Enrollments" : "All Courses"}
          </Button>
        )}
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {filteredCourses.map((c: Course) => (
            <Col
              key={c._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src="/images/reactjs.jpg"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>

                    {/* FACULTY: Edit/Delete buttons */}
                    {isFaculty && (
                      <>
                        <Button
                          variant="warning"
                          className="float-end me-2"
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(c);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="float-end"
                          id="wd-delete-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            onDeleteCourse(c._id);
                          }}
                        >
                          Delete
                        </Button>
                      </>
                    )}

                    {/* STUDENT: Enroll/Unenroll buttons */}
                    {!isFaculty && currentUser && (
                      <>
                        {isEnrolled(c._id) ? (
                          <Button
                            variant="danger"
                            className="float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              onUnenroll(c._id);
                            }}
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            className="float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              onEnroll(c._id);
                            }}
                          >
                            Enroll
                          </Button>
                        )}
                      </>
                    )}
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