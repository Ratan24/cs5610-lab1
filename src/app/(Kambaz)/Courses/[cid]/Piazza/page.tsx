export default function Piazza() {
  return (
    <div>
      <h2 className="text-danger">Piazza</h2>
      <hr />
      <div className="p-4">
        <h4>Course Discussion Forum</h4>
        <p>Welcome to the Piazza discussion forum for this course. Here you can:</p>
        <ul>
          <li>Ask questions about course material</li>
          <li>Participate in class discussions</li>
          <li>Get help from instructors and TAs</li>
          <li>Share resources and study materials</li>
        </ul>
        <div className="mt-4">
          <button className="btn btn-danger">Go to Piazza</button>
        </div>
      </div>
    </div>
  );
}
