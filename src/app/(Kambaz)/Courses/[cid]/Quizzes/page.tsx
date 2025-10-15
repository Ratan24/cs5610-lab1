export default function Quizzes() {
  return (
    <div>
      <h2 className="text-danger">Quizzes</h2>
      <hr />
      <div className="p-4">
        <h4>Course Quizzes</h4>
        <p>Access and take course quizzes:</p>
        <div className="list-group">
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>Quiz 1: Introduction</h5>
              <p className="mb-0">Basic concepts and fundamentals</p>
            </div>
            <span className="badge bg-success">Available</span>
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>Quiz 2: Advanced Topics</h5>
              <p className="mb-0">Advanced concepts and applications</p>
            </div>
            <span className="badge bg-secondary">Not Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
