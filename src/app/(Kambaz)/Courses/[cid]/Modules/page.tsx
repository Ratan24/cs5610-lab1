'use client';

import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import * as db from "../../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ModulesControls />
      <br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem key={module._id} className="wd-module p-0 mb-3 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" /> 
                  {module.name}
                </div>
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <div className="wd-lessons position-relative">
                  <div className="wd-green-line position-absolute" style={{
                    left: '20px',
                    top: '0',
                    bottom: '0',
                    width: '3px',
                    backgroundColor: '#28a745'
                  }}></div>
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-5 d-flex align-items-center justify-content-between border-0">
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" /> 
                        {lesson.name}
                      </div>
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </div>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}