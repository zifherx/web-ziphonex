import { IBaseRepository } from "./base.repository.interface";

import { TestimonialEntity, TestimonialFilters } from "@/common/types/testimonial.types";
import { CreateTestimonialDto } from "@/common/dto/testimonial/create-testimonial.dto";
import { UpdateTestimonialDto } from "@/common/dto/testimonial/update-testimonial.dto";
import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";

export interface ITestimonialRepository
  extends IBaseRepository<TestimonialEntity, CreateTestimonialDto, UpdateTestimonialDto> {
  findAll(filters?: TestimonialFilters): Promise<TestimonialEntity[]>;
  findActive(): Promise<TestimonialEntity[]>;
  findById(id: string): Promise<TestimonialEntity | null>;
  create(data: CreateTestimonialDto): Promise<TestimonialEntity>;
  update(id: string, data: UpdateTestimonialDto): Promise<TestimonialEntity | null>;
  delete(id: string): Promise<TestimonialEntity | null>;
  toggleActive(id: string): Promise<TestimonialEntity | null>;
  publish(id: string): Promise<TestimonialEntity | null>;
  archive(id: string): Promise<TestimonialEntity | null>;
  updateStatus(id: string, status: STATUS_TYPE_ENTRY_CMS): Promise<TestimonialEntity | null>;
  findByRating(minRating: number): Promise<TestimonialEntity[]>;
}
