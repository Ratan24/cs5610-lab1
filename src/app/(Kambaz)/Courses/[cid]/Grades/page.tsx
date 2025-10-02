export default function Grades() {
  return (
    <div>
      <h2 className="text-danger">Grades</h2>
      <hr />
      <div className="p-4">
        <h4>Course Grades</h4>
        <p>View your current grades and progress:</p>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Points</th>
                <th>Score</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quiz 1</td>
                <td>100</td>
                <td>85</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Assignment 1</td>
                <td>100</td>
                <td>92</td>
                <td>A-</td>
              </tr>
              <tr>
                <td>Midterm</td>
                <td>100</td>
                <td>78</td>
                <td>C+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
