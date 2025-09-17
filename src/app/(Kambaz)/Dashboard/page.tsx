import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
return (
<div id="wd-dashboard">
<h1 id="wd-dashboard-title">Dashboard</h1> <hr />
<h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
<div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="react" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="react" />
            <div>
              <h5> CS2345 Node.js </h5>
              <p className="wd-dashboard-course-title">
                Backend Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="react" />
            <div>
              <h5> CS3456 MongoDB </h5>
              <p className="wd-dashboard-course-title">
                Database Management
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="react" />
            <div>
              <h5> CS4567 Express.js </h5>
              <p className="wd-dashboard-course-title">
                Web Frameworks
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="react" />
            <div>
              <h5> CS5678 Angular </h5>
              <p className="wd-dashboard-course-title">
                Frontend Frameworks
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="react" />
            <div>
              <h5> CS6789 Vue.js </h5>
              <p className="wd-dashboard-course-title">
                Frontend Frameworks
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="react" />
            <div>
              <h5> CS7890 Next.js </h5>
              <p className="wd-dashboard-course-title">
                Full Stack Frameworks
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
</div>
);}
