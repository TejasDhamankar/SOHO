import { Schema, model, models, type InferSchemaType } from "mongoose";

const formTypes = ["brochure", "enquiry", "site-visit", "priority-booking"] as const;
const stages = ["contacted", "pipeline", "closed"] as const;

const LeadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    city: { type: String, trim: true },
    budget: { type: String, trim: true },
    message: { type: String, trim: true },
    preferredDate: { type: String, trim: true },
    visitors: { type: Number },
    visitType: { type: String, trim: true },
    bookingAmount: { type: String, trim: true },
    plotSize: { type: String, trim: true },
    formType: {
      type: String,
      enum: formTypes,
      required: true
    },
    stage: {
      type: String,
      enum: stages,
      default: "contacted"
    }
  },
  {
    timestamps: true
  }
);

export type LeadDocument = InferSchemaType<typeof LeadSchema>;

const Lead = models.Lead || model("Lead", LeadSchema);

export default Lead;
