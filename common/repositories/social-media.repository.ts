import { FilterQuery } from "mongoose";
import { ISocialMediaRepository } from "../interfaces/repositories/social-media.repository.interface";
import { connectDB } from "../libs/mongoose";
import { SocialMediaEntity, SocialMediaFilters, STATUS_TYPE_ENTRY_CMS } from "../types/social-media.types";
import { SocialMediaModel } from "../models/SocialMedia";
import { CreateSocialMediaDto } from "../dto/social-media/create-social-media.dto";
import { UpdateSocialMediaDto } from "../dto/social-media/update-social-media.dto";

export class SocialMediaRepository implements ISocialMediaRepository {
  private async ensureConnection() {
    await connectDB();
  }

  private mapToEntity(doc: any): SocialMediaEntity {
    return {
      _id: doc._id.toString(),
      label: doc.label,
      icon: doc.icon,
      href: doc.href,
      order: doc.order,
      isActive: doc.isActive,
      openInNewTab: doc.openInNewTab,
      status: doc.status,
      color: doc.color,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }

  async findAll(filters?: SocialMediaFilters): Promise<SocialMediaEntity[]> {
    await this.ensureConnection();

    const query: FilterQuery<any> = {};

    if (filters?.isActive !== undefined) {
      query.isActive = filters.isActive;
    }

    if (filters?.icon) {
      query.icon = filters.icon;
    }

    const docs = await SocialMediaModel.find(query).sort({ order: 1 }).lean().exec();

    return docs.map((doc) => this.mapToEntity(doc));
  }

  async findActive(): Promise<SocialMediaEntity[]> {
    await this.ensureConnection();

    const docs = await SocialMediaModel.getActive();
    return docs.map((doc) => this.mapToEntity(doc));
  }

  async findById(id: string): Promise<SocialMediaEntity | null> {
    await this.ensureConnection();

    const doc = await SocialMediaModel.findById(id).lean().exec();

    return doc ? this.mapToEntity(doc) : null;
  }

  async create(data: CreateSocialMediaDto): Promise<SocialMediaEntity> {
    await this.ensureConnection();

    if (data.order === undefined) {
      data.order = await this.getNextOrder();
    }

    const doc = await SocialMediaModel.create(data);
    return this.mapToEntity(doc.toObject());
  }

  async update(id: string, data: UpdateSocialMediaDto): Promise<SocialMediaEntity | null> {
    await this.ensureConnection();

    const doc = await SocialMediaModel.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
      .lean()
      .exec();

    return doc ? this.mapToEntity(doc) : null;
  }

  async delete(id: string): Promise<SocialMediaEntity | null> {
    await this.ensureConnection();

    const doc = await SocialMediaModel.findById(id).lean().exec();

    if (!doc) return null;

    await SocialMediaModel.findByIdAndDelete(id);

    await this.reorderAfterDelete(doc.order);

    return this.mapToEntity(doc);
  }

  async toggleActive(id: string): Promise<SocialMediaEntity | null> {
    await this.ensureConnection();

    const doc = await SocialMediaModel.findById(id).exec();

    if (!doc) return null;

    await doc.toggleActive();

    return this.mapToEntity(doc.toObject());
  }

  async reorderAfterDelete(deletedOrder: number): Promise<void> {
    await this.ensureConnection();

    await SocialMediaModel.updateMany({ order: { $gt: deletedOrder } }, { $inc: { order: -1 } });
  }

  async getNextOrder(): Promise<number> {
    await this.ensureConnection();

    const count = await SocialMediaModel.countDocuments();
    return count;
  }

  async exists(id: string): Promise<boolean> {
    await this.ensureConnection();

    const count = await SocialMediaModel.countDocuments({ _id: id });
    return count > 0;
  }

  async count(filters?: SocialMediaFilters): Promise<number> {
    await this.ensureConnection();

    const query: FilterQuery<any> = {};

    if (filters?.isActive !== undefined) {
      query.isActive = filters.isActive;
    }

    if (filters?.icon) {
      query.icon = filters.icon;
    }

    return SocialMediaModel.countDocuments(query);
  }

  async findByHref(href: string): Promise<SocialMediaEntity | null> {
    await this.ensureConnection();

    const doc = await SocialMediaModel.findByHref(href);
    return doc ? this.mapToEntity(doc) : null;
  }

  async publish(id: string): Promise<SocialMediaEntity | null> {
    await this.ensureConnection();

    const doc = await SocialMediaModel.findById(id).exec();
    if (!doc) return null;

    await doc.publish();
    return this.mapToEntity(doc.toObject());
  }

  async archive(id: string): Promise<SocialMediaEntity | null> {
    await this.ensureConnection();

    const doc = await SocialMediaModel.findById(id).exec();
    if (!doc) return null;

    await doc.archive();
    return this.mapToEntity(doc.toObject());
  }

  async updateStatus(id: string, status: STATUS_TYPE_ENTRY_CMS): Promise<SocialMediaEntity | null> {
    await this.ensureConnection();

    const doc = await SocialMediaModel.findByIdAndUpdate(id, { $set: { status } }, { new: true, runValidators: true })
      .lean()
      .exec();

    return doc ? this.mapToEntity(doc) : null;
  }
}

let repositoryInstance: SocialMediaRepository | null = null;

export function getSocialMediaRepository(): SocialMediaRepository {
  if (!repositoryInstance) {
    repositoryInstance = new SocialMediaRepository();
  }
  return repositoryInstance;
}
