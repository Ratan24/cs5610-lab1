import Link from "next/link";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input placeholder="Search for Assignments" id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <Link
              href="/Courses/1234/Assignments/123"
              className="wd-assignment-link"
            >
              A1 - ENV + HTML
            </Link>
            <br />
            Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am
            <br />
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </li>
          <li className="wd-assignment-list-item">
            <Link
              href="/Courses/1234/Assignments/124"
              className="wd-assignment-link"
            >
              A2 - CSS + BOOTSTRAP
            </Link>
            <br />
            Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am
            <br />
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </li>
          <li className="wd-assignment-list-item">
            <Link
              href="/Courses/1234/Assignments/125"
              className="wd-assignment-link"
            >
              A3 - JAVASCRIPT + REACT
            </Link>
            <br />
            Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am
            <br />
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </li>
        </ul>
        <h3 id="wd-quizzes-title">
          QUIZZES 10% of Total <button>+</button>
        </h3>
        <ul id="wd-quizzes-list">
        </ul>
        <h3 id="wd-exams-title">
          EXAMS 20% of Total <button>+</button>
        </h3>
        <ul id="wd-exams-list">
        </ul>
        <h3 id="wd-project-title">
          PROJECT 30% of Total <button>+</button>
        </h3>
        <ul id="wd-project-list">
        </ul>
      </div>
    );
  }