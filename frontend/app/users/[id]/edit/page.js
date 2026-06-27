"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function EditPage() {
    const { id } = useParams();
    const router = useRouter();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/users/${id}`)
            .then((res) => res.json())
            .then(setFormData);
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`${API_URL}/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            toast.success("Updated!");
            router.push("/users");
        } else {
            toast.error("Update failed");
        }
    };

    if (!formData) return <p className="text-center mt-5">Loading...</p>;


    return (
        <div className="container py-5" style={{ maxWidth: "900px" }}>
            <div className="card shadow border-0">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">Edit Employee Profile</h3>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>

                        <h5 className="mb-3">Personal Information</h5>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Gender</label>

                                <select
                                    name="gender"
                                    value={formData.gender || ""}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="">Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label className="form-label">Address</label>

                                <textarea
                                    rows="3"
                                    name="address"
                                    value={formData.address || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                        </div>

                        <hr className="my-4" />

                        <h5 className="mb-3">Company Information</h5>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Company Email</label>
                                <input
                                    type="email"
                                    name="companyEmail"
                                    value={formData.companyEmail || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Company Phone</label>
                                <input
                                    type="text"
                                    name="companyPhone"
                                    value={formData.companyPhone || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Website</label>
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Industry</label>
                                <input
                                    type="text"
                                    name="industry"
                                    value={formData.industry || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Company Address</label>

                                <textarea
                                    rows="3"
                                    name="companyAddress"
                                    value={formData.companyAddress || ""}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                        </div>

                        <div className="d-flex justify-content-end gap-2 mt-4">

                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => router.push("/users")}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Update Profile
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );

}