"use client";

import { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [moduleObj, setModuleObj] = useState({
    id: "m101",
    name: "Intro to NodeJS",
    description: "Basics of Node and Express",
    course: "CS5610",
  });

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* ---------------- ASSIGNMENT RETRIEVAL ---------------- */}
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={ASSIGNMENT_API_URL}
      >
        Get Assignment
      </a>
      <hr />

      {/* ---------------- ASSIGNMENT PROPERTIES ---------------- */}
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>
      <hr />

      {/* ---------------- MODIFY TITLE ---------------- */}
      <h4>Modifying Title</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />

      {/* ---------------- MODIFY SCORE ---------------- */}
      <h4>Modifying Score</h4>
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-score"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <hr />

      {/* ---------------- MODIFY COMPLETED ---------------- */}
      <h4>Modifying Completed</h4>
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <input
        id="wd-assignment-completed"
        type="checkbox"
        defaultChecked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <hr />

      {/* ---------------- MODULE SECTION ---------------- */}
      <h3>Module Object</h3>

      {/* GET MODULE */}
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={MODULE_API_URL}
      >
        Get Module
      </a>

      {/* GET MODULE NAME */}
      <a
        id="wd-retrieve-module-name"
        className="btn btn-secondary ms-2"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />

      {/* EDIT MODULE NAME */}
      <h4>Editing Module Name</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${moduleObj.name}`}
      >
        Update Module Name
      </a>
      <FormControl
        className="w-75"
        id="wd-module-name"
        defaultValue={moduleObj.name}
        onChange={(e) =>
          setModuleObj({ ...moduleObj, name: e.target.value })
        }
      />
      <hr />

      {/* EDIT MODULE DESCRIPTION */}
      <h4>Editing Module Description</h4>
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${moduleObj.description}`}
      >
        Update Description
      </a>
      <FormControl
        className="w-75"
        id="wd-module-description"
        defaultValue={moduleObj.description}
        onChange={(e) =>
          setModuleObj({ ...moduleObj, description: e.target.value })
        }
      />

      <hr />
    </div>
  );
}
