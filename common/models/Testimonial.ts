import { model, models, Schema } from "mongoose";
import { ITestimonialDocument, ITestimonialMethods, ITestimonialModel } from "../interfaces/testimonial.interface";

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "nombre es requerido"],
      trim: true,
      maxLength: [100, "nombre no puede exceder 100 caracteres"],
    },
    position: {
      type: String,
      required: [true, "cargo es requerida"],
      trim: true,
      maxLength: [100, "cargo no puede exceder 100 caracteres"],
    },
    avatar: { type: String, required: [true, "avatar es requerido"], trim: true },
    company: {
      type: String,
      required: [true, "compañía es requerida"],
      trim: true,
      maxLength: [100, "compañia no puede exceder 100 caracteres"],
    },
  },
  { _id: false }
);

const TestimonialSchema = new Schema<ITestimonialDocument, ITestimonialModel, ITestimonialMethods>(
  {
    resena: {
      type: String,
      required: [true, "reseña es requerida"],
      trim: true,
      minLength: [10, "reseña debe tener al menos 10 caracteres"],
      maxLength: [1000, "resena no puede exceder 1000 caracteres"],
    },
    rating: {
      type: Number,
      required: [true, "califiación es requerida"],
      min: [1, "calificación mínima es 1"],
      max: [5, "calificación máxima es 5"],
      index: true,
    },
    author: {
      type: AuthorSchema,
      required: [true, "datos del autor son requeridos"],
    },
    isActive: { type: Boolean, default: true, index: true },
    status: {
      type: String,
      enum: ["published", "draft", "archived"],
      default: "draft",
      index: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "testimonials",
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

TestimonialSchema.index({ isActive: 1, status: 1, rating: -1 });
TestimonialSchema.index({ "author.name": 1 });

TestimonialSchema.methods.publish = async function () {
  this.status = "published";
  this.isActive = true;
  return await this.save();
};

TestimonialSchema.methods.archive = async function () {
  this.status = "archived";
  this.isActive = false;
  return await this.save();
};

TestimonialSchema.methods.toggleActive = async function () {
  this.isActive = !this.isActive;
  return await this.save();
};

TestimonialSchema.statics.getActive = async function () {
  return this.find({ isActive: true, status: "published" })
    .sort({ rating: -1, createdAt: -1 })
    .lean<ITestimonialDocument[]>()
    .exec();
};

TestimonialSchema.statics.getPublished = async function () {
  return this.find({ status: "published" }).sort({ rating: -1, createdAt: -1 }).lean<ITestimonialDocument[]>().exec();
};

TestimonialSchema.statics.getByRating = async function (minRating: number) {
  return this.find({ rating: { $gte: minRating }, status: "published" })
    .sort({ rating: -1, createdAt: -1 })
    .lean<ITestimonialDocument[]>()
    .exec();
};

TestimonialSchema.virtual("isVisible").get(function () {
  return this.status === "published" && this.isActive;
});

export const TestimonialModel: ITestimonialModel =
  (models.Testimonial as ITestimonialModel) ||
  model<ITestimonialDocument, ITestimonialModel>("Testimonial", TestimonialSchema);
