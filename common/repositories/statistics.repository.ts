import { FilterQuery } from "mongoose";
import { IStatisticsRepository } from "../interfaces/repositories/statistics.repository.interface";
import { connectDB } from "../libs/mongoose";
import { StatisticEntity, StatisticFilters } from "../types/statistics.types";
import { StatisticModel } from "../models/Statistics";
import { CreateStatisticsDto } from "../dto/statistics/create-statistics.dto";
import { UpdateStatisticsDto } from "../dto/statistics/update-statistics.dto";
import { STATUS_TYPE_ENTRY_CMS } from "../types/social-media.types";

export class StatisticRepository implements IStatisticsRepository {
  private async ensureConnection() {
    await connectDB();
  }

  private mapToEntity(doc: any): StatisticEntity {
    return {
      _id: doc._id.toString(),
      icon: doc.icon,
      iconColor: doc.iconColor,
      iconBGColor: doc.iconBGColor,
      value: doc.value,
      secondaryValue: doc.secondaryValue,
      symbol: doc.symbol,
      title: doc.title,
      description: doc.description,
      order: doc.order,
      isActive: doc.isActive,
      status: doc.status,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }

  async findAll(filters?: StatisticFilters): Promise<StatisticEntity[]> {
    await this.ensureConnection();

    const query: FilterQuery<any> = {};

    if (filters?.isActive !== undefined) {
      query.isActive = filters.isActive;
    }

    if (filters?.status !== undefined) {
      query.status = filters.status;
    }

    if (filters?.minValue !== undefined) {
      query.value = { ...query.value, $gte: filters.minValue };
    }

    if (filters?.maxValue !== undefined) {
      query.value = { ...query.value, $lte: filters.maxValue };
    }

    const dosc = await StatisticModel.find(query).sort({ order: 1, createdAt: -1 }).lean().exec();

    return dosc.map((doc) => this.mapToEntity(doc));
  }

  async findActive(): Promise<StatisticEntity[]> {
    await this.ensureConnection();

    const docs = await StatisticModel.getActive();
    return docs.map((doc) => this.mapToEntity(doc));
  }

  async findById(id: string): Promise<StatisticEntity | null> {
    await this.ensureConnection();

    const doc = await StatisticModel.findById(id).lean().exec();
    return doc ? this.mapToEntity(doc) : null;
  }

  async create(data: CreateStatisticsDto): Promise<StatisticEntity> {
    await this.ensureConnection();

    const doc = await StatisticModel.create(data);
    return this.mapToEntity(doc.toObject());
  }

  async update(id: string, data: UpdateStatisticsDto): Promise<StatisticEntity | null> {
    await this.ensureConnection();

    const doc = await StatisticModel.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
      .lean()
      .exec();

    return doc ? this.mapToEntity(doc) : null;
  }

  async delete(id: string): Promise<StatisticEntity | null> {
    await this.ensureConnection();

    const doc = await StatisticModel.findById(id).exec();
    if (!doc) return null;

    await doc.toggleActive();
    return this.mapToEntity(doc.toObject());
  }

  async toggleActive(id: string): Promise<StatisticEntity | null> {
    await this.ensureConnection();

    const doc = await StatisticModel.findById(id).exec();
    if (!doc) return null;

    await doc.toggleActive();
    return this.mapToEntity(doc.toObject());
  }

  async exists(id: string): Promise<boolean> {
    await this.ensureConnection();

    const count = await StatisticModel.countDocuments({ _id: id });
    return count > 0;
  }

  async count(filters?: any): Promise<number> {
    await this.ensureConnection();

    const query: FilterQuery<any> = {};

    if (filters?.isActive !== undefined) {
      query.isActive = filters.isActive;
    }

    if (filters?.status) {
      query.status = filters.status;
    }

    if (filters?.minValue !== undefined) {
      query.value = { ...query.value, $gte: filters.minValue };
    }

    if (filters?.maxValue !== undefined) {
      query.value = { ...query.value, $lte: filters.maxValue };
    }

    return StatisticModel.countDocuments(query);
  }

  async publish(id: string): Promise<StatisticEntity | null> {
    await this.ensureConnection();

    const doc = await StatisticModel.findById(id).exec();
    if (!doc) return null;

    await doc.publish();
    return this.mapToEntity(doc.toObject());
  }

  async archive(id: string): Promise<StatisticEntity | null> {
    await this.ensureConnection();

    const doc = await StatisticModel.findById(id).exec();
    if (!doc) return null;

    await doc.archive();
    return this.mapToEntity(doc.toObject());
  }

  async updateStatus(id: string, status: STATUS_TYPE_ENTRY_CMS): Promise<StatisticEntity | null> {
    await this.ensureConnection();

    const doc = await StatisticModel.findByIdAndUpdate(id, { $set: { status } }, { new: true, runValidators: true })
      .lean()
      .exec();

    return doc ? this.mapToEntity(doc) : null;
  }

  async findByStatus(status: STATUS_TYPE_ENTRY_CMS): Promise<StatisticEntity[]> {
    await this.ensureConnection();

    const docs = await StatisticModel.getByStatus(status);
    return docs.map((doc) => this.mapToEntity(doc));
  }

  async reorder(updates: Array<{ id: string; order: number }>): Promise<void> {
    await this.ensureConnection();

    await StatisticModel.reorder(updates);
  }

  async updateOrder(id: string, newOrder: number): Promise<StatisticEntity | null> {
    await this.ensureConnection();

    const doc = await StatisticModel.findById(id).exec();
    if (!doc) return null;

    await doc.updateOrder(newOrder);
    return this.mapToEntity(doc.toObject());
  }
}

let repositoryInstance: StatisticRepository | null = null;

export function getStatisticRepository(): StatisticRepository {
  if (!repositoryInstance) {
    repositoryInstance = new StatisticRepository();
  }

  return repositoryInstance;
}
