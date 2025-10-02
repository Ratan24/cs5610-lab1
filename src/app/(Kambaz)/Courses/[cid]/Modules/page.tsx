'use client';

import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-3 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" /> 
              Week 1
            </div>
            <ModuleControlButtons />
          </div>
          <div className="wd-lessons position-relative">
            <div className="wd-green-line position-absolute" style={{
              left: '20px',
              top: '0',
              bottom: '0',
              width: '3px',
              backgroundColor: '#28a745'
            }}></div>
            <ListGroupItem className="wd-lesson p-3 ps-5 d-flex align-items-center justify-content-between border-0">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> 
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5 d-flex align-items-center justify-content-between border-0">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> 
                Introduction to the course
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5 d-flex align-items-center justify-content-between border-0">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> 
                Learn what is Web Development
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </div>
        </ListGroupItem>
        
        <ListGroupItem className="wd-module p-0 mb-3 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" /> 
              Week 2
            </div>
            <ModuleControlButtons />
          </div>
          <div className="wd-lessons position-relative">
            <div className="wd-green-line position-absolute" style={{
              left: '20px',
              top: '0',
              bottom: '0',
              width: '3px',
              backgroundColor: '#28a745'
            }}></div>
            <ListGroupItem className="wd-lesson p-3 ps-5 d-flex align-items-center justify-content-between border-0">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> 
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5 d-flex align-items-center justify-content-between border-0">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> 
                LESSON 1
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5 d-flex align-items-center justify-content-between border-0">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> 
                LESSON 2
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}