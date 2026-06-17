import React from "react";
import SectionTitle from "../common/SectionTitle";

const TextInput: React.FC<{ label: string; type?: string }> = ({ label, type = "text" }) => (
  <label className="form-label">
    <span className="heading-sans">{label}</span>
    <input type={type} placeholder={label} className="form-input" />
  </label>
);

const SelectInput: React.FC<{ label: string; options: string[] }> = ({ label, options }) => (
  <label className="form-label">
    <span className="heading-sans">{label}</span>
    <select defaultValue="" required className="form-select">
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
  return (
    <section className="forms-section" id="forms">
      <SectionTitle eyebrow="Lead Generation" title="Begin Your Legacy Now" align="center" />
      <div className="forms-grid">
        <form id="brochure" className="contact-form">
          <h3 className="heading-serif">Download Brochure</h3>
          <TextInput label="Full Name" />
          <TextInput label="Mobile Number" type="tel" />
          <TextInput label="Email Address" type="email" />
          <button className="btn-primary">Download Brochure</button>
        </form>
        <form className="contact-form">
          <h3 className="heading-serif">Submit Enquiry</h3>
          <TextInput label="Full Name" />
          <TextInput label="Mobile Number" type="tel" />
          <TextInput label="Email" type="email" />
          <TextInput label="City" />
          <SelectInput
            label="Investment Budget"
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
            <textarea placeholder="Message" className="form-textarea" />
          </label>
          <button className="btn-primary">Submit Enquiry</button>
        </form>
        <form className="contact-form">
          <h3 className="heading-serif">Book Site Visit</h3>
          <TextInput label="Full Name" />
          <TextInput label="Mobile Number" type="tel" />
          <TextInput label="Email Address" type="email" />
          <TextInput label="Preferred Visit Date" type="date" />
          <TextInput label="Number Of Visitors" type="number" />
          <div className="checkboxes">
            <label><input type="checkbox" /> Standard Site Visit</label>
            <label><input type="checkbox" /> VIP Site Visit</label>
            <label><input type="checkbox" /> Helicopter Site Visit</label>
          </div>
          <button className="btn-primary">Book Site Visit</button>
        </form>
        <form className="contact-form">
          <h3 className="heading-serif">Priority Booking</h3>
          <TextInput label="Applicant Name" />
          <TextInput label="Mobile Number" type="tel" />
          <TextInput label="Email Address" type="email" />
          <TextInput label="Address" />
          <TextInput label="Preferred Plot Size" />
          <TextInput label="Booking Amount" />
          <button className="btn-primary">Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default FormsSection;
