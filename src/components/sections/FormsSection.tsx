"use client";

import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";

type FormKey = "brochure" | "enquiry" | "siteVisit" | "priorityBooking";

interface FormStatus {
  type: "success" | "error";
  message: string;
}

const formEndpoints: Record<FormKey, string> = {
  brochure: "/api/leads/brochure",
  enquiry: "/api/leads/enquiry",
  siteVisit: "/api/leads/site-visit",
  priorityBooking: "/api/leads/priority-booking"
};

const TextInput: React.FC<{ label: string; name: string; type?: string; required?: boolean }> = ({
  label,
  name,
  type = "text",
  required = false
}) => (
  <label className="form-label">
    <span className="heading-sans">{label}</span>
    <input name={name} type={type} placeholder={label} className="form-input" required={required} />
  </label>
);

const SelectInput: React.FC<{ label: string; name: string; options: string[] }> = ({ label, name, options }) => (
  <label className="form-label">
    <span className="heading-sans">{label}</span>
    <select name={name} defaultValue="" required className="form-select">
      <option value="" disabled>
        Select {label}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

const FormsSection: React.FC = () => {
  const [loadingForm, setLoadingForm] = useState<FormKey | null>(null);
  const [statuses, setStatuses] = useState<Partial<Record<FormKey, FormStatus>>>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formKey: FormKey) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const visitTypes = formData.getAll("visitType").map(String);

    if (visitTypes.length) {
      payload.visitType = visitTypes.join(", ");
    }

    setLoadingForm(formKey);
    setStatuses((current) => ({ ...current, [formKey]: undefined }));

    try {
      const response = await fetch(formEndpoints[formKey], {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      form.reset();
      setStatuses((current) => ({
        ...current,
        [formKey]: {
          type: "success",
          message: result.message || "Submitted successfully."
        }
      }));
    } catch (error) {
      setStatuses((current) => ({
        ...current,
        [formKey]: {
          type: "error",
          message: error instanceof Error ? error.message : "Something went wrong. Please try again."
        }
      }));
    } finally {
      setLoadingForm(null);
    }
  };

  const renderStatus = (formKey: FormKey) => {
    const status = statuses[formKey];

    if (!status) {
      return null;
    }

    return <p className={`form-status ${status.type}`}>{status.message}</p>;
  };

  return (
    <section className="forms-section" id="forms">
      <SectionTitle eyebrow="Lead Generation" title="Begin Your Legacy Now" align="center" />
      <div className="forms-grid">
        <form id="brochure" className="contact-form" onSubmit={(event) => handleSubmit(event, "brochure")}>
          <h3 className="heading-serif">Download Brochure</h3>
          <TextInput label="Full Name" name="name" required />
          <TextInput label="Mobile Number" name="mobile" type="tel" required />
          <TextInput label="Email Address" name="email" type="email" />
          {renderStatus("brochure")}
          <button className="btn-primary" disabled={loadingForm === "brochure"}>
            {loadingForm === "brochure" ? "Submitting..." : "Download Brochure"}
          </button>
        </form>
        <form className="contact-form" onSubmit={(event) => handleSubmit(event, "enquiry")}>
          <h3 className="heading-serif">Submit Enquiry</h3>
          <TextInput label="Full Name" name="name" required />
          <TextInput label="Mobile Number" name="mobile" type="tel" required />
          <TextInput label="Email" name="email" type="email" />
          <TextInput label="City" name="city" />
          <SelectInput
            label="Investment Budget"
            name="budget"
            options={[
              "₹3 Lakhs - ₹4 Lakhs",
              "₹4 Lakhs - ₹5 Lakhs",
              "₹5 Lakhs - ₹7 Lakhs",
              "₹7 Lakhs - ₹10 Lakhs",
              "Above ₹10 Lakhs"
            ]}
          />
          <label className="form-label">
            <span className="heading-sans">Message</span>
            <textarea name="message" placeholder="Message" className="form-textarea" />
          </label>
          {renderStatus("enquiry")}
          <button className="btn-primary" disabled={loadingForm === "enquiry"}>
            {loadingForm === "enquiry" ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
        <form className="contact-form" onSubmit={(event) => handleSubmit(event, "siteVisit")}>
          <h3 className="heading-serif">Book Site Visit</h3>
          <TextInput label="Full Name" name="name" required />
          <TextInput label="Mobile Number" name="mobile" type="tel" required />
          <TextInput label="Email Address" name="email" type="email" />
          <TextInput label="Preferred Visit Date" name="preferredDate" type="date" />
          <TextInput label="Number Of Visitors" name="visitors" type="number" />
          <div className="checkboxes">
            <label><input name="visitType" type="checkbox" value="Standard" /> Standard Site Visit</label>
            <label><input name="visitType" type="checkbox" value="VIP" /> VIP Site Visit</label>
            <label><input name="visitType" type="checkbox" value="Helicopter" /> Helicopter Site Visit</label>
          </div>
          {renderStatus("siteVisit")}
          <button className="btn-primary" disabled={loadingForm === "siteVisit"}>
            {loadingForm === "siteVisit" ? "Submitting..." : "Book Site Visit"}
          </button>
        </form>
        <form className="contact-form" onSubmit={(event) => handleSubmit(event, "priorityBooking")}>
          <h3 className="heading-serif">Priority Booking</h3>
          <TextInput label="Applicant Name" name="name" required />
          <TextInput label="Mobile Number" name="mobile" type="tel" required />
          <TextInput label="Email Address" name="email" type="email" />
          <TextInput label="Address" name="city" />
          <TextInput label="Preferred Plot Size" name="plotSize" />
          <TextInput label="Booking Amount" name="bookingAmount" />
          {renderStatus("priorityBooking")}
          <button className="btn-primary" disabled={loadingForm === "priorityBooking"}>
            {loadingForm === "priorityBooking" ? "Submitting..." : "Book Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormsSection;
