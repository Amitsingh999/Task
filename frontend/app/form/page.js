"use client";

import { useState } from "react";
import Personal from "@/components/PersonalInformation";
import Company from "@/components/CompanyInformation";
import { toast } from "react-toastify";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "",
  address: "",
  companyName: "",
  companyEmail: "",
  companyPhone: "",
  website: "",
  industry: "",
  companyAddress: "",
};

export default function FormPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleFinalSubmit = async (values) => {
    const finalData = {
      ...formData,
      ...values,
    };

    try {
      const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.detail || "Failed to save data");
        return;
      }

      toast.success("Form submitted successfully!");
      setFormData(initialFormData);
      setStep(1);
    } catch (error) {
      toast.error("Backend connect nahi ho raha. FastAPI chal raha hai?");
    }
  };

  return (
    <div>
      {step === 1 && (
        <Personal
          data={formData}
          setData={setFormData}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <Company
          data={formData}
          setData={setFormData}
          onBack={() => setStep(1)}
          onSubmit={handleFinalSubmit}
        />
      )}
    </div>
  );
}