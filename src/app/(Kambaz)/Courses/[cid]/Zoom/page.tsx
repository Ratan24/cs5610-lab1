export default function Zoom() {
    return (
      <div>
        <h2 className="text-danger">Zoom</h2>
        <hr />
        <div className="p-4">
          <h4>Virtual Classroom</h4>
          <p>Access your virtual classroom sessions and recordings:</p>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Live Sessions</h5>
                  <p className="card-text">Join live lectures and office hours</p>
                  <button className="btn btn-primary">Join Meeting</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Recordings</h5>
                  <p className="card-text">Watch recorded lectures</p>
                  <button className="btn btn-secondary">View Recordings</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h5>Meeting Information</h5>
            <p><strong>Meeting ID:</strong> 123 456 7890</p>
            <p><strong>Password:</strong> course123</p>
          </div>
        </div>
      </div>
    );
  }