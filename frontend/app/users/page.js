"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch(`${API_URL}/users`);
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (loading) return <p className="text-center mt-5">Loading...</p>;

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Employees</h2>

                <Link href="/form" className="btn btn-primary">
                    + Add Employee
                </Link>
            </div>

            {users.length === 0 ? (
                <div className="text-center text-muted mt-5">
                    No Employees Found
                </div>
            ) : (
                <div className="row g-4 justify-content-center">
                    {users.map((user) => (
                        <div className="col-md-6 col-lg-4" key={user.id}>
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body">

                                    <div className="text-center mb-3">
                                        <div
                                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto"
                                            style={{
                                                width: 70,
                                                height: 70,
                                                fontSize: 24,
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {user.firstName?.charAt(0)}
                                            {user.lastName?.charAt(0)}
                                        </div>

                                        <h5 className="mt-3 mb-1">
                                            {user.firstName} {user.lastName}
                                        </h5>

                                        <small className="text-muted">
                                            {user.companyName}
                                        </small>
                                    </div>

                                    <hr />

                                    <p className="mb-2">
                                        <strong>Email:</strong>
                                        <br />
                                        {user.email}
                                    </p>

                                    <p className="mb-2">
                                        <strong>Phone:</strong>
                                        <br />
                                        {user.phone}
                                    </p>

                                    <p className="mb-3">
                                        <strong>Industry:</strong>
                                        <br />
                                        {user.industry}
                                    </p>

                                    <div className="d-grid gap-2">
                                        <Link
                                            href={`/users/${user.id}`}
                                            className="btn btn-outline-secondary"
                                        >
                                            View Profile
                                        </Link>

                                        <Link
                                            href={`/users/${user.id}/edit`}
                                            className="btn btn-primary"
                                        >
                                            Edit Profile
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}