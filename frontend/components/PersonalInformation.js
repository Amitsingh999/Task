"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Personal.css";

const schema = yup.object({

    firstName: yup
        .string()
        .required("First name is required"),

    lastName: yup
        .string()
        .required("Last name is required"),

    email: yup
        .string()
        .email("Enter valid email")
        .required("Email is required"),

    phone: yup
        .string()
        .matches(/^[6-9]\d{9}$/, "Enter valid phone number")
        .required("Phone number is required"),

    gender: yup
        .string()
        .required("Select gender"),

    address: yup
        .string()
        .required("Address is required")

});

export default function Personal({ data, setData, onNext }) {

    const {

        register,

        handleSubmit,

        formState: {

            errors

        }

    } = useForm({

        resolver: yupResolver(schema),

        defaultValues: data

    });

    const onSubmit = (values) => {

        setData({

            ...data,

            ...values

        });

        onNext();

    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center min-vh-100">

                <div className="col-12 col-md-10 col-lg-8 col-xl-7">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body p-4 p-lg-5">

                            <p className="text-primary fw-semibold mb-2">
                                Step 1 of 2
                            </p>

                            <h2 className="fw-bold mb-3">
                                Personal Information
                            </h2>

                            <p className="text-muted mb-4">
                                Please enter your personal details.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        First Name <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        {...register("firstName")}
                                        className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                                        placeholder="Enter first name"
                                    />

                                    <div className="invalid-feedback">
                                        {errors.firstName?.message}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Last Name <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        {...register("lastName")}
                                        className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                                        placeholder="Enter last name"
                                    />

                                    <div className="invalid-feedback">
                                        {errors.lastName?.message}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Email <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="email"
                                        {...register("email")}
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        placeholder="Enter email"
                                    />

                                    <div className="invalid-feedback">
                                        {errors.email?.message}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Phone Number <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        {...register("phone")}
                                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                        placeholder="9876543210"
                                    />

                                    <div className="invalid-feedback">
                                        {errors.phone?.message}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Gender <span className="text-danger">*</span>
                                    </label>

                                    <select
                                        {...register("gender")}
                                        className={`form-select ${errors.gender ? "is-invalid" : ""}`}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    <div className="invalid-feedback">
                                        {errors.gender?.message}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Address <span className="text-danger">*</span>
                                    </label>

                                    <textarea
                                        rows="4"
                                        {...register("address")}
                                        className={`form-control ${errors.address ? "is-invalid" : ""}`}
                                        placeholder="Enter address"
                                    />

                                    <div className="invalid-feedback">
                                        {errors.address?.message}
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end">
                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        Next →
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>

    );

}