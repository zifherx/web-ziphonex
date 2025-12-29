import { CreateTestimonialDto } from "@/common/dto/testimonial/create-testimonial.dto";
import { UpdateTestimonialDto } from "@/common/dto/testimonial/update-testimonial.dto";
import { TestimonialResponseDto } from "@/common/dto/testimonial/testimonial-response.dto";
import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";

export interface ITestimonialService {
  getAll(includeInactive?: boolean): Promise<TestimonialResponseDto[]>;
  getActive(): Promise<TestimonialResponseDto[]>;
  getById(id: string): Promise<TestimonialResponseDto>;
  create(data: CreateTestimonialDto): Promise<TestimonialResponseDto>;
  update(id: string, data: UpdateTestimonialDto): Promise<TestimonialResponseDto>;
  delete(id: string): Promise<TestimonialResponseDto>;
  toggleActive(id: string): Promise<TestimonialResponseDto>;
  publish(id: string): Promise<TestimonialResponseDto>;
  archive(id: string): Promise<TestimonialResponseDto>;
  updateStatus(id: string, status: STATUS_TYPE_ENTRY_CMS): Promise<TestimonialResponseDto>;
  getByRating(minRating: number): Promise<TestimonialResponseDto[]>;
}
