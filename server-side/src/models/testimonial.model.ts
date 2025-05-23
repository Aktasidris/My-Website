// models/testimonial.model.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  role?: string;
  comment: string;
  userIp: string;
  createddate: string;
  user: string;
}

const TestimonialSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String },
  comment: { type: String, required: true },
  userIp: { type: String, required: true },
  createddate: { type: String, required: true },
  user: { type: String, required: true }
});

const Testimonial = mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);

export default Testimonial;
