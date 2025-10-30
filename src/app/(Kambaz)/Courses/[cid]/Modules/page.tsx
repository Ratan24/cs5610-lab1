"use client";

import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addModule, deleteModule, updateModule, editModule } from "./reducer";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

interface User {
  _id: string;
  role: string;
}

export default function Modules() {
  const { cid } = useParams() as { cid: string };
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector(
    (state: {
      modulesReducer: {
        modules: Array<{
          _id: string;
          name: string;
          course: string;
          editing?: boolean;
          lessons?: Array<{ _id: string; name: string }>;
        }>;
      };
    }) => state.modulesReducer
  );
  const dispatch = useDispatch();

  const { currentUser } = useSelector(
    (state: { accountReducer: { currentUser: User | null } }) =>
      state.accountReducer
  );

  // Check if user is FACULTY
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div>
      {/* Only show controls for FACULTY */}
      {isFaculty && (
        <>
          <ModulesControls
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={() => {
              dispatch(addModule({ name: moduleName, course: cid }));
              setModuleName("");
            }}
          />
          <br /><br /><br /><br />
        </>
      )}
      
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module: { course: string }) => module.course === cid)
          .map((module: {
            _id: string;
            name: string;
            course: string;
            editing?: boolean;
            lessons?: Array<{ _id: string; name: string }>;
          }) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && isFaculty && (
                  <FormControl
                    className="w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({
                          ...module,
                          name: e.target.value,
                          lessons: module.lessons ?? [],
                        })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(
                          updateModule({
                            ...module,
                            editing: false,
                            lessons: module.lessons ?? [],
                          })
                        );
                      }
                    }}
                    value={module.name}
                  />
                )}
                {/* Only show control buttons for FACULTY */}
                {isFaculty && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                )}
              </div>
              
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: { _id: string; name: string }) => (
                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}