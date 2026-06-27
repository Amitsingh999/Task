"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Personal.css";

const schema = yup.object({
  companyName: yup
    .string()
    .required("Company name is required"),

  companyEmail: yup
    .string()
    .email("Enter valid email")
    .required("Company email is required"),

  companyPhone: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Enter valid phone number")
    .required("Company phone is required"),

  website: yup
    .string()
    .url("Enter valid website URL")
    .notRequired(),

  industry: yup
    .string()
    .required("Select industry"),

  companyAddress: yup
    .string()
    .required("Company address is required"),
});

export default function Company({ data, setData, onBack, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: data,
  });

  const handleFormSubmit = (values) => {
    setData({
      ...data,
      ...values,
    });

    onSubmit(values);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4 p-lg-5">
              <p className="text-primary fw-semibold mb-2">
                Step 2 of 2
              </p>

              <h2 className="fw-bold mb-3">
                Company Information
              </h2>

              <p className="text-muted mb-4">
                Please enter your company details.
              </p>

              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Company Name <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("companyName")}
                    className={`form-control ${errors.companyName ? "is-invalid" : ""}`}
                    placeholder="Enter company name"
                  />
                  <div className="invalid-feedback">
                    {errors.companyName?.message}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Company Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("companyEmail")}
                    className={`form-control ${errors.companyEmail ? "is-invalid" : ""}`}
                    placeholder="Enter company email"
                  />
                  <div className="invalid-feedback">
                    {errors.companyEmail?.message}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Company Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("companyPhone")}
                    className={`form-control ${errors.companyPhone ? "is-invalid" : ""}`}
                    placeholder="9876543210"
                  />
                  <div className="invalid-feedback">
                    {errors.companyPhone?.message}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Website
                  </label>
                  <input
                    {...register("website")}
                    className={`form-control ${errors.website ? "is-invalid" : ""}`}
                    placeholder="https://example.com"
                  />
                  <div className="invalid-feedback">
                    {errors.website?.message}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Industry <span className="text-danger">*</span>
                  </label>
                  <select
                    {...register("industry")}
                    className={`form-select ${errors.industry ? "is-invalid" : ""}`}
                  >
                    <option value="">Select Industry</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="invalid-feedback">
                    {errors.industry?.message}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Company Address <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows="4"
                    {...register("companyAddress")}
                    className={`form-control ${errors.companyAddress ? "is-invalid" : ""}`}
                    placeholder="Enter company address"
                  />
                  <div className="invalid-feedback">
                    {errors.companyAddress?.message}
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4"
                    onClick={onBack}
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                  >
                    Submit
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