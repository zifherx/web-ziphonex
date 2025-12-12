import { model, models, Schema } from "mongoose";
import {
  ISocialMediaDocument,
  ISocialMediaMethods,
  ISocialMediaModel,
} from "../interfaces/social-media.interface";

const SocialMediaSchema = new Schema<
  ISocialMediaDocument,
  ISocialMediaModel,
  ISocialMediaMethods
>(
  {
    label: {
      type: String,
      required: [true, "label es requerido"],
      trim: true,
      maxLength: [50, "label no puede exceder 50 caracteres"],
      index: true,
    },
    icon: {
      type: String,
      required: [true, "icono es requerido"],
      index: true,
    },
    href: {
      type: String,
      required: [true, "URL es requerida"],
      trim: true,
      unique: true,
      validate: {
        validator: function (v: string) {
          return /^https?:\/\/.+/.test(v);
        },
        message: "Debe ser una URL válida (http:// o https://)",
      },
    },
    order: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    openInNewTab: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ["published", "draft", "archived"],
      default: "draft",
      index: true,
    },
    color: {
      type: String,
      trim: true,
      validate: {
        validator: function (v: string) {
          return !v || /^#[0-9A-F]{6}$/i.test(v);
        },
        message: "color debe ser un código hexadecimal válido (#RRGGBB)",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "social_media",
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

SocialMediaSchema.index({ isActive: 1, status: 1, order: 1 });

SocialMediaSchema.methods.publish = async function () {
  this.status = "published";
  return await this.save();
};

SocialMediaSchema.methods.archive = async function () {
  this.status = "archived";
  this.isActive = false;
  return await this.save();
};

SocialMediaSchema.methods.toggleActive = async function () {
  this.isActive = !this.isActive;
  return await this.save();
};

SocialMediaSchema.statics.getActive = async function () {
  return this.find({ isActive: true, status: "published" })
    .sort({ order: 1 })
    .lean<ISocialMediaDocument[]>()
    .exec();
};

SocialMediaSchema.statics.getPublished = async function () {
  return this.find({ status: "published" })
    .sort({ order: 1 })
    .lean<ISocialMediaDocument[]>()
    .exec();
};

SocialMediaSchema.statics.findByHref = async function (href: string) {
  return this.findOne({ href }).lean<ISocialMediaDocument>().exec();
};

SocialMediaSchema.virtual("isVisible").get(function () {
  return this.status === "published" && this.isActive;
});

export const SocialMediaModel: ISocialMediaModel =
  (models.SocialMedia as ISocialMediaModel) ||
  model<ISocialMediaDocument, ISocialMediaModel>(
    "SocialMedia",
    SocialMediaSchema
  );
