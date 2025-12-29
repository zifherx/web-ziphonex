import { Model, Types } from "mongoose";
import { TestimonialEntity } from "../types/testimonial.types";

export interface ITestimonialDocument extends Omit<TestimonialEntity, "_id">, Document {
  _id: Types.ObjectId;
}

export interface ITestimonialModel extends Model<ITestimonialDocument, {}, ITestimonialMethods> {
  getActive(): Promise<ITestimonialDocument[]>;
  getPublished(): Promise<ITestimonialDocument[]>;
  getByRating(minRating: number): Promise<ITestimonialDocument[]>;
}

export interface ITestimonialMethods {
  publish(): Promise<ITestimonialDocument>;
  archive(): Promise<ITestimonialDocument>;
  toggleActive(): Promise<ITestimonialDocument>;
}
