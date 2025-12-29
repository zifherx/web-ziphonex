import { Model, Types } from "mongoose";
import { StatisticEntity } from "../types/statistics.types";
import { STATUS_TYPE_ENTRY_CMS } from "../types/social-media.types";

export interface IStatisticDocument extends Omit<StatisticEntity, "_id">, Document {
  _id: Types.ObjectId;
  isVisible: boolean;
  displayValue: string;
}

export interface IStatisticModel extends Model<IStatisticDocument, {}, IStatisticMethods> {
  getActive(): Promise<IStatisticDocument[]>;
  getPublished(): Promise<IStatisticDocument[]>;
  getByStatus(status: STATUS_TYPE_ENTRY_CMS): Promise<IStatisticDocument[]>;
  getByTitle(title: string): Promise<IStatisticDocument[]>;
  reorder(updates: Array<{ id: string; order: number }>): Promise<any>;
}

export interface IStatisticMethods {
  publish(): Promise<IStatisticDocument>;
  archive(): Promise<IStatisticDocument>;
  toggleActive(): Promise<IStatisticDocument>;
  updateOrder(newOrder: number): Promise<IStatisticDocument>;
}
