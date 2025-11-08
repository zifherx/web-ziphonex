import { Document, Model, Types } from "mongoose";
import { SocialMediaEntity } from "../types/social-media.types";
import { GENERAL_ICON } from "../types";

export interface ISocialMediaDocument
  extends Omit<SocialMediaEntity, "_id">,
    Document {
  _id: Types.ObjectId;
}

export interface ISocialMediaModel
  extends Model<ISocialMediaDocument, {}, ISocialMediaMethods> {
  getActive(): Promise<ISocialMediaDocument[]>;
  findByHref(href: string): Promise<ISocialMediaDocument | null>;
}

export interface ISocialMediaMethods {
  publish(): Promise<ISocialMediaDocument>;
  archive(): Promise<ISocialMediaDocument>;
  toggleActive(): Promise<ISocialMediaDocument>;
}

export interface ITrustIndicators {
  id: number;
  title: string;
  value: number;
  icon: GENERAL_ICON;
  bgIcon: string;
  colorIcon: string;
}
