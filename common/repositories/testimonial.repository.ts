import { FilterQuery } from "mongoose";

import { TestimonialModel } from "../models/Testimonial";
import { connectDB } from "../libs/mongoose";

import { ITestimonialRepository } from "../interfaces/repositories/testimonial.repository.interface";
import { TestimonialEntity, TestimonialFilters } from "../types/testimonial.types";
import { CreateTestimonialDto } from "../dto/testimonial/create-testimonial.dto";
import { UpdateTestimonialDto } from "../dto/testimonial/update-testimonial.dto";
import { STATUS_TYPE_ENTRY_CMS } from "../types/social-media.types";

export class TestimonialRepository implements ITestimonialRepository {
  private async ensureConnection() {
    await connectDB();
  }

  private mapToEntity(doc: any): TestimonialEntity {
    return {
      _id: doc._id.toString(),
      resena: doc.resena,
      rating: doc.rating,
      author: {
        name: doc.author.name,
        position: doc.author.position,
        company: doc.author.company,
        avatar: doc.author.avatar,
      },
      status: doc.status,
      isActive: doc.isActive,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }

  async findAll(filters?: TestimonialFilters): Promise<TestimonialEntity[]> {
    await this.ensureConnection();

    const query: FilterQuery<any> = {};

    if (filters?.isActive !== undefined) {
      query.isActive = filters.isActive;
    }

    if (filters?.status !== undefined) {
      query.status = filters.status;
    }

    if (filters?.rating !== undefined) {
      query.rating = filters.rating;
    }

    if (filters?.minRating !== undefined) {
      query.rating = { $gte: filters.minRating };
    }

    const docs = await TestimonialModel.find(query).sort({ rating: -1, createdAt: -1 }).lean().exec();

    return docs.map((doc) => this.mapToEntity(doc));
  }

  async findActive(): Promise<TestimonialEntity[]> {
    await this.ensureConnection();

    const docs = await TestimonialModel.getActive();
    return docs.map((doc) => this.mapToEntity(doc));
  }

  async findById(id: string): Promise<TestimonialEntity | null> {
    await this.ensureConnection();
    const doc = await TestimonialModel.findById(id).lean().exec();
    return doc ? this.mapToEntity(doc) : null;
  }

  async create(data: CreateTestimonialDto): Promise<TestimonialEntity> {
    await this.ensureConnection();
    const doc = await TestimonialModel.create(data);
    return this.mapToEntity(doc.toObject());
  }

  async update(id: string, data: UpdateTestimonialDto): Promise<TestimonialEntity | null> {
    await this.ensureConnection();
    const doc = await TestimonialModel.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
      .lean()
      .exec();
    return doc ? this.mapToEntity(doc) : null;
  }

  async delete(id: string): Promise<TestimonialEntity | null> {
    await this.ensureConnection();

    const doc = await TestimonialModel.findByIdAndDelete(id).lean().exec();

    return doc ? this.mapToEntity(doc) : null;
  }

  async toggleActive(id: string): Promise<TestimonialEntity | null> {
    await this.ensureConnection();

    const doc = await TestimonialModel.findById(id).exec();

    if (!doc) return null;

    await doc.toggleActive();

    return this.mapToEntity(doc.toObject());
  }

  async exists(id: string): Promise<boolean> {
    await this.ensureConnection();

    const count = await TestimonialModel.countDocuments({ _id: id });
    return count > 0;
  }

  async count(filters?: TestimonialFilters): Promise<number> {
    await this.ensureConnection();

    const query: FilterQuery<any> = {};

    if (filters?.isActive !== undefined) {
      query.isActive = filters.isActive;
    }

    if (filters?.status) {
      query.status = filters.status;
    }

    if (filters?.rating !== undefined) {
      query.rating = filters.rating;
    }

    if (filters?.minRating !== undefined) {
      query.rating = { $gte: filters.minRating };
    }

    return TestimonialModel.countDocuments(query);
  }

  async publish(id: string): Promise<TestimonialEntity | null> {
    await this.ensureConnection();

    const doc = await TestimonialModel.findById(id).exec();
    if (!doc) return null;

    await doc.publish();
    return this.mapToEntity(doc.toObject());
  }

  async archive(id: string): Promise<TestimonialEntity | null> {
    await this.ensureConnection();

    const doc = await TestimonialModel.findById(id).exec();
    if (!doc) return null;

    await doc.archive();
    return this.mapToEntity(doc.toObject());
  }

  async updateStatus(id: string, status: STATUS_TYPE_ENTRY_CMS): Promise<TestimonialEntity | null> {
    await this.ensureConnection();

    const doc = await TestimonialModel.findByIdAndUpdate(id, { $set: { status } }, { new: true, runValidators: true })
      .lean()
      .exec();

    return doc ? this.mapToEntity(doc) : null;
  }

  async findByRating(minRating: number): Promise<TestimonialEntity[]> {
    await this.ensureConnection();

    const docs = await TestimonialModel.getByRating(minRating);
    return docs.map((doc) => this.mapToEntity(doc));
  }
}

let repositoryInstance: TestimonialRepository | null = null;

export function getTestimonialRepository(): TestimonialRepository {
  if (!repositoryInstance) {
    repositoryInstance = new TestimonialRepository();
  }
  return repositoryInstance;
}
