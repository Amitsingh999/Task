// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/form");
// }

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Employee Management Dashboard
      </h1>

      <div className="row g-4">

        <div className="col-md-6">
          <div className="card shadow p-4 text-center h-100">
            <h4>Create Employee</h4>
            <p className="text-muted">
              Add a new employee record.
            </p>

            <Link
              href="/form"
              className="btn btn-primary mt-3"
            >
              Open Form
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow p-4 text-center h-100">
            <h4>Employee List</h4>
            <p className="text-muted">
              View all employee records.
            </p>

            <Link
              href="/users"
              className="btn btn-success mt-3"
            >
              View Employees
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}