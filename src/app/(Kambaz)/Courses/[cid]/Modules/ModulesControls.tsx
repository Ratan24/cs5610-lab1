"use client";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  return (
    <div id="wd-modules-controls">
      {/* Input field for new module name */}
      <FormControl
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        placeholder="New Module Name"
        className="mb-2 w-50 d-inline-block me-2"
        id="wd-module-name-input"
      />
      
      {/* Control buttons row */}
      <div className="d-flex justify-content-end gap-2 mb-3">
        <Button variant="secondary" size="lg" id="wd-collapse-all">
          Collapse All
        </Button>
        <Button variant="secondary" size="lg" id="wd-view-progress">
          View Progress
        </Button>
        <Dropdown>
          <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
            <GreenCheckmark /> Publish All
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="wd-publish-all">
              <GreenCheckmark /> Publish All
            </DropdownItem>
            <DropdownItem id="wd-publish-all-modules-and-items">
              <GreenCheckmark /> Publish all modules and items
            </DropdownItem>
            <DropdownItem id="wd-publish-modules-only">
              <GreenCheckmark /> Publish modules only
            </DropdownItem>
            <DropdownItem id="wd-unpublish-all-modules-and-items">
              Unpublish all modules and items
            </DropdownItem>
            <DropdownItem id="wd-unpublish-modules-only">
              Unpublish modules only
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button variant="danger" size="lg" id="wd-add-module-btn" onClick={addModule}>
          <FaPlus className="me-2" />
          Module
        </Button>
      </div>
    </div>
  );
}