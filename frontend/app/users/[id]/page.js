"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function UserDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`${API_URL}/users/${id}`);
      const data = await res.json();
      setUser(data);
    }

    fetchUser();
  }, [id]);

  if (!user) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      <div className="card shadow border-0">

        {/* Header */}
        <div className="card-body text-center">

          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              width: 90,
              height: 90,
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {user.firstName?.charAt(0)}
            {user.lastName?.charAt(0)}
          </div>

          <h2>
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-muted">
            {user.companyName}
          </p>

        </div>

        <hr />

        <div className="card-body">

          <h4 className="mb-3">Personal Information</h4>

          <div className="row">

            <div className="col-md-6 mb-3">
              <strong>First Name</strong>
              <p>{user.firstName}</p>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Last Name</strong>
              <p>{user.lastName}</p>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Email</strong>
              <p>{user.email}</p>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Phone</strong>
              <p>{user.phone}</p>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Gender</strong>
              <p>{user.gender}</p>
            </div>

            <div className="col-12 mb-3">
              <strong>Address</strong>
              <p>{user.address}</p>
            </div>

          </div>

          <hr />

          <h4 className="mb-3">Company Information</h4>

          <div className="row">

            <div className="col-md-6 mb-3">
              <strong>Company Name</strong>
              <p>{user.companyName}</p>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Company Email</strong>
              <p>{user.companyEmail}</p>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Company Phone</strong>
              <p>{user.companyPhone}</p>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Website</strong>
              <p>{user.website}</p>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Industry</strong>
              <p>{user.industry}</p>
            </div>

            <div className="col-12 mb-3">
              <strong>Company Address</strong>
              <p>{user.companyAddress}</p>
            </div>

          </div>

          <div className="d-flex justify-content-end gap-2 mt-4">

            <button
              className="btn btn-secondary"
              onClick={() => router.push("/users")}
            >
              Back
            </button>

            <button
              className="btn btn-primary"
              onClick={() => router.push(`/users/${id}/edit`)}
            >
              Edit Profile
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}